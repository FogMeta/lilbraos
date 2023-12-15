<template>
  <section id="container-main" class="lang-max top-margin both-margin">
    <!-- <el-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" :show-text="false" stroke-linecap="square" /> -->
    <div class="module">
      <h1 class="font-20 weight-6 flex-row space-between padding">
        Welcome to Libra Cloud OS!
        <div class="button width-icon" @click="collapse=!collapse">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
            <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </div>
      </h1>
      <div class="area flex-row flex-start" :class="{'hide': collapse}">
        <ul class="padding-16">
          <li class="gutters flex-row nowrap">
            <div class="width-icon big">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon">
                <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
              </svg>
            </div>
            <div class="multiline weight-5">
              <router-link :to="{name:'get-started'}" class="font-16">Getting started with Libra Cloud OS</router-link>
              <p class="font-14">Learn how to deploy your first docker container on Lagrange in a few click using Libra Cloud OS.</p>
            </div>
          </li>
          <li class="gutters flex-row nowrap">
            <div class="width-icon big">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CategoryIcon">
                <path d="m12 2-5.5 9h11z"></path>
                <circle cx="17.5" cy="17.5" r="4.5"></circle>
                <path d="M3 13.5h8v8H3z"></path>
              </svg>
            </div>
            <div class="multiline weight-5">
              <router-link :to="{path:'templates'}" class="font-16">Explore the marketplace</router-link>
              <p class="font-14">Browse through the marketplace of pre-made solutions with categories like blogs, blockchain nodes and more!</p>
            </div>
          </li>
          <li class="gutters flex-row nowrap">
            <div class="width-icon big">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SchoolIcon">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path>
              </svg>
            </div>
            <div class="multiline weight-5">
              <a @click="system.$commonFun.goLink('')" class="font-16">Learn more about Lagrange</a>
              <p class="font-14">Want to know about the advantages of using a decentralized cloud compute marketplace?</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="module">
      <h1 class="font-20 weight-6 padding-16">Your Account</h1>
      <div class="area flex-row center padding-16">
        <p class="font-20 weight-3 tit">Connect your wallet to deploy!</p>
        <div class="connect flex-row nowrap" @click="connetShow=true">
          <svg class="width-icon small" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountBalanceWalletIcon">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          </svg>
          <span class="font-14">Connect Wallet</span>
        </div>
      </div>
    </div>
    <footer>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
          <h3 class="font-24 weight-6">Libra Cloud OS</h3>
          <p class="font-14 weight-4 desc">Libra Cloud OS is the #1 platform to deploy docker containers on the Lagrange Network, a decentralized cloud compute marketplace. Explore, deploy and track all in one place!</p>
        </el-col>
        <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
          <h6 class="font-16 weight-4">Donate</h6>
          <div class="copy flex-row space-between nowrap font-12">
            <p>{{donateValue}}</p>
            <span class="width-icon min-small" @click="system.$commonFun.notificationTip('Address copied!', 'success', donateValue)">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FileCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path>
              </svg>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="media-root flex-row space-between">
            <ul class="flex-row">
              <li class="el-icon width-icon padding-16">
                <svg t="1698988695527" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2839" width="200" height="200">
                  <path d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z"
                    p-id="2840"></path>
                </svg>
              </li>
              <li class="el-icon width-icon padding-16">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </li>
              <li class="el-icon width-icon padding-16">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </li>
              <li class="el-icon width-icon padding-16" @click="system.$commonFun.goLink('https://github.com/FogMeta/libra-os-fronted/tree/main')">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon">
                  <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                </svg>
              </li>
            </ul>
            <div class="contact font-12 weight-5">
              <router-link to="">Terms of Service</router-link>
              <router-link to="">Privacy Policy</router-link>
              <router-link to="">FAQ</router-link>
              <router-link to="">Contact</router-link>
            </div>
            <div class="flex-row font-12 weight-5">
              <span class="width-icon small">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CopyrightIcon">
                  <path d="M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </span>&nbsp;Libra Cloud OS
            </div>
          </div>
        </el-col>
      </el-row>
    </footer>
    <pop-ups v-if="connetShow" :connetShow="connetShow" @hardClose="hardClose"></pop-ups>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  CircleCheck
} from '@element-plus/icons-vue'
import { ElButton, ElProgress, ElRow, ElCol } from "element-plus"
import popUps from "@/components/popups"
export default defineComponent({
  components: {
    popUps, ElButton, ElProgress, ElRow, ElCol
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const claimShow = ref(false)
    const collapse = ref(false)
    const connetShow = ref(false)
    const donateValue = ref('Lagrange13265twfqejnma6cc93rw5dxk4cldyz2zyy8cdm')

    function hardClose (dialog) {
      connetShow.value = dialog
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      claimShow,
      collapse,
      connetShow,
      donateValue,
      hardClose
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .module {
    margin: 0 auto 15px;
    background-color: @white-color;
    color: @primary-color;
    border-radius: 4px;
    h1 {
      &.padding {
        padding: 8px 16px;
      }
      // text-shadow: 0px 0px 9px #e77304;
      color: @primary-color;
    }
    .area {
      height: auto;
      max-height: unset;
      text-align: center;
      transition: all 0.3s;
      overflow: hidden;
      border-top: 1px solid rgb(238, 238, 238);
      animation: showing 0.1s linear 1 forwards;
      &.hide {
        animation: hiddening 0.1s linear 1 forwards;
      }
      p.tit {
        width: 100%;
      }
      .connect {
        padding: 6px 15px;
        margin: 0.16rem auto;
        text-transform: uppercase;
        border: 1.6px solid @theme-color-opacity;
        border-radius: 4px;
        line-height: 1.5;
        cursor: pointer;
        &:hover {
          border-color: @theme-color;
        }
        .width-icon {
          margin-right: 8px;
        }
      }
      ul {
        li {
          padding: 8px 0;
          text-align: left;
          line-height: 1.5;
          .multiline {
            padding: 6px 0 6px 21px;
            a {
              &:hover {
                text-decoration: underline;
              }
            }
            p {
              color: @primary-color-opacity;
            }
          }
        }
      }
    }
  }
  footer {
    padding: 90px 0 50px;
    :deep(.el-row) {
      h3,
      h6 {
        padding: 14px 0;
      }
      p.desc {
        line-height: 1.5;
      }
      .copy {
        padding: 4px 8px;
        margin: 4px 0;
        background-color: rgba(0, 0, 0, 0.16);
        border-radius: 50px;
        transition: all 0.2s;
        &:hover {
          background-color: @primary-color-opacity1;
          svg,
          path {
            fill: rgba(0, 0, 0, 0.4);
          }
        }
        p {
          width: calc(100% - 20px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        svg,
        path {
          fill: rgba(0, 0, 0, 0.26);
          cursor: pointer;
        }
      }
      .media-root {
        width: 100%;
        padding: 8px 0;
        @media screen and (max-width: 600px) {
          justify-content: center;
        }
        ul {
          li {
            cursor: pointer;
            &:hover {
              opacity: 0.7;
            }
          }
        }
        .contact {
          a {
            padding: 0 8px;
            color: @primary-color;
            @media screen and (max-width: 600px) {
                  line-height: 3;
            }
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
