<template>
  <section id="container-settings" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-24 weight-6 flex-row">
        Deployments
        <span class="button width-icon" @click="getData">
          <el-icon>
            <RefreshRight />
          </el-icon>
        </span>
        <el-checkbox v-model="checked" label="Active" size="large" @change="getData" />
      </h1>
      <div class="area padding-64 flex-row center">
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
      <div class="table-cont">
        <loading-over v-if="listLoad" :listLoad="listLoad"></loading-over>
        <el-table :data="deployData" table-layout="fixed">
          <el-table-column prop="space_name">
            <template #header>
              <span class="font-14 weight-5 header-style">Space Name</span>
            </template>
            <template #default="scope">
              <div class="flex-row center">
                <router-link :to="{ name: 'deployDetail', params: {id:scope.row.id }}" class="font-14 weight-4">{{ scope.row.space_name}}</router-link>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="cfg_name">
            <template #header>
              <span class="font-14 weight-5 header-style">CFG Name</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.cfg_name}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="duration">
            <template #header>
              <span class="font-14 weight-5 header-style">Duration</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.duration}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="region">
            <template #header>
              <span class="font-14 weight-5 header-style">Region</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.region}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="result_url">
            <template #header>
              <span class="font-14 weight-5 header-style">Result URL</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.result_url}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status_msg">
            <template #header>
              <span class="font-14 weight-5 header-style">status msg</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.status_msg}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="created_at">
            <template #header>
              <span class="font-14 weight-5 header-style">created at</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ system.$commonFun.momentFun(scope.row.created_at)}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="flex-row" hide-on-single-page :page-size="pagin.pageSize" :current-page="pagin.pageNo" :pager-count="5" layout="total, prev, pager, next" :total="pagin.total" @size-change="handleSizeChange" @current-change="handleCurrentChange"
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
import { RefreshRight } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElSelect, ElOption, ElIcon, ElCheckbox, ElTable, ElTableColumn, ElPagination } from "element-plus"
export default defineComponent({
  components: {
    loadingOver,
    RefreshRight,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElIcon, ElCheckbox, ElTable, ElTableColumn, ElPagination
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const checked = ref(true)
    const listLoad = ref(false)
    const deployData = ref([])
    const pagin = reactive({
      pageSize: 20,
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
        params.total = listRes.data.total || 0
      }
      // else system.$commonFun.notificationTip(listRes.msg ? listRes.msg : 'Request failed.', 'error')
      listLoad.value = false
    }
    function handleSizeChange (val) { }
    async function handleCurrentChange (currentPage) {
      // console.log('handleCurrentChange:', currentPage)
      pagin.pageNo = currentPage
      getData()
    }
    onMounted(async () => { })
    onActivated(async () => {
      getData()
    })
    return {
      system,
      bodyWidth,
      checked,
      listLoad,
      deployData,
      pagin,
      handleSizeChange, handleCurrentChange, getData
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
            &:nth-child(2n + 1) {
              background-color: @primary-color-opacity2;
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
            }
          }
          th {
            border-bottom: 1px solid @grey-color;
          }
        }
      }
    }
  }
}
</style>