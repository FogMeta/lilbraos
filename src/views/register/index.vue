<template>
  <section id="register">
    <div class="register_body">
      <div class="width">
        <el-row v-loading="createLoad">
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon @submit.native.prevent>
              <el-form-item prop="email">
                <label class="label" for="email">
                  <div class="flex flex-row">
                    <el-input v-model="ruleForm.email" @input="emailBlur" placeholder="Email" />
                  </div>
                </label>
              </el-form-item>
              <el-form-item prop="code">
                <label class="label" for="code">
                  <div class="flex flex-row">
                    <el-input v-model="ruleForm.code" placeholder=" " />
                    <el-button type="info" class="el-code" size="large" v-if="sms.disabled">Try again in {{sms.count}}s</el-button>
                    <el-button :type="ruleForm.email_err?'info':'primary'" class="el-code" size="large" v-else @click="sendCode">Send code</el-button>
                  </div>
                </label>
                <div class="el-form-item__error error" v-if="sms.tip">Please check your Email and enter the verification code.</div>
              </el-form-item>
              <el-form-item prop="password">
                <label class="label" for="password">
                  <div class="flex flex-row">
                    <el-input v-model="ruleForm.password" placeholder="Password" type="password" show-password />
                  </div>
                </label>
              </el-form-item>
              <el-form-item prop="agreement">
                <el-checkbox-group v-model="ruleForm.agreement">
                  <el-checkbox label="agreement">I have agreed
                    <a class="agree" href="/" target="_blank">《User Agreement》</a>and
                    <a class="agree" href="/" target="_blank">《Privacy Agreement》</a>
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="large" @click="submitForm('ruleFormRef')">Sign up</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { FormInstance, FormRules } from 'element-plus'
export default defineComponent({
  name: "Regiser",
  setup () {
    const store = useStore()
    const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    const sms = reactive({
      disabled: false,
      total: 60,
      count: 0,
      tip: false
    })
    const ruleForm = reactive({
      email: '',
      password: '',
      code: '',
      email_err: true,
      agreement: ['agreement']
    })
    const validatePass = (rule, value, callback) => {
      if (!checkSpecialKey(value)) {
        callback(new Error("Only regular alphanumeric characters, '-', '.' and '_' supported"));
      } else {
        callback();
      }
    }
    const validateEmail = (rule, value, callback) => {
      // const vType = rule.field === 'email' ? value : ruleForm.email
      if (!regEmail.test(value)) {
        callback(new Error("Please input correct email address"));
      } else {
        callback();
      }
    }
    const rules = reactive({
      email: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        // { validator: validateEmail, trigger: "blur" }
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ],
      code: [
        { required: true, message: 'Please check your Email and enter the verification code.', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please input a password', trigger: 'blur' },
        // { validator: validatePass, trigger: "blur" }
      ],
      agreement: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        }
      ]
    })
    const ruleFormRef = ref(null)
    const createLoad = ref(false)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()

    function emailBlur () {
      // const vType = rule.field === 'email' ? value : ruleForm.email
      ruleForm.email_err = !regEmail.test(ruleForm.email)
    }
    function checkSpecialKey (str) {
      let specialKey =
        "[~!#$^&*()=|{}':;'\\[\\],<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
      for (let i = 0; i < str.length; i++) {
        if (specialKey.indexOf(str.substr(i, 1)) != -1) {
          return false;
        }
      }
      return true;
    }
    const submitForm = async (formEl) => {
      if (!formEl) return
      await ruleFormRef.value.validate(async (valid, fields) => {
        if (valid) {
          createLoad.value = true
          const hash = system.$commonFun.encrypt(ruleForm.password)
          const emailParams = {
            "email": ruleForm.email,
            "password": hash,
            "auth_code": ruleForm.code
          }
          const userRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}/user`, 'post', emailParams)
          if (userRes && userRes.code === 0) {
            system.$commonFun.messageTip('success', userRes.msg ? userRes.msg : 'Register successfully!')
            system.$commonFun.signOutMeta()
          } else system.$commonFun.messageTip('error', userRes.msg ? userRes.msg : 'Register Failed!')
          createLoad.value = false
        } else {
          console.log('error submit!', fields)
          return false
        }
      })
    }
    const timerHandler = () => {
      sms.count = sms.total
      sms.disabled = true
      sms.tip = false

      let timer = setInterval(() => {
        if (sms.count > 1 && sms.count <= sms.total) {
          sms.count--
        } else {
          sms.disabled = false
          clearInterval(timer)
        }
      }, 1000)
    }
    const sendCode = async () => {
      if (regEmail.test(ruleForm.email)) {
        timerHandler()
        const emailParams = {
          "email": ruleForm.email
        }
        const emailRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}/email`, 'post', emailParams)
        if (emailRes && emailRes.code === 0) console.log('Send code successfully!')
        else system.$commonFun.messageTip('error', emailRes.msg ? emailRes.msg : 'Send code Failed!')
      } else sms.tip = true
    }
    onActivated(async () => {
      ruleFormRef.value.resetFields()
      sms.disabled = false
      sms.total = 60
      sms.count = 0
      sms.tip = false
      ruleForm.email_err = true
    })
    return {
      sms,
      ruleFormRef,
      ruleForm,
      rules,
      createLoad,
      system,
      submitForm, sendCode, emailBlur
    }
  },
});
</script>

