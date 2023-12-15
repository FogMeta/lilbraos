<template>
  <section id="container-deploy" class="lang-max top-margin both-margin">
    <div class="module">
      <loading-over v-if="listLoad" :listLoad="listLoad"></loading-over>
      <h1 class="font-24 weight-6 flex-row">
        Deployments
        <span class="button width-icon" @click="getData">
          <el-icon>
            <RefreshRight />
          </el-icon>
        </span>
        <el-checkbox v-model="checked" label="Active" size="large" @change="getData" />
      </h1>
      <div class="area padding-64 flex-row center" v-show="deployData.length === 0">
        <div class="tit font-24 weight-4">{{ checked? 'No active deployments' : 'No deployments'}}</div>
        <router-link :to="{ name: 'deployNew'}" class="root flex-row center button-shadow">
          <span class="hide">Deploy to Lagrange</span>
          <i class="el-icon width-icon small">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon">
              <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
            </svg>
          </i>
        </router-link>
        <router-link to="" class="root flex-row center button-shadow is-disabled">
          <span class="hide">Deploy to Akash</span>
          <i class="el-icon width-icon small">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon">
              <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
            </svg>
          </i>
        </router-link>
      </div>
      <div class="table-cont top-margin" v-show="deployData.length > 0">
        <el-table :data="deployData" table-layout="fixed">
          <el-table-column prop="space_name" width="140">
            <template #header>
              <span class="font-14 weight-5 header-style">Space Name</span>
            </template>
            <template #default="scope">
              <div class="flex-row center">
                <a class="font-14 weight-4" @click="goDetail(scope.row.id)">{{ scope.row.space_name}}</a>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="cfg_name" width="160">
            <template #header>
              <span class="font-14 weight-5 header-style">CFG Specs</span>
            </template>
            <template #default="scope">
              <div class="cfg-specs" @click="goDetail(scope.row.id)">
                <div class="cfg-cont flex-row"></div>
                <div class="cfg-cont background flex-row space-between">
                  <div class="width-icon min-small">
                    <MoreFilled />
                  </div>
                  <div class="width-icon min-small">
                    <svg t="1701244862415" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17484" width="200" height="200">
                      <path d="M896 512a384 384 0 1 0-384 384 384 384 0 0 0 384-384z m64 0A448 448 0 1 1 512 64a448 448 0 0 1 448 448z" p-id="17485"></path>
                      <path d="M232.64 246.08a32 32 0 1 1 46.72-44.16l544 576a32 32 0 1 1-46.72 44.16z" p-id="17486"></path>
                    </svg>
                  </div>
                </div>
                <div class="cfg-cont flex-row">
                  <div class="width-icon small">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MemoryIcon">
                      <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                    </svg>
                  </div>
                  <span class="font-14 weight-4">{{ scope.row.cfg_specs.hardware_name}}</span>
                </div>
                <div class="cfg-cont flex-row" v-show="scope.row.cfg_specs.hardware_specs.cpu">
                  <div class="width-icon small">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                      <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                    </svg>
                  </div>
                  <span class="font-14 weight-4">{{ scope.row.cfg_specs.hardware_specs.cpu}}</span>
                </div>
                <div class="cfg-cont flex-row" v-show="scope.row.cfg_specs.hardware_specs.gpu">
                  <div class="width-icon small">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                      <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                    </svg>
                  </div>
                  <span class="font-14 weight-4">{{ scope.row.cfg_specs.hardware_specs.gpu}}</span>
                </div>
                <div class="cfg-cont flex-row">
                  <div class="width-icon small">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MemoryIcon">
                      <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                    </svg>
                  </div>
                  <span class="font-14 weight-4">{{ scope.row.cfg_specs.hardware_specs.memory}}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="duration" width="120">
            <template #header>
              <span class="font-14 weight-5 header-style">Usage Time(h)</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{system.$commonFun.durationFun(scope.row.duration)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="region" width="120">
            <template #header>
              <span class="font-14 weight-5 header-style">Region</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.region}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="result_url" min-width="140">
            <template #header>
              <span class="font-14 weight-5 header-style">Result URL</span>
            </template>
            <template #default="scope">
              <a v-if="scope.row.last_result_url" class="font-14 weight-4" @click="system.$commonFun.goLink(scope.row.last_result_url)">{{ scope.row.last_result_url}}</a>
              <span v-else class="font-14 weight-5 header-style">-</span>
            </template>
          </el-table-column>
          <el-table-column prop="status_msg" min-width="100">
            <template #header>
              <span class="font-14 weight-5 header-style">status msg</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.status_msg}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="spent" width="90">
            <template #header>
              <span class="font-14 weight-5 header-style">spent</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{scope.row.spent}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="created_at" width="130">
            <template #header>
              <span class="font-14 weight-5 header-style">created at</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ system.$commonFun.momentFun(scope.row.created_at)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="expired_at" width="130">
            <template #header>
              <span class="font-14 weight-5 header-style">expired at</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4" v-if="scope.row.expired_at !== 0">{{ system.$commonFun.momentFun(scope.row.expired_at)}}</span>
              <span v-else>-</span>
            </template>
          </el-table-column>
          <el-table-column prop="ended_at" width="130">
            <template #header>
              <span class="font-14 weight-5 header-style">ended at</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4" v-if="scope.row.ended_at !== 0">{{ system.$commonFun.momentFun(scope.row.ended_at)}}</span>
              <span v-else>-</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="flex-row center mt-border" hide-on-single-page :page-size="pagin.pageSize" :current-page="pagin.pageNo" :pager-count="5" layout="total, prev, pager, next" :total="pagin.total" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </section>
</template>

