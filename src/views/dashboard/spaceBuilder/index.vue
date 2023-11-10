<template>
  <section id="container-builder" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-32 weight-6 flex-row">
        Space Builder
        <p class="font-14 strong weight-6">beta</p>
      </h1>
      <div class="area mt-border">
        <div class="tab flex-row space-between">
          <div class="left">
            <el-button :class="{'active button-shadow': activeIndex === '1'}">Deploy</el-button>
            <el-button :class="{'active button-shadow': activeIndex === '2'}">Preview</el-button>
            <el-button :class="{'active button-shadow': activeIndex === '3'}">Import</el-button>
          </div>
          <div class="right">
            <el-button class="active button-shadow">Save</el-button>
          </div>
        </div>
        <div class="builder">
          <div class="list" v-for="(item, l) in builderData" :key="l">
            <div class="top padding-16 flex-row space-between nowrap">
              <div class="top-left flex-row center nowrap">
                <small class="font-12">Service Name</small>
                <el-input v-model="item.name" placeholder="Service Name" class="font-16" />
                <div class="m-16">
                  <pop-over :textData="item.cpuPop"></pop-over>
                </div>
              </div>
              <div class="top-right flex-row center nowrap">
                <div class="flex-row center nowrap" v-show="item.collapse">
                  <div class="flex-row center nowrap font-12 weight-4">
                    <div class="width-icon big">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                        <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                      </svg>
                    </div>
                    <span class="font-16 weight-6">1</span>
                    CPU
                  </div>
                  <div class="flex-row center nowrap font-12 weight-4">
                    <div class="width-icon big">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MemoryIcon">
                        <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                      </svg>
                    </div>
                    <span class="font-16 weight-6">2 GB</span>
                    RAM
                  </div>
                  <div class="flex-row center nowrap font-12 weight-4">
                    <div class="width-icon big">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StorageIcon">
                        <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path>
                      </svg>
                    </div>
                    <span class="font-16 weight-6">1 GB</span>
                    Disk
                  </div>
                  <div class="flex-row center nowrap button width-icon">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </div>
                </div>
                <div :class="{'flex-row center nowrap button width-icon':true, 'transform': item.collapse}" @click="item.collapse=!item.collapse">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="main-body" :class="{'hide': item.collapse}">
              <div class="root padding-16">
                <el-row :gutter="16">
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="piece flex-row space-between nowrap">
                      <div class="flex-row center">
                        <small class="font-12">Docker Image / OS</small>
                        <el-input v-model="item.docker" placeholder="Example: mydockerimage:1.01">
                          <template #prepend>
                            <div class="width-icon">
                              <svg t="1699606466208" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3074" width="200" height="200">
                                <path d="M799.26272 469.056a133.696 133.696 0 0 1 0-161.92l12.096-13.632 12.096 11.712a156.864 156.864 0 0 1 66.624 101.44 154.496 154.496 0 0 1 135.296 19.2 147.2 147.2 0 0 1-159.488 84.224c-83.2 200.064-261.888 320-527.104 321.92a321.472 321.472 0 0 1-300.8-150.208 278.976 278.976 0 0 1-34.304-185.6h88.768V392.96h105.024V291.52h209.984V192H532.63872v200.96h105.088v103.424a289.856 289.856 0 0 0 161.536-27.328z m-611.904-52.672H193.43872v74.176h-6.08V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.128v74.176h-8.128V416.384z m-12.096 0h6.08v74.176h-6.08V416.384z m-14.144 0h6.08v74.176h-6.08V416.384z m-8.064-5.824v87.808h90.88V410.56h-90.88z m181.76-93.632h6.016v72.128h-6.016V316.864z m-14.144 0h6.08v72.128h-6.08V316.864z m-14.144 0h8.064v72.128H263.83872V316.864z m-14.144 0h8.064v72.128h-8.064V316.864z m-14.144 0h8.128v72.128h-8.128V316.864z m-12.096 0h6.08v72.128h-6.08V316.864z m-8.064-7.872V396.8h90.88V309.056h-90.88z m76.8 107.328h5.952v74.176h-6.016V416.384z m-14.144 0h6.016v74.176h-6.08V416.384z m-14.144 0h8v74.176H263.83872V416.384z m-14.144 0h8v74.176h-8.064V416.384z m-14.144 0h8.064v74.176h-8.128V416.384z m-12.096 0h6.016v74.176h-6.08V416.384z m-8.128-5.824v87.808h90.88V410.56h-90.88z m179.712 5.824h8.064v74.176h-8.064V416.384z m-12.096 0h6.016v74.176h-6.016V416.384z m-14.144 0h6.08v74.176h-6.08V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.064v74.176H340.63872V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-6.016-5.824v87.808h90.88V410.56h-90.88z m74.688-93.696h8.064v72.192h-8.064V316.864z m-12.096 0h6.016v72.192h-6.016V316.864z m-14.144 0h6.08v72.192h-6.08V316.864z m-14.144 0h8.064v72.192h-8.064V316.864z m-14.144 0h8.064v72.192H340.63872V316.864z m-14.144 0h8.064v72.192h-8.064V316.864z m-6.016-7.808V396.8h90.88V309.056h-90.88zM500.63872 416.384h7.808v74.176H500.63872V416.384z m-14.144 0H494.23872v74.176h-8V416.384z m-12.096 0h5.76v74.176h-6.016V416.384z m-14.144 0h5.76v74.176h-6.016V416.384z m-14.144 0h7.808v74.176h-8.064V416.384z m-14.144 0h7.808v74.176h-8.064V416.384z m-6.336-5.824v87.808h88.896V410.56H425.63072zM500.63872 316.864h7.808v72.192H500.63872V316.864z m-14.144 0H494.23872v72.192h-8V316.864z m-12.096 0h5.76v72.192h-6.016V316.864z m-14.144 0h5.76v72.192h-6.016V316.864z m-14.144 0h7.808v72.192h-8.064V316.864z m-14.144 0h7.808v72.192h-8.064V316.864z m-6.336-7.808V396.8h88.896V309.056H425.63072zM500.63872 215.424h7.808v72.192H500.63872V215.424z m-14.144 0H494.23872v72.192h-8V215.424z m-12.096 0h5.76v72.192h-6.016V215.424z m-14.144 0h5.76v72.192h-6.016V215.424z m-14.144 0h7.808v72.192h-8.064V215.424z m-14.144 0h7.808v72.192h-8.064V215.424z m-6.336-7.808v87.808h88.896V207.616H425.63072z m179.776 208.768h6.016v74.176h-6.016V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-12.096 0H571.03872v74.176h-6.016V416.384z m-14.144 0h6.016v74.176h-6.016V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-8.064-5.824v87.808h90.88V410.56h-90.88zM300.44672 638.848A22.336 22.336 0 0 0 283.03872 646.4a25.6 25.6 0 0 0-7.04 17.536 22.208 22.208 0 0 0 7.04 16.576 24.96 24.96 0 0 0 34.304 0 22.208 22.208 0 0 0 7.04-16.576A23.744 23.744 0 0 0 321.43872 651.52a28.672 28.672 0 0 0-9.088-8.768 22.208 22.208 0 0 0-11.904-3.904z m0 7.808a8.384 8.384 0 0 1 6.08 1.92 6.4 6.4 0 0 0-4.032 5.824q0 5.824 8.064 5.824a6.4 6.4 0 0 0 6.08-3.904 16.832 16.832 0 0 1 2.048 7.808 15.808 15.808 0 0 1-18.176 17.536 17.664 17.664 0 1 1-0.064-35.264z m66.624 167.808a226.112 226.112 0 0 1-115.2-109.248 359.296 359.296 0 0 1-82.816 11.712H82.33472a364.8 364.8 0 0 0 256.448 97.536h28.288z"
                                  fill="#1296db" p-id="3075"></path>
                              </svg>
                            </div>
                          </template>
                          <template #append>
                            <div class="button width-icon small">
                              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInNewIcon">
                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                              </svg>
                            </div>
                          </template>
                        </el-input>
                      </div>
                      <pop-over :textData="item.dockerPop"></pop-over>
                    </div>

                    <div class="background-main padding-16">
                      <div class="flex-row">
                        <h3 class="flex-row">
                          <div class="flex-row center font-14 weight-6">
                            <div class="width-icon">
                              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                                <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                              </svg>
                            </div>
                            <span>CPU</span>
                          </div>
                          <div class="m-16">
                            <pop-over :textData="item.cpuPop"></pop-over>
                          </div>
                        </h3>
                      </div>
                      <div class="slider-demo-block">
                        <el-slider v-model="item.cpuValue" show-input :min="0.1" :max="256" />
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="background-main padding-16">
                      <div class="flex-row">
                        <h4 class="font-16 weight-6 flex-row">
                          Environment Variables
                          <div class="m-16">
                            <pop-over :textData="item.ev"></pop-over>
                          </div>
                          <span class="font-12">Edit</span>
                        </h4>
                      </div>
                      <h6 class="font-12 weight-4">None</h6>
                    </div>

                    <div class="background-main padding-16">
                      <div class="flex-row">
                        <h4 class="font-16 weight-6 flex-row">
                          Commands
                          <div class="m-16">
                            <pop-over :textData="item.commands"></pop-over>
                          </div>
                          <span class="font-12">Edit</span>
                        </h4>
                      </div>
                      <h6 class="font-12 weight-4">None</h6>
                    </div>

                    <div class="background-main padding-16">
                      <div class="flex-row">
                        <h4 class="font-16 weight-6 flex-row">
                          Expose
                          <div class="m-16">
                            <pop-over :textData="item.expose"></pop-over>
                          </div>
                          <span class="font-12">Edit</span>
                        </h4>
                      </div>
                      <h6 class="font-12 weight-4">
                        <b>Port</b> 80 : 80 (http)</h6>
                      <h6 class="font-12 weight-4">
                        <b>Global</b> True</h6>
                      <h6 class="font-12 weight-4">
                        <b>Accept</b> None</h6>
                    </div>

                    <div class="piece flex-row space-between nowrap">
                      <div class="flex-row center">
                        <small class="font-12">Count</small>
                        <el-input v-model="item.count" placeholder="Count">
                        </el-input>
                      </div>
                      <pop-over :textData="item.dockerPop"></pop-over>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import popOver from "@/components/popover"
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
// import {
//   Search
// } from '@element-plus/icons-vue'
import { ElButton, ElInput, ElRow, ElCol, ElSlider } from "element-plus"
export default defineComponent({
  components: {
    popOver, ElButton, ElInput, ElRow, ElCol, ElSlider
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const activeIndex = ref('1')
    const builderData = ref([
      {
        name: 'service-1',
        collapse: false,
        count: '',
        cpuValue: 0,
        cpuPop: [
          {
            desc: "The amount of vCPU's required for this workload.",
            link: ''
          },
          {
            desc: "The maximum for a single instance is 256 vCPU's.",
            link: ''
          },
          {
            desc: "The maximum total multiplied by the count of instances is 512 vCPU's.",
            link: ''
          }
        ],
        docker: '',
        dockerPop: [
          {
            desc: 'Docker image of the container.',
            link: ''
          },
          {
            desc: 'Best practices: avoid using :latest image tags as Akash Providers heavily cache images.',
            link: ''
          }
        ],
        ev: [
          {
            desc: 'A list of environment variables to expose to the running container.',
            link: ''
          },
          {
            desc: 'View official documentation.',
            link: 'https://docs.lagrangedao.org/'
          }
        ],
        commands: [
          {
            desc: 'Custom command use when executing container.',
            link: ''
          },
          {
            desc: 'An example and popular use case is to run a bash script to install packages or run specific commands.',
            link: ''
          }
        ],
        expose: [
          {
            desc: 'Expose is a list of port settings describing what can connect to the service.',
            link: ''
          },
          {
            desc: 'View official documentation.',
            link: 'https://docs.lagrangedao.org/'
          }
        ]
      }
    ])

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      activeIndex,
      builderData
    }
  }
})
</script>

