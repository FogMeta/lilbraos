<template>
  <section id="container-analytics" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-32 weight-6 mt-border">Lagrange Network Mainnet Dashboard</h1>
      <div class="area flex-row space-between">
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="n in 4" :key="n">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">AKT PRICE</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> 1.18
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Network Summary</h3>
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="n in 4" :key="n">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">AKT PRICE</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> 1.18
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Spent Assets</h3>
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="n in 4" :key="n">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">AKT PRICE</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> 1.18
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Total resources leased</h3>
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="n in 4" :key="n">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">AKT PRICE</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> 1.18
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area flex-row space-between">
        <h3 class="font-24 weight-3 padding-16">Network Capacity</h3>
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="n in 4" :key="n">
            <el-card class="is-disabled" shadow="hover">
              <div class="font-16 weight-4">AKT PRICE</div>
              <div class="font-24 weight-4 desc">
                <span class="font-16">US$</span> 1.18
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
              }
            }
          }
        }
      }
    }
  }
}
</style>