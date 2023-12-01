<template>
  <section id="container-settings" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="flex-row flex-start nowrap">
        <router-link :to="{ name: 'deploy'}" class="button width-icon">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </router-link>
        <span class="font-24 weight-6">{{ deployData.data.space_name}}</span>
        <span class="button width-icon min-small" @click="getData">
          <RefreshRight />
        </span>
      </h1>
      <div class="table-cont">
        <loading-over v-if="listLoad" :listLoad="listLoad"></loading-over>
        <el-row class="padding-16" justify="space-between">
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="flex-row font-16">
              <b>Space ID </b>{{ deployData.data.space_id}}
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="flex-row font-16">
              <b>Status </b>{{ deployData.data.status_msg}}
              <span class="status-active" v-if="deployData.data && deployData.data.status_msg === 'Running'"></span>
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="flex-row font-16">
              <b>Cost </b>{{ deployData.data.cost || '-'}} USD per hour
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" v-if="deployData.data.expired_at !== 0">
            <div class="flex-row font-16">
              <b>Expiration Time </b>{{ system.$commonFun.momentFun(deployData.data.expired_at)}}
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="flex-row font-16">
              <b>Spent </b>{{ deployData.data.spent }}
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="flex-row font-16">
              <b>Usage Time(h) </b>{{ system.$commonFun.durationFun(deployData.data.duration)}}
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="flex-row font-16">
              <b>Region </b>{{ deployData.data.region}}
            </div>
          </el-col>
        </el-row>

        <el-tabs v-model="activeName" class="demo-tabs m-16" @tab-click="drawerClick">
          <el-tab-pane label="BIDS" name="BIDS">
            <div class="content">
              <div class="flex-row font-16">
                {{ deployData.data.status_msg}}
                <span class="status-active" v-if="deployData.data && deployData.data.status_msg === 'Running'"></span>
              </div>
              <div class="content-area padding-16" v-if="deployData.data.cfg_specs">
                <div class="flex-row cfg-specs">
                  <div class="cfg-cont flex-row">
                    <div class="width-icon small">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MemoryIcon">
                        <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                      </svg>
                    </div>
                    <span class="font-14 weight-4">{{ deployData.data.cfg_specs.hardware_name}}</span>
                  </div>
                  <div class="cfg-cont flex-row" v-show="deployData.data.cfg_specs.hardware_specs.cpu">
                    <div class="width-icon small">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                        <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                      </svg>
                    </div>
                    <span class="font-14 weight-4">{{ deployData.data.cfg_specs.hardware_specs.cpu}}</span>
                  </div>
                  <div class="cfg-cont flex-row" v-show="deployData.data.cfg_specs.hardware_specs.gpu">
                    <div class="width-icon small">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                        <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                      </svg>
                    </div>
                    <span class="font-14 weight-4">{{ deployData.data.cfg_specs.hardware_specs.gpu}}</span>
                  </div>
                  <div class="cfg-cont flex-row">
                    <div class="width-icon small">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MemoryIcon">
                        <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                      </svg>
                    </div>
                    <span class="font-14 weight-4">{{ deployData.data.cfg_specs.hardware_specs.memory}}</span>
                  </div>
                </div>
                <div v-if="deployData.data.space_info">
                  <div class="flex-row font-16 list">
                    <b>Space Name: </b>{{ deployData.data.space_name}}
                  </div>
                  <div class="flex-row font-16 list">
                    <b>task UUID: </b>{{ deployData.data.space_info.task_uuid}}
                  </div>
                  <div class="flex-row font-16 list">
                    <b>storage source: </b>{{ deployData.data.space_info.storage_source}}
                  </div>
                </div>
                <!-- <div class="flex-row font-16 list">
                  <b>Price: </b>{{ deployData.data.cfg_specs.hardware_price}} USD per hour
                </div> -->
                <div class="flex-row font-16 list">
                  <b>provider Level: </b>Community
                </div>
                <div class="flex-row font-16 list nowrap">
                  <b>provider node id: </b>
                  {{ deployData.data.provider_node_id}}
                  <div class="width-icon min-small icon" v-if="deployData.data.provider_node_id" @click="system.$commonFun.notificationTip('Copied!', 'success',deployData.data.provider_node_id)">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FileCopyIcon">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-row font-16 list">
                  <b>result url: </b>
                  <a class="flex-row" @click="system.$commonFun.goLink(deployData.data.last_result_url)">{{ deployData.data.last_result_url}}
                    <div class="width-icon min-small" v-if="deployData.data.last_result_url">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                      </svg>
                    </div>
                  </a>
                  <div class="width-icon min-small icon" v-if="deployData.data.last_result_url" @click="system.$commonFun.notificationTip('Copied!', 'success',deployData.data.space_info.job_result_uri)">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FileCopyIcon">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="App" name="app">
            <iframe v-if="deployData.data.space_info && deployData.data.space_info.job_result_uri" :src="`${deployData.data.space_info.job_result_uri}#space_id=${deployData.data.space_info.task_uuid}`" title="Space app" class="space_iframe"></iframe>
            <div v-else>
              <el-alert :closable="false" title="Result Uri is Null, this result is not available." type="warning" />
            </div>
          </el-tab-pane> -->
          <el-tab-pane label="Logs" name="logs">
            <div class="logBody padding-16" v-if="deployData.data.space_info && !(deployData.data.status_msg === 'Created' || deployData.data.status_msg === 'Stopped')">
              <div class="flex-row log-title">
                <h4 class="font-16 weight-6" :class="{'is-active': logsType === 'build'}" @click="logsMethod(1, 'build')">build</h4>
                <h4 class="font-16 weight-6" :class="{'is-active': logsType !== 'build'}" @click="logsMethod(2, 'container')">container</h4>
              </div>
              <el-card class="box-card mianscroll font-14" v-show="logsType === 'build'">
                <p v-for="build in deployData.data.space_info.buildLog" :key="build">{{build}}</p>
              </el-card>
              <el-card class="box-card mianscroll font-14" v-show="logsType !== 'build'">
                <p v-for="container in deployData.data.space_info.containerLog" :key="container">{{container}}</p>
              </el-card>
            </div>
            <div v-else class="padding-16 font-16">Nothing To Show</div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </section>
