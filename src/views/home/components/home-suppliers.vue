<template>
  <div>
    <div class="title font-36 weight-6">{{ title }}</div>
    <el-row :gutter="20">
      <template v-for="item in list" :key="item.icon">
        <el-col :md="4" :sm="8" :xs="12">
          <el-card class="item">
            <img :src="item.icon" style="width: 100%" />
          </el-card>
        </el-col>
      </template>
    </el-row>

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
              <li class="width-icon">
                <svg t="1698988695527" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2839" width="200" height="200">
                  <path d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z"
                    p-id="2840"></path>
                </svg>
              </li>
              <li class="width-icon">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </li>
              <li class="width-icon">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </li>
              <li class="width-icon" @click="system.$commonFun.goLink('https://github.com/FogMeta/libra-os-fronted/tree/main')">
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
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue"
import { ElRow, ElCol, ElCard } from "element-plus"
import popUps from "@/components/popups"
import Partner1 from '@/assets/images/home/Suppliers/partners-01.png'
import Partner2 from '@/assets/images/home/Suppliers/partners-02.png'
import Partner3 from '@/assets/images/home/Suppliers/partners-03.png'
import Partner4 from '@/assets/images/home/Suppliers/partners-04.png'
import Partner5 from '@/assets/images/home/Suppliers/partners-05.png'
import Partner6 from '@/assets/images/home/Suppliers/partners-06.png'
import Partner7 from '@/assets/images/home/Suppliers/partners-07.png'
import Partner8 from '@/assets/images/home/Suppliers/partners-08.png'
import Partner9 from '@/assets/images/home/Suppliers/partners-09.png'
import Partner10 from '@/assets/images/home/Suppliers/partners-10.png'
import Partner11 from '@/assets/images/home/Suppliers/partners-11.png'
import Partner12 from '@/assets/images/home/Suppliers/partners-12.png'

const connetShow = ref(false)
const donateValue = ref('Lagrange13265twfqejnma6cc93rw5dxk4cldyz2zyy8cdm')
const system = getCurrentInstance().appContext.config.globalProperties
const title = ref('Suppliers')
const list = ref([
  { icon: Partner1 },
  { icon: Partner2 },
  { icon: Partner3 },
  { icon: Partner4 },
  { icon: Partner5 },
  { icon: Partner6 },
  { icon: Partner7 },
  { icon: Partner8 },
  { icon: Partner9 },
  { icon: Partner10 },
  { icon: Partner11 },
  { icon: Partner12 }
])


function hardClose (dialog) {
  connetShow.value = dialog
}
</script>

<style lang="less" scoped>
.title {
  color: #231f20;
  margin: 162px 0 60px;
  text-align: center;
}
:deep(.el-card__body) {
  padding: 0;
}
.item {
  margin-bottom: 20px;
  border-radius: 10px;
  line-height: 0;
}

.module {
  width: 100%;
  margin: 100px auto 15px;
  background-color: @theme-color;
  color: @white-color;
  border-radius: 11px;
  h1 {
    &.padding {
      padding: 8px 16px;
    }
    // text-shadow: 0px 0px 9px #e77304;
  }
  .area {
    height: auto;
    max-height: unset;
    text-align: center;
    transition: all 0.3s;
    overflow: hidden;
    border-top: 1px solid rgba(250, 250, 250, 0.25);
    animation: showing 0.1s linear 1 forwards;
    &.hide {
      animation: hiddening 0.1s linear 1 forwards;
    }
    p.tit {
      width: 100%;
      margin: 0.1rem auto 0;
    }
    .connect {
      padding: 6px 15px;
      margin: 0.16rem auto;
      background-color: @white-color;
      text-transform: uppercase;
      border-radius: 54px;
      color: @theme-color;
      line-height: 1.5;
      cursor: pointer;
      .width-icon {
        margin-right: 8px;
        fill: @theme-color;
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
          margin: 10px 30px 10px 22px;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
          svg {
            display: block;
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
@media (max-width: 768px) {
  .title {
    margin-top: 40px;
  }
}
</style>
