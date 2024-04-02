<template>
  <div class="navbar flex flex-center-align flex-between">
    <img class="navbar-logo" src="@/assets/images/logo-dark.png" />
    <div class="flex flex-center-align flex-end-justify">
      <template v-if="!isPhone">
        <el-dropdown v-for="item in menus" :key="item.label">
          <span class="navbar-menu" @click="item?.link">{{ item.label }}</span>
          <template v-if="!!item.option.length" #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="it in item.option" :key="it.label" @click="it?.link">
                <img :src="it.icon" class="navbar-icon" />
                <span>{{ it.label }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="navbar-badge flex flex-center">
          <router-link :to="{name:'get-started'}">Get Started</router-link>
          <span class="navbar-badge-dot"></span>
        </div>
        <div class="navbar-menu flex flex-center">
          <svg class="width-icon small navbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountBalanceWalletIcon">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          </svg>
          <span>Connect Wallet</span>
        </div>
      </template>
      <template v-else>
        <el-menu menu-trigger="click" collapse style="margin-right: 20px">
          <el-sub-menu index="first">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
            </template>
            <template v-for="(item, index) in menus" :key="item.label">
              <template v-if="!!item.option?.length">
                <el-sub-menu :index="String(index)">
                  <template #title>
                    <span>{{ item.label }}</span>
                  </template>
                  <el-menu-item v-for="(it, i) in item.option" :key="it.label" :index="`${index}-${i}`" @click="it?.link">
                    {{ it.label }}
                  </el-menu-item>
                </el-sub-menu>
              </template>
              <template v-else>
                <el-menu-item :index="String(index)" @click="item?.link">
                  {{ item.label }}
                </el-menu-item>
              </template>
            </template>
            <el-menu-item index="second">
              <span>Get Started</span>
              <span class="navbar-badge-dot"></span>
            </el-menu-item>
            <el-menu-item index="three">
              <svg class="width-icon small navbar-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountBalanceWalletIcon">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
              </svg>
              <span>Connect Wallet</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </template>
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
  <div class="empty"></div>
</template>

<script setup>
import { ref } from "vue"
import { ElDropdown, ElSubMenu, ElDropdownMenu, ElDropdownItem, ElMenu, ElMenuItem, ElIcon } from "element-plus"
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { isPhone } from '@/hooks/layer'
import Icon1 from '@/assets/images/home/icon-01.png'

const menus = ref([
  {
    label: 'Deploy',
    option: [
      { icon: Icon1, label: 'Deployment', link: () => { } },
      { icon: Icon1, label: 'Choose Template', link: () => { } },
      { icon: Icon1, label: 'Create Deployment', link: () => { } },
      { icon: Icon1, label: 'Choose Provider', link: () => { } },
      { icon: Icon1, label: 'Statistics', link: () => { } }
    ]
  },
  {
    label: 'RPC',
    option: [
      { icon: Icon1, label: 'Swan', link: () => { } },
      { icon: Icon1, label: 'Ethereum', link: () => { } },
      { icon: Icon1, label: 'Polygon', link: () => { } },
      { icon: Icon1, label: 'BNB Smart Chain', link: () => { } },
      { icon: Icon1, label: 'Add Network', link: () => { } }
    ]
  },
  {
    label: 'Storage',
    option: [
      { icon: Icon1, label: 'IPFS', link: () => { } },
      { icon: Icon1, label: 'FS3', link: () => { } },
      { icon: Icon1, label: 'ChainNode', link: () => { } },
      { icon: Icon1, label: 'Stroage Provider', link: () => { } }
    ]
  },
  {
    label: 'Wallet',
    link: () => { },
    option: []
  },
  {
    label: 'Doc↗',
    link: () => { },
    option: []
  }
])
</script>

<style lang="less" scoped>
.navbar {
  width: 100vw;
  height: 63px;
  background-color: #fff;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #e0e0e0;
  &-logo {
    width: 120px;
    height: 32px;
    margin-right: 40px;
  }
  &-user {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  &-menu {
    font-size: 16px;
    color: #1d1c21;
    font-weight: 500;
    cursor: pointer;
    margin-right: 40px;
    outline-style: none;
  }
  &-icon {
    width: 19px;
    height: 19px;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }
  &-badge {
    color: #48b0ff;
    font-size: 14px;
    margin-right: 40px;
    cursor: pointer;
    line-height: 1;
    &-dot {
      width: 8px;
      height: 8px;
      background-color: #48b0ff;
      border-radius: 100%;
      margin-left: 10px;
      position: relative;
      bottom: 1px;
    }
  }
}
.empty {
  height: 63px;
}
</style>
