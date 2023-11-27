<template>
  <section id="container-header">
    <div class="header both-margin flex-row space-between nowrap">
      <img :src="libraLogoDark" class="logo-img mit" alt='libra' @click="goMain" />
      <el-input v-model="searchValue" class="w-50 m-2 font-14" clearable placeholder="Search by Address, Block Height, TxHash...">
        <template #append>
          <el-button :class="{'is-active': searchValue !== ''}">{{ searchValue ? 'Search Block': 'Search'}}</el-button>
        </template>
      </el-input>
      <div class="header-right flex-row nowrap" v-show="clientWidth">
        <div class="get-started">
          <router-link :to="{name:'get-started'}" :class="{'no-color': route.name !== 'get-started'}">Get Started</router-link>
          <span></span>
        </div>
        <div class="connect flex-row nowrap" v-if="accessToken">
          <el-dropdown @command="handleSelect" class="sign-popper" popper-class="menu-popper" placement="bottom" :teleported="true">
            <span class="el-dropdown-link flex-row">
              <img :src="metaLogo" alt="" class="image" height="20" width="20" /> {{system.$commonFun.hiddAddress(metaAddress)}}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout">
                  <span class="font-16">Logout</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="connect flex-row nowrap" v-else @click="connetShow=true">
          <svg class="width-icon small" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountBalanceWalletIcon">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          </svg>
          <span>Connect Wallet</span>
        </div>
        <div class="sign">
          <el-dropdown @command="handleSelect" class="sign-popper" popper-class="menu-popper" placement="bottom-end" :teleported="true">
            <span class="el-dropdown-link">
              <svg class="width-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu v-if="emailAddress">
                <el-dropdown-item command="">
                  <span class="font-16">{{emailAddress}}</span>
                </el-dropdown-item>
                <el-dropdown-item command="logout">
                  <span class="font-16">Logout</span>
                </el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu v-else>
                <el-dropdown-item command="register">
                  <span class="font-16">Sign Up</span>
                </el-dropdown-item>
                <el-dropdown-item command="login">
                  <span class="font-16">Sign In</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="menu-button" v-show="!clientWidth" @click="menuDialog=true">
        <svg class="width-icon" v-show="!menuDialog" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
        <svg class="width-icon" v-show="menuDialog" t="1698992187359" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3865" width="200" height="200">
          <path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
            p-id="3866"></path>
        </svg>
      </div>
    </div>

    <el-drawer size="300px" v-model="menuDialog" :append-to-body="true" :with-header="false" :before-close="handleClose" direction="ltr" class="demo-drawer">
      <div class="demo-drawer__content">
        <v-aside v-show="clientWidth"></v-aside>
      </div>
    </el-drawer>
    <pop-ups v-if="connetShow" :connetShow="connetShow" @hardClose="hardClose"></pop-ups>
  </section>