<style lang="less" scoped>
#register {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  color: #fff;
  font-size: 18px;
  text-align: left;
  :deep(.register_body) {
    width: 100%;
    margin: 0.32rem auto 0.27rem;
    font-size: 14px;
    .el-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      min-height: 100%;
      background-color: #fff;
      box-shadow: 0px 0px 14px rgba(163, 163, 163, 0.3);
      .el-col {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .demo-ruleForm {
          display: flex;
          flex-wrap: wrap;
          width: 95%;
          max-width: 640px;
          margin: 0.5rem auto 0.2rem;
          @media screen and (max-width: 441px) {
            width: 90%;
          }
          .el-form-item {
            width: 100%;
            margin-bottom: 24px;
            .el-form-item__content {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
              text-align: left;
              .label {
                width: 100%;
                text-align: left;
                color: #606060;
                font-size: 16px;
                @media screen and (max-width: 1440px) {
                  font-size: 14px;
                }
                @media screen and (max-width: 1024px) {
                  font-size: 12px;
                }
                .flex-row {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  .el-select {
                    width: 100%;
                  }
                  .self-end {
                    width: 30px;
                    text-align: center;
                  }
                }
              }
              .el-radio-group {
                width: 100%;
                margin: 0.2rem 0 0;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                .el-radio {
                  width: 100%;
                  height: auto;
                  margin: 0.2rem 0;
                  .el-radio__label {
                    h5,
                    p {
                      text-align: left;
                      font-size: 18px;
                      color: #333;
                      line-height: 1.5;
                      word-break: break-word;
                      white-space: normal;
                      @media screen and (max-width: 1600px) {
                        font-size: 17px;
                      }
                      @media screen and (max-width: 1440px) {
                        font-size: 16px;
                      }
                      @media screen and (max-width: 1024px) {
                        font-size: 14px;
                      }
                    }
                    p {
                      font-size: 15px;
                      font-weight: 100;
                      color: #7e7e7e;
                      line-height: 1.3;
                      @media screen and (max-width: 1600px) {
                        font-size: 14px;
                      }
                      @media screen and (max-width: 1440px) {
                        font-size: 13px;
                      }
                      @media screen and (max-width: 1024px) {
                        font-size: 12px;
                      }
                    }
                  }
                }
              }
              .el-checkbox-group {
                display: flex;
                width: 100%;
                .el-checkbox {
                  width: 100%;
                  margin: 0;
                  height: auto;
                  line-height: 1.2;
                  &.margin {
                    margin-left: 0.2rem;
                  }
                  .token_manage {
                    margin: 0;
                    @media screen and (max-width: 600px) {
                      margin-top: 0.1rem;
                    }
                  }
                  .el-checkbox__input {
                    .el-checkbox__inner {
                      width: 15px;
                      height: 15px;
                      background-color: transparent;
                      border-radius: 100%;
                      border: 0;
                      transition: all 0s;
                      &::after {
                        width: 100%;
                        height: 100%;
                        background: url(../../assets/images/icons/agreement.png)
                          no-repeat center;
                        background-size: 100%;
                        transform: none;
                        transition: all 0s;
                        border: 0;
                        left: 0;
                        top: 0;
                      }
                    }
                    &.is-checked {
                      .el-checkbox__inner {
                        &::after {
                          width: 100%;
                          height: 100%;
                          background: url(../../assets/images/icons/agreement_yes.png)
                            no-repeat center;
                          background-size: 100%;
                          transform: none;
                          transition: all 0s;
                          border: 0;
                          left: 0;
                          top: 0;
                        }
                      }
                    }
                  }
                  .el-checkbox__label {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    width: calc(100% - 0.08rem - 15px);
                    padding-left: 0.08rem;
                    font-size: 14px;
                    white-space: normal;
                    word-break: break-word;
                    line-height: 1.3;
                    color: #131313;
                    a {
                      color: #239cfc;
                    }
                    .radio_left {
                      word-break: break-word;
                      text-align: left;
                      @media screen and (max-width: 600px) {
                        width: 100%;
                      }
                      .title {
                        padding: 0 0 0.05rem 0;
                        word-break: break-word;
                        white-space: normal;
                        line-height: 1.2;
                      }
                    }
                  }
                  .agree {
                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
              }
              .el-input {
                &.el-code {
                  width: calc(100% - 225px);
                }
                .el-input__inner {
                  height: auto;
                  padding: 0.1rem 0.16rem;
                  // font-size: 16px;
                  border-color: #e2e2e2;
                  border-radius: 0.1rem;
                  line-height: 1;
                  color: #828282;
                  @media screen and (min-width: 1800px) {
                    font-size: 16px;
                  }
                  @media screen and (max-width: 768px) {
                    font-size: 14px;
                  }
                }
                .el-input__suffix {
                  .el-input__suffix-inner {
                    margin-right: 5px;
                  }
                  .el-icon {
                    color: #828282;
                  }
                }
              }
              .el-button {
                width: 100%;
                height: auto;
                padding: 0.115rem 0;
                font-family: inherit;
                cursor: pointer;
                font-size: 16px;
                border-radius: 0.1rem;
                line-height: 1;
                @media screen and (max-width: 768px) {
                  font-size: 14px;
                }
                span {
                  cursor: inherit;
                }
                &.el-code {
                  // width: 200px;
                  width: 70%;
                  padding: 0.115rem 0.15rem;
                  margin-left: 0.25rem;
                }
                &.el-button--primary {
                  background-color: #239cfc;
                  border-color: #239cfc;
                }
                &.el-button--info {
                  background-color: #c6c6c6;
                  border-color: #c6c6c6;
                }
                &.is-disabled {
                  cursor: no-drop;
                }
              }
            }
            .el-form-item__label {
              display: none;
            }
            &.flex_form {
              width: 50%;
              padding-bottom: 0;
              border-bottom: 0;
              .el-select {
                width: calc(100% - 30px);
              }
            }
            &.is-error {
              .el-form-item__content {
                .el-input {
                  .el-input__inner {
                    border-color: #239cfc;
                  }
                }
              }
              .error {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.license_style {
  .el-select-dropdown__item {
    height: auto;
    padding: 8px 3%;
    line-height: 1;
    p {
      margin: 0 0 5px;
      font-size: 14px;
      color: #000;
      line-height: 1.2;
    }
    small {
      font-size: 13px;
      color: #979797;
      line-height: 1.2;
    }
  }
}
</style>