<script>
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { RefreshRight, MoreFilled } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElSelect, ElOption, ElIcon, ElCheckbox, ElTable, ElTableColumn, ElPagination } from "element-plus"
export default defineComponent({
  components: {
    loadingOver,
    RefreshRight, MoreFilled,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElIcon, ElCheckbox, ElTable, ElTableColumn, ElPagination
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
    const deployData = ref([])
    const pagin = reactive({
      pageSize: 10,
      pageNo: 1,
      total: 0,
      sort: 'updated'
    })

    async function getData () {
      listLoad.value = true
      deployData.value = []
      const page = pagin.pageNo > 0 ? pagin.pageNo - 1 : 0
      const params = {
        status: checked.value ? 1 : 0,
        page_no: page,
        page_size: pagin.pageSize
      }
      const listRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_LOGINAPI}/deployments?${Qs.stringify(params)}`, 'get')
      if (listRes && String(listRes.code) === '0') {
        deployData.value = listRes.data.list || []
        pagin.total = listRes.data.total || 0
      } else system.$commonFun.notificationTip(listRes.msg ? listRes.msg : 'Request failed.', 'error')
      listLoad.value = false
    }
    async function jobList (list) {
      let arr = list || []
      for (let j = 0; j < arr.length; j++) {
        try {
          if (arr[j].result_url) {
            const response = await fetch(arr[j].result_url)
            const textUri = await new Promise(async resolve => {
              resolve(response.text())
            })
            arr[j].job_result_uri = JSON.parse(textUri).job_result_uri
          } else arr[j].job_result_uri = ''
        } catch (err) {
          console.log('err', err)
          arr[j].job_result_uri = ''
        }
      }
      return arr
    }
    function handleSizeChange (val) { }
    async function handleCurrentChange (currentPage) {
      // console.log('handleCurrentChange:', currentPage)
      pagin.pageNo = currentPage
      getData()
    }
    function goDetail (detailId) {
      router.push({ name: 'deployDetail', params: { id: detailId } })
    }
    onMounted(async () => { })
    onActivated(async () => {
      getData()
    })
    // watch(accessToken.value, () => {
    // if(accessToken.value !== '') getData()
    // })
    return {
      system,
      bodyWidth,
      checked,
      listLoad,
      deployData,
      pagin,
      handleSizeChange, handleCurrentChange, getData, goDetail
    }
  }
})
</script>

<style lang="less" scoped>
#container-deploy {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  :deep(.module) {
    margin: 0 auto 15px;
    h1 {
      color: @primary-color;
      .button {
        margin: 0 25px;
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
    .area {
      height: auto;
      transition: all 0.8s;
      text-align: center;
      line-height: 2;
      overflow: hidden;
      @media screen and (max-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
        line-height: 1.5;
      }
      .tit {
        width: 100%;
      }
      .root {
        padding: 8px 22px;
        margin: 16px;
        background-color: @theme-color;
        font-size: 15px;
        color: @white-color;
        border-radius: 5px;
        text-transform: uppercase;
        @media screen and (max-width: 600px) {
          margin: 16px 16px 0;
        }
        &:hover {
          background-color: @theme-color-opacity1;
        }
        &.is-disabled {
          cursor: no-drop;
          background-color: @primary-color-opacity1;
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
    }
    .table-cont {
      position: relative;
      .el-table {
        border-radius: 6px;
        overflow: hidden;
        tbody {
          tr {
            &:first-child {
              background-color: transparent !important;
            }
            &:hover {
              background-color: none;
            }
          }
        }
        tr {
          background-color: transparent;
          th,
          td {
            padding: 16px 0;
            background-color: transparent;
            border: 0;
            .cell {
              line-height: 1.3;
              color: @grey-color;
              .header-style {
                display: block;
                text-align: center;
                text-transform: uppercase;
                &.color {
                  color: transparent;
                  background-image: linear-gradient(
                    to right,
                    @theme-color-opacity1,
                    @theme-color
                  );
                  -webkit-background-clip: text;
                }
              }
              a {
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
          td {
            border-bottom: 1px solid @primary-color-opacity3;
            .cell {
              text-align: center;
              color: @primary-color;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              .rise {
                padding: 1px 8px;
                margin: 0 0 0 8px;
                background-color: #9cff6b;
                border-radius: 20px;
              }
              .space-style {
                line-height: 25px;
                color: @grey-color;
                .flex-row {
                  margin: 2px 8px;
                  .width-icon {
                    fill: @grey-color;
                    svg,
                    path {
                      fill: inherit;
                    }
                  }
                  span {
                    margin: 0 8px;
                    color: @primary-color;
                  }
                }
              }
              .filter {
                .center {
                  position: relative;
                  margin: 4px;
                  small {
                    position: absolute;
                    top: -6px;
                    left: 6px;
                    padding: 0 4px;
                    background-color: @white-color;
                    color: @primary-color-opacity;
                    z-index: 9;
                  }
                }
                .el-input-number {
                  width: auto;
                  .el-input-number__increase,
                  .el-input-number__decrease {
                    background-color: transparent;
                    border: 0;
                  }
                  .el-input {
                    .el-input__wrapper {
                      width: 80px;
                      height: 32px;
                      padding: 0 32px 0 8px;
                      text-align: left;
                    }
                  }
                }
              }
              .cfg-specs {
                background-color: @bg-color;
                padding: 4px;
                .cfg-cont {
                  padding: 2px 6px;
                  margin: 4px 0 0;
                  background-color: @white-color;
                  color: @grey-color;
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
            }
          }
          th {
            border-bottom: 1px solid @grey-color;
          }
        }
      }
      .el-pagination {
        button,
        li {
          background-color: transparent;
        }
      }
    }
  }
}
</style>