</template>
<script>
import vAside from './Aside.vue'
import popUps from "@/components/popups"
import { defineComponent, computed, onMounted, onBeforeUnmount, nextTick, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
// import {} from '@element-plus/icons-vue'
import { ElInput, ElDropdown, ElDropdownMenu, ElDropdownItem, ElButton, ElDrawer } from "element-plus"
export default defineComponent({
  components: {
    vAside, popUps,
    ElInput, ElDropdown, ElDropdownMenu, ElDropdownItem, ElButton, ElDrawer  },
  setup () {
    const store = useStore()
    const reverse = computed(() => (store.state.reverse))
    const accessToken = computed(() => (store.state.accessToken))
    const metaAddress = computed(() => (store.state.metaAddress))
    const emailAddress = computed(() => (store.state.emailAddress))
    const clientWidth = computed(() => (store.state.clientWidth))
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    // const libraLogo = require("@/assets/images/logo-light.png")
    const libraLogo = require("@/assets/images/logo-light.png")
    const libraLogoDark = require("@/assets/images/logo-dark.png")
    const metaLogo = require("@/assets/images/metamask.png")
    const searchValue = ref('')
    const menuDialog = ref(false)
    const connetShow = ref(false)
    const reverseLogo = ref(false)

    const handleClose = () => {
      menuDialog.value = false
    }
    function hardClose (dialog) {
      connetShow.value = dialog
    }
    async function handleSelect (key, keyPath) {
      // console.log(key, keyPath) //  
      switch (key) {
        case 'login':
          router.push({ name: 'login', query: { state: 'LogIn' } })
          break;
        case 'register':
          router.push({ name: 'login', query: { state: 'SignUp' } })
          break;
        case 'logout':
          system.$commonFun.signOutMeta()
          break;
      }
      // store.dispatch('setMenu', key)
    }
    onMounted(async () => { })
    onBeforeUnmount(() => { })
    watch(clientWidth, () => {
      if (clientWidth.value) handleClose()
    })
    watch(route, (to, from) => { })
    return {
      system,
      accessToken,
      metaAddress,
      emailAddress,
      route,
      bodyWidth,
      clientWidth,
      reverseLogo,
      libraLogo,
      libraLogoDark,
      metaLogo,
      searchValue,
      menuDialog,
      connetShow,
      handleClose, hardClose, handleSelect
    }
  }
})
</script>
<style lang="less" scoped>
#container-header {
  width: 100%;
  white-space: nowrap;
  :deep(.header) {
    margin: auto;
    font-size: 16px;
    .logo-img,
    .mit-body {
      height: 32px;
      cursor: pointer;
      @media screen and (min-width: 2160px) {
        height: 42px;
      }
      @media screen and (min-width: 3000px) {
        height: 52px;
      }
      @media screen and (min-width: 4600px) {
        height: 62px;
      }
      @media screen and (min-width: 5120px) {
        height: 72px;
      }
      @media screen and (min-width: 6000px) {
        height: 82px;
      }
      @media screen and (max-width: 768px) {
        height: 29px;
      }
    }
    .el-input {
      // width: auto;
      max-width: 560px;
      margin: 0 10px;
      border-radius: 4px;
      border: 1px solid rgb(158, 158, 158);
      // @media screen and (max-width: 1260px) {
      //   max-width: 500px;
      // }
      // @media screen and (max-width: 768px) {
      //   max-width: 600px;
      // }
      // @media screen and (max-width: 767px) {
      //   max-width: 100%;
      // }
      .el-input__wrapper {
        height: auto;
        padding: 4px 12px;
        background: transparent;
        color: @primary-color;
        border: 0;
        box-shadow: none;
        line-height: 1;
        .el-input__inner {
          color: inherit;
        }
      }
      .el-input__prefix {
        padding: 0;
        .el-icon {
          svg {
            width: 22px;
            height: 22px;
            color: #9ea5b3;
          }
        }
      }
      .el-input-group__append {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        border: 0;
        width: auto;
        box-shadow: none;
        .el-button {
          text-transform: uppercase;
          &.is-active {
            color: @primary-color;
          }
        }
      }
      .el-input__clear,
      .el-input__password {
        color: @primary-color;
        font-size: 18px;
      }
    }
    .header-right {
      color: @primary-color;
      .get-started {
        position: relative;
        min-width: 64px;
        padding: 6px 10px;
        line-height: 24px;
        &:hover {
          background-color: @primary-color-opacity2;
        }
        a.no-color {
          color: @primary-color;
        }
        span {
          position: absolute;
          right: 0;
          width: 8px;
          height: 8px;
          background-color: @theme-color;
          color: @theme-color-opacity;
          border-radius: 8px;
          box-shadow: 0 0 0 2px @theme-color;
          transform: scale(1) translate(50%, -50%);
          transform-origin: 100% 0%;
          transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            -webkit-animation: ripple 1.2s infinite ease-in-out;
            animation: ripple 1.2s infinite ease-in-out;
            border: 1px solid currentColor;
            content: "";
          }
        }
      }
      .connect {
        padding: 6px 15px;
        margin: 0 20px;
        text-transform: uppercase;
        border: 1.6px solid @theme-color-opacity;
        border-radius: 4px;
        line-height: 1.5;
        cursor: pointer;
        &:hover {
          border-color: @theme-color;
        }
        * {
          outline: none !important;
        }
        .width-icon {
          margin-right: 8px;
        }
        .image {
          margin: 0 5px 0 0;
        }
      }
      .sign {
        .sign-popper {
          * {
            outline: none !important;
          }
          .el-dropdown-link {
            padding: 4px;
            color: @white-color;
            background-color: @dot-fusco-color;
            border-radius: 64px;
            * {
              cursor: pointer;
            }
            .width-icon {
              fill: @white-color;
            }
            &:focus-visible {
              outline: none !important;
            }
          }
        }
      }
    }
    .menu-button {
      * {
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang="less">
.menu-popper {
  background-color: transparent;
  border: 0 !important;
  border-radius: 0;
  .el-popper__arrow {
    display: none;
  }
  .el-dropdown-menu {
    padding: 6px 0;
    border-radius: 4px;
    box-shadow: 0 0 10px @primary-color-opacity;
    li {
      padding: 6px 16px;
      background-color: @white-color;
      color: @primary-color !important;
      &:first-child {
        background-color: @theme-color;
        &:hover {
          background-color: @theme-color-opacity1;
        }
      }
      &:hover {
        background-color: rgba(233, 233, 233, 0.8);
      }
      span {
        min-width: 168px;
        line-height: 1.5;
        text-align: center;
      }
    }
  }
}
.el-overlay {
  cursor: pointer;
}
.demo-drawer {
  background-color: rgb(16, 16, 16);
  .el-drawer__body {
    padding: 0;
    .demo-drawer__content {
      height: 100%;
      .aside-main {
        display: block !important;
        .el-menu {
          width: 100%;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
