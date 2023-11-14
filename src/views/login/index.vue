<template>
  <section id="login">
    <div class="login_body flex-row">
      <div class="module">
        <div class="logo-style">
          <img :src="logoImg" class="img" />
          <p class="font-22">Libra Cloud OS</p>
        </div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Log In" name="LogIn"></el-tab-pane>
          <el-tab-pane label="Sign Up" name="SignUp"></el-tab-pane>
        </el-tabs>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon @submit.native.prevent>
          <el-form-item prop="email">
            <label class="label" for="email">
              <div class="flex-row">
                <el-input v-model="ruleForm.email" placeholder="yours@example.com">
                  <template #prepend>
                    <span class="width-icon minimum-small flex-row">
                      <svg aria-hidden="true" focusable="false" width="14px" height="13px" viewBox="0 0 32 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="32px" transform="translate(-2155.000000, -2317.000000)" fill="#373A39">
                            <g id="Group-856" transform="translate(1.000000, 1.000000)">
                              <path id="Fill-419" d="M2184,2339 C2184,2339.55 2183.55,2340 2183,2340 L2157,2340 C2156.45,2340 2156,2339.55 2156,2339 L2156,2319 C2156,2318.45 2156.45,2318 2157,2318 L2183,2318 C2183.55,2318 2184,2318.45 2184,2319 L2184,2339 L2184,2339 Z M2184,2316 L2156,2316 C2154.89,2316 2154,2316.89 2154,2318 L2154,2340 C2154,2341.1 2154.89,2342 2156,2342 L2184,2342 C2185.1,2342 2186,2341.1 2186,2340 L2186,2318 C2186,2316.89 2185.1,2316 2184,2316 L2184,2316 Z M2176,2322 L2180,2322 L2180,2326 L2176,2326 L2176,2322 Z M2174,2328 L2182,2328 L2182,2320 L2174,2320 L2174,2328 Z M2158,2332 L2172,2332 L2172,2330 L2158,2330 L2158,2332 Z M2158,2336 L2172,2336 L2172,2334 L2158,2334 L2158,2336 Z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </template>
                </el-input>
              </div>
            </label>
          </el-form-item>
          <el-form-item prop="password">
            <label class="label" for="password">
              <div class="flex-row">
                <el-input v-model="ruleForm.password" placeholder="your password" type="password" show-password>
                  <template #prepend>
                    <span class="width-icon minimum-small flex-row">
                      <Lock />
                    </span>
                  </template>
                </el-input>
              </div>
            </label>

            <div class="forget" v-if="activeName === 'LogIn'">
              <router-link :to="{name: 'reset'}">Don't remember your password?</router-link>
            </div>
            <el-checkbox-group v-model="ruleForm.agreement" v-else>
              <el-checkbox label="agreement">Yes, I would also like to sign up for the newsletter.</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="flex-row agreement-style">
          <el-checkbox-group v-model="ruleForm.agreement">
            <el-checkbox label="agreement">I have read and agree to
              <a class="agree" href="/" target="_blank">Terms of Services</a>.
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button size="large" @click="submitForm('ruleFormRef')">Log in &gt;</el-button>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Lock } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem, ElTabs, ElTabPane, ElCheckbox, ElCheckboxGroup } from 'element-plus'
export default defineComponent({
  name: "Login",
  components: {
    Lock, ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem, ElTabs, ElTabPane, ElCheckbox, ElCheckboxGroup
  },
  setup () {
    const store = useStore()
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const logoImg = require("@/assets/images/logo-small.png")
    const ruleForm = reactive({
      email: '',
      password: '',
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
    const activeName = ref('LogIn')

    const handleClick = (tab, event) => {
      console.log(tab, event)
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
      logoImg,
      ruleFormRef,
      ruleForm,
      rules,
      createLoad,
      system,
      activeName,
      submitForm, handleClick
    }
  },
});
</script>

<style lang="less" scoped>
#login {
  height: 100%;
  background-color: #000;
  color: @primary-color;
  font-size: 18px;
  text-align: center;
  :deep(.login_body) {
    width: 100%;
    min-height: 100vh;
    margin: auto;
    font-size: 14px;
    .module {
      width: 300px;
      margin: auto;
      background-color: #fff;
      border-radius: 6px;
      overflow: hidden;
      .logo-style {
        padding: 10px;
        background-color: @bg-color;
        text-align: center;
        .img {
          max-width: 60px;
          margin: 0 auto 10px;
        }
      }
      .demo-tabs {
        .el-tabs__header {
          .el-tabs__nav {
            width: 100%;
            .el-tabs__item {
              width: 50%;
              padding: 0;
              margin: 0;
              color: @primary-color-opacity1;
              &.is-active {
                color: @theme-color;
              }
            }
          }
        }
      }
      .demo-ruleForm {
        margin: 0 auto;
        padding: 20px 20px 0;
        .el-form-item {
          width: 100%;
          margin: 14px 0 0;
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
                flex-wrap: nowrap;
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
              .el-input__suffix {
                .el-input__suffix-inner {
                  margin-right: 5px;
                }
                .el-icon {
                  color: #828282;
                }
              }
              .el-input__wrapper {
                height: 40px;
                padding: 0 14px;
                font-size: 13px;
                line-height: 40px;
                .el-input__inner {
                  height: auto;
                  padding: 0;
                  @media screen and (min-width: 1800px) {
                    font-size: 16px;
                  }
                  @media screen and (max-width: 768px) {
                    font-size: 14px;
                  }
                }
              }
              .el-input-group__append,
              .el-input-group__prepend {
                padding: 0 14px;
                background-color: @bg-color;
              }
            }
            .forget {
              width: 100%;
              margin: 10px auto;
              font-size: 14px;
              text-align: center;
              color: @primary-color;
              a {
                color: inherit;
                &:hover {
                  text-decoration: underline;
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
      .agreement-style {
        background-color: @bg-color;
        .el-checkbox-group {
          margin: 12px auto;
        }
      }
      .el-button {
        width: 100%;
        height: 70px;
        padding: 0;
        background-color: @theme-color;
        border-color: @theme-color;
        font-family: inherit;
        cursor: pointer;
        font-size: 15px;
        font-weight: normal;
        border-radius: 0;
        line-height: 1;
        color: @white-color;
        text-transform: uppercase;
        transition: all 0.2s;
        span {
          cursor: inherit;
        }
        &.is-disabled {
          cursor: no-drop;
        }
        &:hover {
          font-size: 16px;
        }
      }
      .el-checkbox-group {
        width: 100%;
        margin: 15px auto 20px;
        .el-checkbox {
          align-items: flex-start;
          height: auto;
          .el-checkbox__label {
            font-size: 13px;
            font-weight: normal;
            color: @primary-color-opacity;
            white-space: initial;
            line-height: 1.4;
            a {
              color: @primary-color;
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
