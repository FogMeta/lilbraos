<template>
  <section id="container-analytics" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-32 weight-6 mt-border">Lagrange Network Mainnet Dashboard</h1>
      <div class="area flex-row space-between">
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">USD PRICE</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> {{system.$commonFun.NumFormat(0.97)}}
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">MARKET CAP</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> {{system.$commonFun.NumFormat(214446276)}}
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">VOLUME (24H)</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> {{system.$commonFun.NumFormat(2811345)}}
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">RANK</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> {{system.$commonFun.NumFormat(180)}}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Network Summary</h3>
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">USD SPENT (24H)</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(812.44)}}
                <span class="font-16">$USD</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+91.25</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">TOTAL SPENT USD</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(135889.58)}}
                <span class="font-16">$USD</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+813.06</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">NEW DEPLOYMENTS (24H)</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(207)}}
                <span class="font-16">$USD</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+111</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">TOTAL DEPLOYMENTS</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(135361)}}
                <span class="font-16">$USD</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+207</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Spent Assets</h3>
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">USD SPENT (24H)</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(791.41)}}
                <span class="font-16">USD</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+101.76</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">TOTAL SPENT USD</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(185521.32)}}
                <span class="font-16">USD</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+791.41</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">USDC SPENT (24H)</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(0.02)}}
                <span class="font-16">USDC</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+0.02</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">TOTAL SPENT USDC</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(2.3)}}
                <span class="font-16">USDC</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+0.02</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Total resources leased</h3>
        <el-row :gutter="16" class="tem-row tem-col">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">ACTIVE DEPLOYMENTS</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(399)}}
                <span class="font-16"></span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">-18</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">COMPUTE</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(1319.77)}}
                <span class="font-16">CPU</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+144.2</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">GRAPHICS</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(79)}}
                <span class="font-16">CPU</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+11</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">MEMORY</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(4.29)}}
                <span class="font-16">TB</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+5.01 GB</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">STORAGE</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(36.38)}}
                <span class="font-16">TB</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+1.51 TB</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Network Capacity</h3>
        <el-row :gutter="16" class="tem-row tem-col">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">ACTIVE PROVIDERS</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(46)}}
                <span class="font-16"></span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+1</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">COMPUTE</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(5259)}}
                <span class="font-16">CPU</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+122.81</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">GRAPHICS</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(164)}}
                <span class="font-16">CPU</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">-2</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">MEMORY</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(31.77)}}
                <span class="font-16">TB</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+463.72 GB</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">STORAGE</div>
              <div class="font-24 weight-4 desc">
                {{system.$commonFun.NumFormat(261.19)}}
                <span class="font-16">TB</span>
              </div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">+1.97 TB</span>
                <span class="font-12 weight-6 rise">+3.85%</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="time font-12 weight-4">Last updated: {{gmtTime}}</div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Edit } from '@element-plus/icons-vue'
import {
  ElButton, ElRow, ElCol, ElSelect, ElOption, ElCard, ElInput
} from "element-plus"
export default defineComponent({
  components: {
    Edit, ElButton, ElRow, ElCol, ElSelect, ElOption, ElCard, ElInput
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const gmtTime = ref('')

    function currentTime () {
      var date = new Date();
      var year = date.getFullYear()
      let month = date.getMonth()
      var dateArr = [
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
      for (var i = 0; i < dateArr.length; i++) {
        if (dateArr[i] >= 1 && dateArr[i] <= 9) {
          dateArr[i] = "0" + dateArr[i];
        }
      }
      var strDate =
        year +
        "/" +
        dateArr[0] +
        "/" +
        dateArr[1] +
        " " +
        dateArr[2] +
        ":" +
        dateArr[3] +
        ":" +
        dateArr[4];
      gmtTime.value = strDate
    }
    onMounted(async () => { currentTime() })
    return {
      system,
      bodyWidth, gmtTime
    }
  }
})
</script>

<style lang="less" scoped>
#container-analytics {
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
      text-align: center;
    }
    h3 {
      width: 100%;
      text-align: center;
    }
    .time {
      padding: 40px 0 16px;
      color: @grey-color;
      font-style: italic;
    }
    .area {
      height: auto;
      transition: all 0.8s;
      .tem-row {
        width: 100%;
        &.tem-col {
          .el-col {
            @media screen and (min-width: 1200px) {
              max-width: 20%;
              flex: 0 0 20%;
            }
          }
        }
        .el-col {
          margin-bottom: 16px;
          .el-card {
            padding: 12px 16px;
            color: @primary-color-opacity;
            border: 0;
            border-radius: 8px;
            // cursor: pointer;
            .el-card__body {
              padding: 0;
              .desc {
                color: @primary-color;
                span {
                  line-height: 1;
                }
                .rise {
                  padding: 1px 8px;
                  margin: 0 0 0 8px;
                  background-color: #9cff6b;
                  border-radius: 20px;
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