<style lang="less" scoped>
#container-builder {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.5;
  :deep(.module) {
    margin: 0 auto 15px;
    h1 {
      // text-shadow: 0px 0px 9px #e77304;
      color: transparent;
      background-image: linear-gradient(
        to right,
        @theme-color-opacity1,
        @theme-color
      );
      -webkit-background-clip: text;
      p.strong {
        padding: 1px 8px;
        margin: 0 0 0 16px;
        background-color: @primary-color-opacity3;
        border-radius: 16px;
        color: @theme-color;
        text-transform: capitalize;
      }
    }
    .area {
      .tab {
        .el-button {
          background-color: @bg-color;
          border-color: @bg-color;
          color: @primary-color;
          text-transform: uppercase;
          transition: all 0.2s;
          &.active {
            background-color: @theme-color;
            border-color: @theme-color;
            color: @white-color;
            &:hover {
              background-color: @theme-color-opacity1;
            }
          }
          &:hover {
            background-color: @theme-color-opacity2;
          }
        }
      }
      .builder {
        .list {
          width: 100%;
          margin: 16px 0 0;
          background-color: @white-color;
          border-radius: 8px;
          box-sizing: border-box;
          .top {
            .top-left {
              width: 100%;
              position: relative;
              margin: 0;
              .m-16 {
                margin-right: 8px;
              }
              small {
                position: absolute;
                top: -6px;
                left: 10px;
                padding: 0 4px;
                background-color: @white-color;
                color: @primary-color-opacity;
                z-index: 9;
                line-height: 1;
              }
              .el-input {
                width: 100%;
                .el-input__wrapper {
                  height: 40px;
                  padding: 0 32px 0 14px;
                  text-align: left;
                  color: @primary-color;
                  box-shadow: none;
                  border: 1px solid @primary-color-opacity1;
                  .el-input__inner {
                    color: inherit;
                  }
                }
              }
            }
            .top-right {
              line-height: 25px;
              color: @grey-color;
              .flex-row {
                .flex-row {
                  margin: 2px 8px;
                  white-space: nowrap;
                  span {
                    margin: 0 8px;
                    color: @primary-color;
                  }
                }
                .width-icon {
                  fill: @grey-color;
                  &.transform {
                    transform: rotate(180deg);
                  }
                  svg,
                  path {
                    fill: inherit;
                  }
                }
              }
            }
          }
          .main-body {
            max-height: unset;
            border-top: 1px solid @dot-color;
            animation: showing 0.1s linear 1 forwards;
            transition: all 0.3s;
            overflow: hidden;
            &.hide {
              animation: hiddening 0.1s linear 1 forwards;
            }
            .el-row {
              .el-col {
                .piece {
                  margin: 0 0 16px;
                  .center {
                    position: relative;
                    width: 100%;
                    margin: 0 8px 0 0;
                    border: 1px solid @primary-color-opacity1;
                    border-radius: 4px;
                    small {
                      position: absolute;
                      top: -6px;
                      left: 10px;
                      padding: 0 4px;
                      background-color: @white-color;
                      color: @primary-color-opacity;
                      z-index: 9;
                      line-height: 1;
                    }
                  }
                  .el-input {
                    .el-input__wrapper {
                      height: 40px;
                      padding: 0 14px;
                      box-shadow: none;
                    }
                    .el-input-group__prepend,
                    .el-input-group__append {
                      padding: 0 14px;
                      background-color: transparent;
                      box-shadow: none;
                      &.el-input-group__prepend {
                        padding-right: 0;
                      }
                      &.el-input-group__append {
                        padding-left: 0;
                      }
                    }
                  }
                }
                .background-main {
                  margin: 0 0 16px;
                  background-color: @bg-color;
                  border-radius: 4px;
                  h3 {
                    span {
                      padding: 2px 0 0 8px;
                      line-height: 24px;
                    }
                  }
                  h4 {
                    padding: 0 0 16px;
                    text-transform: capitalize;
                    span {
                      color: @theme-color;
                      line-height: 20px;
                      cursor: pointer;
                      &:hover {
                        text-decoration: underline;
                      }
                    }
                  }
                  h6 {
                    color: @grey-color;
                    b {
                      padding: 0 4px 0 0;
                      color: @primary-color;
                    }
                  }
                  .slider-demo-block {
                    margin-top: 8px;
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
