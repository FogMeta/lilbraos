<template>
  <section id="container-priceCompare" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-48 weight-6 flex-row center">Lagrange vs. Cloud giants</h1>
      <h5 class="font-24 weight-4 flex-row center">A simple price comparison</h5>
      <h6 class="font-12 weight-4 flex-row center">$USD price per month</h6>
      <div class="area flex-row flex-start">
        <el-table :data="priceData" table-layout="fixed">
          <el-table-column prop="space" min-width="120">
            <template #header>
              <span class="font-12 weight-5 header-style">Space</span>
            </template>
            <template #default="scope">
              <div class="flex-row center filter" v-if="scope.$index === 0">
                <div class="flex-row center">
                  <small class="font-12">vCPUs</small>
                  <el-input-number :min="0.1" controls-position="right" v-model="vcpu" placeholder="vCPUs" class="input-with-select" />
                </div>
                <div class="flex-row center">
                  <small class="font-12">Memory</small>
                  <el-input-number :min="0.1" controls-position="right" v-model="memory.value" placeholder="Memory" class="input-with-select" />
                  <el-select v-model="memory.select" placeholder="Select" style="width: 80px">
                    <el-option label="MB" value="1" />
                    <el-option label="GB" value="2" />
                    <el-option label="MiB" value="3" />
                    <el-option label="GiB" value="4" />
                  </el-select>
                </div>
                <div class="flex-row center">
                  <small class="font-12">Storage</small>
                  <el-input-number :min="0.1" controls-position="right" v-model="storage.value" placeholder="Storage" class="input-with-select" />
                  <el-select v-model="storage.select" placeholder="Select" style="width: 80px">
                    <el-option label="MB" value="1" />
                    <el-option label="GB" value="2" />
                    <el-option label="MiB" value="3" />
                    <el-option label="GiB" value="4" />
                  </el-select>
                </div>
              </div>
              <div class="flex-row center space-style" v-else>
                <div class="flex-row center">
                  <div class="width-icon big">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                      <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                    </svg>
                  </div>
                  <span class="weight-6">1</span>
                  CPU
                </div>
                <div class="flex-row center">
                  <div class="width-icon big">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MemoryIcon">
                      <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                    </svg>
                  </div>
                  <span class="weight-6">2 GB</span>
                  RAM
                </div>
                <div class="flex-row center">
                  <div class="width-icon big">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StorageIcon">
                      <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path>
                    </svg>
                  </div>
                  <span class="weight-6">1 GB</span>
                  Disk
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="us">
            <template #header>
              <span class="font-20 weight-6 header-style color">Lagrange</span>
            </template>
            <template #default="scope">
              <div class="flex-row center">
                <span class="font-20 weight-6">{{ scope.row.us}}</span>
                <span class="font-12 weight-6 rise">-83.85%</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="aws" width="120">
            <template #header>
              <span class="font-12 weight-5 header-style">AWS</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.aws}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="gcp" width="120">
            <template #header>
              <span class="font-12 weight-5 header-style">GCP</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.gcp}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="azure" width="120">
            <template #header>
              <span class="font-12 weight-5 header-style">AZURE</span>
            </template>
            <template #default="scope">
              <span class="font-14 weight-4">{{ scope.row.azure}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <h4 class="font-34 weight-6">Disclaimer</h4>
      <ul>
        <li class="font-16 weight-4">These prices may vary. We strongly suggest that you do your own research as we may have miss-calculated some of the providers pricing.</li>
        <li class="font-16 weight-4">To calculate the pricing for Akash, we use the same calculations from the provider bidding engine in the
          <span @click="system.$commonFun.goLink('')">helm-charts</span> repo from Akash.</li>
        <li class="font-16 weight-4">For the other cloud providers, we use the same logic of price per GB of ram/storage and price per thread.</li>
        <li class="font-16 weight-4">
          <b @click="system.$commonFun.goLink('')">Amazon Web Service pricing calculator</b>
        </li>
        <li class="font-16 weight-4">
          <b @click="system.$commonFun.goLink('')">Google cloud platform pricing calculator</b>
        </li>
        <li class="font-16 weight-4">
          <b @click="system.$commonFun.goLink('')">Microsoft Azure pricing calculator</b>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  Edit
} from '@element-plus/icons-vue'
import { ElButton, ElProgress, ElInputNumber, ElInput, ElSelect, ElOption, ElTable, ElTableColumn } from "element-plus"
export default defineComponent({
  components: {
    Edit, ElButton, ElProgress, ElInputNumber, ElInput, ElSelect, ElOption, ElTable, ElTableColumn
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const priceData = ref([
      {
        space: '11',
        us: 'US$6.73',
        aws: 'US$38.73',
        gcp: 'US$42.64',
        azure: 'US$46.46'
      }, {
        space: '11',
        us: 'US$5.83',
        aws: 'US$32.82',
        gcp: 'US$36.14',
        azure: 'US$39.37'
      }, {
        space: '11',
        us: 'US$7.08',
        aws: 'US$36.06',
        gcp: 'US$39.74',
        azure: 'US$43.26'
      }, {
        space: '11',
        us: 'US$14.08',
        aws: 'US$72.13',
        gcp: 'US$79.44',
        azure: 'US$86.52'
      }
    ])
    const vcpu = ref(0.1)
    const memory = reactive({
      value: 1,
      select: 'GB'
    })
    const storage = reactive({
      value: 1,
      select: 'GB'
    })

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      priceData,
      vcpu,
      memory,
      storage
    }
  }
})
</script>

<style lang="less" scoped>
#container-priceCompare {
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
      line-height: 1.3;
    }
    .area {
      height: auto;
      padding: 32px 0 50px;
      text-align: center;
      transition: all 0.8s;
      overflow: hidden;
      .el-table {
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
        }
      }
    }
    ul {
      padding: 0 0 0 20px;
      margin: 16px 0;
      list-style: disc;
      li {
        list-style: disc;
        b,
        span {
          color: @theme-color;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        b {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
