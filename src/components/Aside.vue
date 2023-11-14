<template>
  <div class="aside-main">
    <el-menu active-text-color="#0c0b0b" text-color="#616161" background-color="transparent" class="el-menu-vertical-demo flex-row space-between" :collapse-transition="false" :default-active="activeIndex" :collapse="isCollapse" @select="handleSelect"
      @open="handleOpen" @close="handleClose">
      <ul class="wid">
        <el-menu-item index="deployNew">
          <div class="root flex-row center button-shadow">
            <span class="hide">Deploy</span>
            <i class="el-icon width-icon small">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon">
                <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
              </svg>
            </i>
          </div>
        </el-menu-item>
        <el-menu-item index="home" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HomeIcon">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </svg>
          </i>
          <template #title>Home</template>
        </el-menu-item>
        <el-menu-item index="deploy" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloudIcon">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path>
            </svg>
          </i>
          <template #title>Deployments</template>
        </el-menu-item>
        <el-menu-item index="templates" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CollectionsIcon">
              <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path>
            </svg>
          </i>
          <template #title>Templates</template>
        </el-menu-item>
        <el-menu-item index="spaceBuilder" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ConstructionIcon">
              <path d="m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"></path>
            </svg>
          </i>
          <template #title>Space Builder</template>
        </el-menu-item>
        <el-menu-item index="providers" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DnsIcon">
              <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            </svg>
          </i>
          <template #title>Providers</template>
        </el-menu-item>
        <el-menu-item index="analytics" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsightsIcon">
              <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"></path>
              <path d="m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"></path>
            </svg>
          </i>
          <template #title>Statistics</template>
        </el-menu-item>
        <el-menu-item index="priceCompare" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SavingsIcon">
              <path d="m19.83 7.5-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5h-2.17zM13 9H8V7h5v2zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
            </svg>
          </i>
          <template #title>Price Compare</template>
        </el-menu-item>
        <el-sub-menu index="Infrastructure" class="menu">
          <template #title>
            <span class="el-icon width-icon flex-row icon">
              <i class="width-icon min-small flex-row">
                <svg t="1699950348264" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4386" width="200" height="200">
                  <path d="M341.333 0h-204.8A136.533 136.533 0 0 0 0 136.533v204.8a136.533 136.533 0 0 0 136.533 136.534h204.8a136.533 136.533 0 0 0 136.534-136.534v-204.8A136.533 136.533 0 0 0 341.333 0zM409.6 341.333a68.267 68.267 0 0 1-68.267 68.267h-204.8a68.267 68.267 0 0 1-68.266-68.267v-204.8a68.267 68.267 0 0 1 68.266-68.266h204.8a68.267 68.267 0 0 1 68.267 68.266zM887.467 0h-204.8a136.533 136.533 0 0 0-136.534 136.533v204.8a136.533 136.533 0 0 0 136.534 136.534h204.8A136.533 136.533 0 0 0 1024 341.333v-204.8A136.533 136.533 0 0 0 887.467 0z m68.266 341.333a68.267 68.267 0 0 1-68.266 68.267h-204.8a68.267 68.267 0 0 1-68.267-68.267v-204.8a68.267 68.267 0 0 1 68.267-68.266h204.8a68.267 68.267 0 0 1 68.266 68.266z m-614.4 204.8h-204.8A136.533 136.533 0 0 0 0 682.667v204.8A136.533 136.533 0 0 0 136.533 1024h204.8a136.533 136.533 0 0 0 136.534-136.533v-204.8a136.533 136.533 0 0 0-136.534-136.534zM409.6 887.467a68.267 68.267 0 0 1-68.267 68.266h-204.8a68.267 68.267 0 0 1-68.266-68.266v-204.8a68.267 68.267 0 0 1 68.266-68.267h204.8a68.267 68.267 0 0 1 68.267 68.267z m477.867-341.334h-204.8a136.533 136.533 0 0 0-136.534 136.534v204.8A136.533 136.533 0 0 0 682.667 1024h204.8A136.533 136.533 0 0 0 1024 887.467v-204.8a136.533 136.533 0 0 0-136.533-136.534z m68.266 341.334a68.267 68.267 0 0 1-68.266 68.266h-204.8a68.267 68.267 0 0 1-68.267-68.266v-204.8a68.267 68.267 0 0 1 68.267-68.267h204.8a68.267 68.267 0 0 1 68.266 68.267z"
                    p-id="4387"></path>
                </svg>
              </i>
            </span>
            <span class="font-16 weight-5">Infrastructure</span>
          </template>
          <el-menu-item index="Storage">- Storage</el-menu-item>
          <el-menu-item index="RPC">- RPC</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="faq" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HelpIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
            </svg>
          </i>
          <template #title>FAQ</template>
        </el-menu-item>
        <el-menu-item index="settings" class="menu">
          <i class="el-icon width-icon">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
            </svg>
          </i>
          <template #title>Settings</template>
        </el-menu-item>
      </ul>
      <ul class="wid">
        <li class="el-menu-item hide" index="10">
          <!-- <div class="mainnet">
          <b class="font-12">Mainnet</b>
          <div class="net-root font-12 flex-row center">
            <span>akashnet.net</span>
            <span>276ms</span>
            <span class="border"></span>
          </div>
        </div> -->
          <div class="support flex-row center">
            <span class="font-10 weight-8">Support our Validator </span>
            <i class="el-icon width-icon small">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
              </svg>
            </i>
          </div>
        </li>
        <li class="el-menu-item hide" index="11">
          <div class="media-root flex-row center">
            <ul class="flex-row">
              <li class="el-icon width-icon">
                <svg t="1698988695527" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2839" width="200" height="200">
                  <path d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z"
                    p-id="2840"></path>
                </svg>
              </li>
              <li class="el-icon width-icon">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </li>
              <li class="el-icon width-icon">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </li>
              <li class="el-icon width-icon" @click="system.$commonFun.goLink('https://github.com/FogMeta/libra-os-fronted/tree/main')">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon">
                  <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                </svg>
              </li>
            </ul>
            <div class="version">
              <p class="font-10">v1.8.0</p>
              <p class="font-12 strong weight-6">beta</p>
            </div>
          </div>
        </li>
        <li class="el-menu-item" index="12">
          <div class="foot-collapse">
            <div class="button">
              <svg v-show="!isCollapse" @click="isCollapse = true" class="width-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuOpenIcon">
                <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"></path>
              </svg>
              <svg v-show="isCollapse" @click="isCollapse = false" class="width-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  Document, Menu as IconMenu, Location, Setting, HomeFilled
} from '@element-plus/icons-vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton } from "element-plus"

