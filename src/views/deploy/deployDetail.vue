<template>
  <section id="container-settings" class="lang-max top-margin both-margin">
    <div class="module">
      <div class="area flex-row flex-start nowrap">
        <router-link :to="{ name: 'deploy'}" class="button width-icon">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </router-link>
      </div>
      <div class="table-cont">
        <loading-over v-if="listLoad" :listLoad="listLoad"></loading-over>
        <ul class="padding-24 mt-border">
          <li class="flex-row font-16">
            <b>Space Name: </b>{{ deployData.data.space_name}}
          </li>
          <li class="flex-row font-16">
            <b>CFG Name: </b>{{ deployData.data.cfg_name}}
          </li>
          <li class="flex-row font-16">
            <b>Duration: </b>{{ deployData.data.duration}}
          </li>
          <li class="flex-row font-16">
            <b>Region: </b>{{ deployData.data.region}}
          </li>
          <li class="flex-row font-16">
            <b>Result URL: </b>{{ deployData.data.result_url}}
          </li>
          <li class="flex-row font-16">
            <b>Status Msg: </b>{{ deployData.data.status_msg}}
          </li>
          <li class="flex-row font-16">
            <b>Created At: </b>{{ system.$commonFun.momentFun(deployData.data.created_at)}}
          </li>
        </ul>
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
import { ElButton, ElRow, ElCol, ElSelect, ElOption, ElIcon, ElCheckbox } from "element-plus"
export default defineComponent({
  components: {
    loadingOver,
    RefreshRight,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElIcon, ElCheckbox
  },
  setup () {
    const store = useStore()
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

    async function getData () {
      listLoad.value = true
      const listRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_LOGINAPI}/deployments/${route.params.id}`, 'get')
      if (listRes && String(listRes.code) === '0') {
        deployData.data = listRes.data || {}
      }
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
      ul {
        background-color: @primary-color-opacity2;
        border-radius: 16px;
        li {
          padding: 4px 0;
          line-height: 1.35;
          b {
            margin: 0 6px 0 0;
            text-transform: capitalize;
          }
        }
      }
    }
  }
}
</style>