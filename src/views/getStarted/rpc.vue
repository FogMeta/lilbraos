<template>
  <section id="container-getStarted" class="lang-max top-margin both-margin">
    <!-- <el-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" :show-text="false" stroke-linecap="square" /> -->
    <div class="module">
      <h1 class="font-20 weight-6 flex-row space-between padding-16">Get started with Libra Cloud OS!</h1>
      <div class="area padding-16 flex-row flex-start">
        <el-collapse v-model="active" accordion>
          <el-collapse-item name="1" :disabled="active==='1'" :class="{'success': active !== '1'}">
            <template #title>
              <div class="header-icon flex-row width-icon small">
                <i class="inner" v-if="active === '1'"></i>
                <Check v-else class="avtive" />
              </div>
              <span class="font-24 weight-5">Generate Token</span>
            </template>
            <div class="desc flex-row flex-start font-14 weight-5">
              you need to Generate Token in Lagrange Account
            </div>
            <div class="desc desc-root flex-row flex-start font-14 weight-5">
              <el-button @click="active='2'" class="button-shadow">Next</el-button>
              <div class="flex-row">
                <a class="font-16">Go to Lagrange</a>
                <span class="width-icon small">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </span>
              </div>
              <div class="flex-row font-16">Learn How
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2" :disabled="active==='2'" :class="{'success': active !== '1' && active !== '2'}">
            <template #title>
              <div class="header-icon flex-row width-icon small">
                <i class="inner" v-if="active === '1' || active === '2'"></i>
                <Check v-else class="avtive" />
              </div>
              <span class="font-24 weight-5">Select Chain and Network</span>
            </template>
            <div class="desc flex-row flex-start font-14 weight-5">
              copy the information of your desired blockchain (chain) and network
            </div>
            <div class="desc desc-root flex-row flex-start font-14 weight-5">
              <el-button @click="active='3'" class="button-shadow">Next</el-button>
              <div class="flex-row">
                <a class="font-16">Go to Lagrange</a>
                <span class="width-icon small">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </span>
              </div>
              <div class="flex-row font-16">Learn How
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3" :disabled="active==='3'" :class="{'success': active !== '1' && active !== '2' && active !== '3'}">
            <template #title>
              <div class="header-icon flex-row width-icon small">
                <i class="inner" v-if="active === '1' || active === '2' || active === '3'"></i>
                <Check v-else class="avtive" />
              </div>
              <span class="font-24 weight-5">Construct RPC URL</span>
            </template>
            <div class="desc flex-row flex-start font-14 weight-5">
              Append your generated token to the RPC URL
            </div>
            <div class="desc desc-root flex-row flex-start font-14 weight-5">
              <el-button @click="active='4'" class="button-shadow">Next</el-button>
              <div class="flex-row">
                <a class="font-16">Go to Lagrange</a>
                <span class="width-icon small">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </span>
              </div>
              <div class="flex-row font-16">Learn How
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4" disabled>
            <template #title>
              <div class="header-icon flex-row width-icon small">
                <i class="inner"></i>
              </div>
              <span class="font-24 weight-5">Make RPC Requests</span>
            </template>
            <div class="desc flex-row flex-start font-14 weight-5">
              Execute JSON-RPC requests with the specified method and relevant parameters
            </div>
            <div class="desc desc-root flex-row flex-start font-14 weight-5">
              <el-button class="button-shadow">Next</el-button>
              <div class="flex-row">
                <a class="font-16">Go to Lagrange</a>
                <span class="width-icon small">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                  </svg>
                </span>
              </div>
              <div class="flex-row font-16">Learn How
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  Check
} from '@element-plus/icons-vue'
import { ElButton, ElProgress, ElIcon, ElCollapse, ElCollapseItem } from "element-plus"
export default defineComponent({
  components: {
    Check, ElButton, ElProgress, ElIcon, ElCollapse, ElCollapseItem
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const claimShow = ref(false)
    const collapse = ref(false)
    const active = ref('1')

    function hardClose (dialog) {
      claimShow.value = dialog
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      claimShow,
      collapse,
      active,
      hardClose
    }
  }
})
</script>

<style lang="less" scoped>
#container-getStarted {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  :deep(.module) {
    margin: 0 auto 15px;
    background-color: @white-color;
    border-radius: 4px;
    h1 {
      // text-shadow: 0px 0px 9px #e77304;
      color: @primary-color;
    }
    .area {
      height: auto;
      text-align: center;
      transition: all 0.8s;
      overflow: hidden;
      border-top: 1px solid rgb(238, 238, 238);
      .el-collapse {
        width: 100%;
        border: 0;
        .el-collapse-item {
          position: relative;
          min-height: 50px;
          padding: 0 0 25px;
          &.success {
            &::before {
              background-color: @theme-color !important;
            }
            .el-collapse-item__header {
              span {
                color: @primary-color;
              }
            }
          }
          &:last-child {
            &::before {
              width: 0;
            }
            .desc {
              border-color: transparent !important;
              &.desc-root {
                .flex-row {
                  // color: @primary-color !important;
                  // .width-icon {
                  //   fill: @primary-color !important;
                  // }
                }
              }
            }
          }
          &::before {
            content: "";
            position: absolute;
            left: 6px;
            bottom: 4px;
            width: 1px;
            height: 25px;
            background-color: @dot-color;
          }
          &.is-disabled {
            .el-collapse-item__header {
              span {
                color: @primary-color-opacity;
                &:hover {
                  color: @primary-color-opacity;
                  cursor: text;
                }
              }
            }
          }
          .el-collapse-item__header {
            height: auto;
            background-color: transparent;
            border: 0;
            line-height: 1.7;
            &.is-active {
              span {
                color: @primary-color;
                &:hover {
                  color: @primary-color;
                  cursor: text;
                }
              }
              .header-icon {
                .inner {
                  background-color: @theme-color;
                }
              }
            }
            .el-collapse-item__arrow {
              display: none;
            }
            .header-icon {
              padding: 0 8px 0 0;
              background-color: @white-color;
              border: 0;
              border-radius: 0;
              .inner {
                color: transparent;
                width: 8px;
                height: 8px;
                margin-left: 3px;
                background-color: @dot-color;
                border-radius: 8px;
              }
              .avtive {
                color: @theme-color;
                fill: @theme-color;
              }
            }
            span {
              color: @primary-color-opacity;
              cursor: pointer;
              &:hover {
                color: @theme-color;
              }
            }
          }
          .el-collapse-item__wrap {
            background-color: transparent;
            line-height: 1.5;
            border: 0;
            .el-collapse-item__content {
              padding: 0;
              color: @primary-color-opacity;
              text-align: left;
              .desc {
                padding: 0 0 0 28px;
                margin: 0 0 0 6px;
                border-left: 1px solid @grey-color;
                &.desc-root {
                  padding-top: 20px;
                  .el-button {
                    text-transform: uppercase;
                    color: @white-color;
                    a {
                      color: inherit;
                    }
                  }
                  .flex-row {
                    margin: 0 0 0 16px;
                  }
                }
                .el-button {
                  background-color: @theme-color;
                  border-color: @theme-color;
                  &:hover {
                    opacity: 0.8;
                  }
                }
                .flex-row {
                  padding: 0 0 0 4px;
                  color: @theme-color;
                  cursor: pointer;
                  &:hover {
                    text-decoration: underline;
                  }
                  .width-icon {
                    margin-left: 4px;
                    fill: @theme-color;
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