export default defineComponent({
  components: {
    Document, IconMenu, Location, Setting, HomeFilled,
    ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const clientWidth = computed(() => (store.state.clientWidth))
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const isCollapse = ref(false)
    const activeIndex = ref('home')

    const handleOpen = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    async function handleSelect (key, keyPath) {
      if (key === 'home') router.push({ name: 'home' })
      else if (key === 'deploy') router.push({ name: 'deploy' })
      else if (key === 'deployNew') router.push({ name: 'deployNew' })
      else if (key === 'templates') router.push({ name: 'templates' })
      else if (key === 'spaceBuilder') router.push({ name: 'spaceBuilder' })
      else if (key === 'providers') router.push({ name: 'providers' })
      else if (key === 'analytics') router.push({ name: 'analytics' })
      else if (key === 'priceCompare') router.push({ name: 'priceCompare' })
      // else if (key === 'Storage') router.push({ name: 'Storage' })
      else if (key === 'RPC') router.push({ name: 'RPC' })
      else if (key === 'faq') router.push({ name: 'faq' })
      else if (key === 'settings') router.push({ name: 'settings' })
      // else if (key === '3-1') router.push({ name: 'swan' })
      // else if (key === '3-2') router.push({ name: 'fogmeta' })
      // else if (key === '3-3') router.push({ name: 'nebulablock' })
      // else if (key === '4-1') router.push({ name: 'partners' })
      // else if (key === '4-2') system.$commonFun.goLink('https://nebulaai.org/')
      // else if (key === '5') system.$commonFun.goLink('https://us17.list-manage.com/contact-form?u=d00f980f8a4f0c1054e178765&form_id=37f9894eaae77c108c70bd00e30b9841')
    }
    // what-we-do
    async function activeMenu (row) {
      const nameMenu = row || route.name
      if (nameMenu.indexOf('home') > -1) activeIndex.value = 'home'
      else if (nameMenu.indexOf('deploy') > -1 || nameMenu.indexOf('new-deployment') > -1) activeIndex.value = 'deploy'
      else if (nameMenu.indexOf('templates') > -1) activeIndex.value = 'templates'
      else if (nameMenu.indexOf('spaceBuilder') > -1) activeIndex.value = 'spaceBuilder'
      else if (nameMenu.indexOf('providers') > -1) activeIndex.value = 'providers'
      else if (nameMenu.indexOf('analytics') > -1) activeIndex.value = 'analytics'
      else if (nameMenu.indexOf('priceCompare') > -1) activeIndex.value = 'priceCompare'
      else if (nameMenu.indexOf('Storage') > -1 || nameMenu.indexOf('RPC') > -1) activeIndex.value = 'Infrastructure'
      else if (nameMenu.indexOf('faq') > -1) activeIndex.value = 'faq'
      else if (nameMenu.indexOf('settings') > -1) activeIndex.value = 'settings'
      else activeIndex.value = '100'
    }
    onMounted(() => {
      activeMenu()
    })
    watch(route, (to, from) => {
      activeMenu()
      window.scrollTo(0, 0)
    })
    return {
      system,
      isCollapse,
      activeIndex,
      handleOpen, handleClose, handleSelect
    }
  }
})
</script>