</template>

<script>
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, onActivated, onDeactivated, nextTick, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { RefreshRight } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElSelect, ElOption, ElIcon, ElCheckbox, ElTabs, ElTabPane, ElAlert, ElCard } from "element-plus"
export default defineComponent({
  components: {
    loadingOver,
    RefreshRight,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElIcon, ElCheckbox, ElTabs, ElTabPane, ElAlert, ElCard
  },
  setup () {
    const store = useStore()
    // const accessToken = computed(() => (store.state.accessToken))
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const checked = ref(true)
    const listLoad = ref(false)
    const deployData = reactive({
      data: {}
    })
    const pagin = reactive({
      pageSize: 20,
      pageNo: 1,
      total: 0,
      sort: 'updated'
    })
    const activeName = ref('BIDS')
    const logsType = ref('build')

    async function getData () {
      listLoad.value = true
      deployData.data = {}
      const listRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_LOGINAPI}/deployments/${route.params.id}`, 'get')
      if (listRes && String(listRes.code) === '0') {
        deployData.data = listRes.data || {}
        if (deployData.data.result_url) deployData.data.space_info = await jobList(listRes.data)
        console.log(deployData.data.space_info)
      } else system.$commonFun.notificationTip(listRes.msg ? listRes.msg : 'Request failed.', 'error')
      listLoad.value = false
    }
    async function jobList (list) {
      let arr = {}
      try {
        if (list.result_url) {
          const response = await fetch(list.result_url)
          const textUri = await new Promise(async resolve => {
            resolve(response.text())
          })
          arr = JSON.parse(textUri)
        }
      } catch (err) {
        console.log('err', err)
      }
      arr.buildLog = []
      arr.containerLog = []
      return arr
    }
    let ws = null
    const websocketclose = async () => {
      try {
        if (ws) ws.close()
        ws = null
        console.log("closed")
      } catch (err) {
        ws = null
      }
    }
    const WebSocketFun = (url, index, n) => {
      if (typeof (WebSocket) === "undefined") {
        alert("Your browser does not support sockets")
      } else {
        try {
          ws = new WebSocket(url)
          ws.onopen = () => {
            console.log("ws connection successful")
          }
          ws.onmessage = (event) => {
            // console.log('ws data:', event.data)
            if (event.data) {
              if (event.data === 'ping' && ws) ws.send('pong')
              else if (index === 1) deployData.data.space_info.buildLog.push(event.data)
              else if (index === 2) deployData.data.space_info.containerLog.push(event.data)
              nextTick(() => {
                let scrollEl = document.querySelectorAll('.mianscroll')
                scrollEl.forEach(async el => {
                  await system.$commonFun.timeout(1000)
                  el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
                })
              })
            }
          }
          ws.onerror = (err) => {
            // console.log("Websocket connection error", err)
            if (index === 1) deployData.data.space_info.buildLog = ["Websocket connection error"]
            else if (index === 2) deployData.data.space_info.containerLog = ["Websocket connection error"]
          }
          ws.onclose = () => {
            console.log("ws connection closed")
          }
        } catch (err) {
          if (index === 1) deployData.data.space_info.buildLog = [{ err }]
          else if (index === 2) deployData.data.space_info.containerLog = [{ err }]
        }
      }
    }
    async function logsMethod (type, name) {
      logsType.value = name
      await websocketclose()
      if (type === 1) {
        deployData.data.space_info.buildLog = []
        if (deployData.data.space_info && deployData.data.space_info.build_log) await WebSocketFun(deployData.data.space_info.build_log, 1)
      } else {
        deployData.data.space_info.containerLog = []
        if (deployData.data.space_info && deployData.data.space_info.container_log) await WebSocketFun(deployData.data.space_info.container_log, 2)
      }
    }
    async function drawerClick (tab, event) {
      await websocketclose()
      if (activeName.value !== 'logs' || !deployData.data.space_info) return
      if (activeName.value === 'logs') {
        logsType.value = 'build'
        logsMethod(1, 'build')
      }
    }
    function handleSizeChange (val) { }
    async function handleCurrentChange (currentPage) {
      // console.log('handleCurrentChange:', currentPage)
      pagin.pageNo = currentPage
      getData()
    }
    onMounted(async () => { })
    onActivated(async () => getData())
    onDeactivated(() => activeName.value = 'BIDS')
    // watch(accessToken.value, () => {
    // if(accessToken.value !== '') {
    //   activeName.value = 'BIDS'
    //   getData()
    // }
    // })
    return {
      system,
      bodyWidth,
      checked,
      listLoad,
      deployData,
      pagin,
      activeName,
      logsType,
      handleSizeChange, handleCurrentChange, getData, drawerClick, logsMethod
    }
  }
})
</script>

<style lang="less" scoped>
#container-settings {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  :deep(.module) {
    margin: 0 auto 15px;
    h1 {
      color: @primary-color;
      .button {
        margin: 0 12px;
      }
      .el-checkbox {
        color: inherit;
        .el-checkbox__input.is-checked .el-checkbox__inner {
          background-color: @theme-color;
          border-color: @theme-color;
        }
        .el-checkbox__label {
          color: inherit;
        }
      }
    }
    .table-cont {
      position: relative;
      .status-active {
        width: 8px;
        height: 8px;
        margin: 0 6px;
        background-color: #67c23a;
        border-radius: 16px;
      }
      .el-row {
        .el-col {
          margin: 12px 0;
          div {
            b {
              min-width: 110px;
              margin: 0 6px 0 0;
              text-transform: capitalize;
              color: @grey-color;
            }
          }
        }
      }
      .demo-tabs {
        .el-tabs__header {
          margin: 0;
          .el-tabs__nav-scroll {
            background-color: @primary-color-opacity2;
            .el-tabs__item {
              padding: 0 20px;
              border-bottom: 2px solid transparent;
              text-transform: uppercase;
              &.is-active {
                color: @theme-color;
                border-color: @theme-color;
              }
            }
            .el-tabs__active-bar {
              display: none;
            }
          }
        }
        .el-tabs__content {
          color: @grey-color;
          .content {
            padding: 16px;
            margin: 16px 0 0;
            .content-area {
              margin: 16px 0 0;
              background-color: @white-color;
              .cfg-specs {
                padding: 0 0 12px;
                .cfg-cont {
                  padding: 2px 6px;
                  margin: 0 12px 0 0;
                  background-color: @primary-color-opacity2;
                  color: @primary-color;
                  border: 1px solid @primary-color;
                  border-radius: 30px;
                  &.background {
                    background-color: transparent;
                  }
                  span {
                    margin: 3px 0 0 6px;
                  }
                  .width-icon {
                    fill: @grey-color;
                  }
                }
              }
              .list {
                margin: 16px 0;
                color: @grey-color;
                align-items: flex-start;
                line-height: 1.3;
                b {
                  margin: 0 12px 0 0;
                  text-transform: capitalize;
                  color: @primary-color-opacity;
                  white-space: nowrap;
                }
                .icon {
                  margin: 0 0 0 6px;
                  color: @grey-color;
                  cursor: pointer;
                  svg,
                  path {
                    fill: @grey-color;
                  }
                }
                a {
                  color: @theme-color;
                  text-decoration: underline;
                  svg,
                  path {
                    fill: @theme-color;
                  }
                }
              }
            }
          }
          .space_iframe {
            width: 100%;
            min-height: 315px;
            overflow: auto;
            @media screen and (min-height: 500px) and (min-width: 769px) {
              min-height: 315px;
            }
            @media screen and (min-height: 600px) and (min-width: 769px) {
              min-height: 415px;
            }
            @media screen and (min-height: 680px) and (min-width: 769px) {
              min-height: 495px;
            }
            @media screen and (min-height: 700px) and (min-width: 769px) {
              min-height: 595px;
            }
            @media screen and (min-height: 750px) and (min-width: 769px) {
              min-height: 565px;
            }
            @media screen and (min-height: 768px) and (min-width: 769px) {
              min-height: 595px;
            }
            @media screen and (min-height: 900px) and (min-width: 769px) {
              min-height: 685px;
            }
            @media screen and (min-height: 1000px) and (min-width: 769px) {
              min-height: 755px;
            }
            @media screen and (min-height: 1100px) and (min-width: 769px) {
              min-height: 925px;
            }
            @media screen and (min-height: 1200px) and (min-width: 769px) {
              min-height: 985px;
            }

            &.space_text {
              padding: 11px;
              background-color: #000;
              font-size: 14px;
              color: #fff;
              box-shadow: inset 0 5px 5px rgba(204, 204, 204, 0.55);
              cursor: text;
              word-break: break-all;
              @media screen and (min-width: 1800px) {
                font-size: 16px;
              }
              @media screen and (max-width: 600px) {
                font-size: 13px;
              }
            }
          }
          .logBody {
            margin: 0;
            .log-title {
              h4 {
                padding: 6px 12px;
                margin: 16px 12px 16px 0;
                text-transform: capitalize;
                border: 1px solid @primary-color-opacity2;
                border-radius: 4px;
                cursor: pointer;
                &.is-active,
                &:hover {
                  background-color: @primary-color-opacity2;
                }
              }
            }
            .box-card {
              max-height: 300px;
              margin: 16px 0;
              white-space: nowrap;
              overflow-y: auto;
            }
          }
        }
      }
    }
  }
}
</style>