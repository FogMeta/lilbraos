<template>
  <section id="login">
    <div class="login_body flex-row">
        <el-row>
          <el-col :xs="20" :sm="10" :md="8" :lg="6" :xl="6">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon @submit.native.prevent>
              <el-form-item prop="email">
                <label class="label" for="email">
                  <div class="flex flex-row">
                    <el-input v-model="ruleForm.email" placeholder="Email" />
                  </div>
                </label>
              </el-form-item>
              <el-form-item prop="password">
                <label class="label" for="password">
                  <div class="flex flex-row">
                    <el-input v-model="ruleForm.password" placeholder="Password" type="password" show-password />
                  </div>
                </label>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="large" @click="submitForm('ruleFormRef')">Sign in</el-button>

                <div class="forget">
                  <router-link :to="{name: 'reset'}">Forget password？</router-link>
                </div>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem } from 'element-plus'
export default defineComponent({
  name: "Login",
  components: {
    ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem
  },
  setup () {
    const store = useStore()
    const ruleForm = reactive({
      email: '',
      password: ''
    })
    const validatePass = (rule, value, callback) => {
      if (!checkSpecialKey(value)) {
        callback(new Error("Only regular alphanumeric characters, '-', '.' and '_' supported"));
      } else {
        callback();
      }
    }
    const validateEmail = (rule, value, callback) => {
      const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
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
      password: [
        { required: true, message: 'Please input a password', trigger: 'blur' },
        // { validator: validatePass, trigger: "blur" }
      ]
    })
    const ruleFormRef = ref(null)
    const createLoad = ref(false)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()

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
          const emailParams = {
            "email": ruleForm.email,
            "password": system.$commonFun.encrypt(ruleForm.password)
          }
          const userRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}/user/login`, 'post', emailParams)
          if (userRes && userRes.code === 0) {
            store.dispatch('setAccessToken', userRes.data ? userRes.data.token : '')
            store.dispatch('setEmailAddress', ruleForm.email)
            router.push({ name: 'metaarkDemo', params: { type: 'filelist' } })
          } else system.$commonFun.messageTip('error', userRes.msg ? userRes.msg : 'Login Failed!')
          createLoad.value = false
        } else {
          console.log('error submit!', fields)
          return false
        }
      })
    }
    onActivated(async () => {
      ruleFormRef.value.resetFields()
    })
    return {
      ruleFormRef,
      ruleForm,
      rules,
      createLoad,
      system,
      submitForm
    }
  },
});
</script>

<style lang="less" scoped>
#login {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  color: #fff;
  font-size: 18px;
  text-align: left;
  :deep(.login_body) {
    width: 100%;
    min-height: 100vh;
    margin:  auto;
    font-size: 14px;
    .el-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      min-height: 100%;
      .el-col {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      background-color: #fff;
      box-shadow: 0px 0px 14px rgba(163, 163, 163, 0.2);
      border-radius: 16px;
        .demo-ruleForm {
          display: flex;
          flex-wrap: wrap;
          width: 90%;
          max-width: 640px;
          margin: 0.5rem auto 0.2rem;
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
              .el-input {
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
                background-color: #239cfc;
                border-color: #239cfc;
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
                &.is-disabled {
                  cursor: no-drop;
                }
              }
              .forget {
                width: 100%;
                margin: 6px auto;
                font-size: 14px;
                color: #828282;
                text-align: center;
                a {
                  &:hover {
                    color: #239cfc;
                  }
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