<style  lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.aside-main {
  height: 100%;
  background-color: @white-color;
  transition: all 0.2s;
  .el-menu-vertical-demo {
    align-items: start;
    align-content: space-between;
    width: 255px;
    height: 100%;
    min-height: auto;
    font-size: 0.16rem;
    overflow-y: scroll;
    border: 0;
    &.el-menu--collapse {
      width: 65px;
      .hide {
        display: none;
      }
      .el-menu-item {
        padding: 8px 0 !important;
        text-transform: capitalize;
        &:last-child {
          padding: 8px 4px !important;
          justify-content: center;
        }
        &.menu {
          padding: 8px !important;
        }
        .el-menu-tooltip__trigger {
          position: relative;
          justify-content: center;
          padding: 0;
        }
        .el-icon {
          margin: 3px !important;
        }
      }
    }
    .el-sub-menu {
      .el-sub-menu__title {
        height: 46px;
        padding: 0 12px 0 16px;
        line-height: 30px;
        &:hover {
          background-color: @primary-color-opacity2;
        }
        &.is-active {
          font-weight: 600;
          .el-icon {
            svg,
            path {
              fill: @theme-color;
              opacity: 1;
            }
          }
        }
        .el-icon {
          &.icon {
            margin-right: 16px;
          }
          &.el-sub-menu__icon-arrow {
            svg {
              opacity: 1;
            }
          }
          svg {
            width: inherit;
            height: inherit;
            opacity: 0.3;
          }
        }
      }
      ul {
        padding-bottom: 8px;
        li {
          min-height: auto;
          text-indent: 50px;
          line-height: 1;
          color: @grey-color;
          &:hover {
            background-color: @primary-color-opacity2;
          }
        }
      }
    }
    .el-menu-item {
      flex-wrap: wrap;
      height: auto;
      min-height: 30px;
      padding: 8px !important;
      font-size: inherit;
      font-weight: 500;
      line-height: 30px;
      text-transform: capitalize;
      &:hover {
        background-color: transparent;
      }
      &:last-child {
        padding: 8px !important;
      }
      &.is-active {
        font-weight: 600;
        .el-icon {
          svg,
          path {
            fill: @theme-color;
            opacity: 1;
          }
        }
      }
      &.menu {
        padding: 8px 12px 8px 16px !important;
        &:hover {
          background-color: @primary-color-opacity2;
        }
      }
      .el-icon {
        margin-right: 16px;
        svg {
          width: inherit;
          height: inherit;
          opacity: 0.3;
        }
      }
      .mainnet {
        width: 100%;
        text-align: center;
        color: @primary-color-opacity;
        .net-root {
          padding: 2px 8px;
          margin: 0 auto 16px;
          background-color: rgb(33, 33, 33);
          border-radius: 4px;
          &:hover {
            background-color: rgb(66, 66, 66);
          }
          span {
            margin: 0 3px;
            color: @primary-color;
            &.border {
              width: 8px;
              height: 8px;
              background-color: rgb(64, 204, 94);
              border-radius: 8px;
            }
          }
        }
      }
      .support {
        width: 100%;
        margin: auto;
        text-transform: uppercase;
        &:hover {
          background-color: @primary-color-opacity2;
        }
        .el-icon {
          margin: 0 0 0 6px;
          svg,
          path {
            fill: #757575;
            opacity: 1;
          }
        }
      }
      .root {
        width: 100%;
        padding: 8px 0;
        background-color: @theme-color;
        font-size: 15px;
        color: @white-color;
        border-radius: 5px;
        text-transform: uppercase;
        &:hover {
          background-color: @theme-color-opacity1;
        }
        .el-icon {
          margin: 0 0 0 16px;
          color: @white-color;
          fill: @white-color;
          svg,
          path {
            opacity: 1;
          }
        }
        span {
          letter-spacing: 0.5px;
        }
      }
      .media-root {
        width: 100%;
        ul {
          li {
            &:hover {
              svg,
              path {
                opacity: 0.7;
              }
            }
            svg,
            path {
              opacity: 1;
            }
          }
        }
        .version {
          p {
            min-width: 30px;
            text-align: center;
            color: #757575;
            line-height: 1.1;
          }
          p.strong {
            padding: 1px 3px;
            background-color: @theme-color;
            border-radius: 10px;
            color: @white-color;
          }
        }
      }
      .foot-collapse {
      }
    }
  }
}
</style>