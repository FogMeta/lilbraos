<template>
  <div class="title">{{ title }}</div>
  <div class="tabs flex flex-center-align">
    <div v-for="item in tabs" :key="item.value" :class="{ tab: true, active: item.value === active }" @click="changeTab(item)">
      {{ item.title }}
    </div>
  </div>
  <el-row class="content">
    <el-col :md="13" :xs="24">
      <div class="content-text flex-column flex-center-justify">
        <div class="content-text-title">{{ activeItem?.title }}</div>
        <div class="content-text-line"></div>
        <div class="content-text-desc ellipsis4">{{ activeItem?.desc }}</div>
      </div>
    </el-col>
    <el-col :md="11" :xs="24">
      <img :src="activeItem?.img" style="width: 100%" />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from "vue"
import { ElRow, ElCol } from "element-plus"
const title = ref('Blockchain-as-a-Service (BaaS)')
const tabs = ref([
  {
    value: 1,
    img: require(`@/assets/images/home/service-01.jpg`),
    title: 'Rapid Deployment',
    desc: 'Provide the ability to quickly deploy an enterprise-level blockchain environment with one-click, eliminates the need for complex configuration and enables out-of-the-box use in minutes.'
  },
  {    value: 2,
    img: require(`@/assets/images/home/service-02.jpg`),
    title: 'Monitoring Services', desc: 'Support blockchain browser, access to FogMeta cloud monitoring, provide real-time monitoring of blockchain status and automatic alarm functions.'  },
  {    value: 3,
    img: require(`@/assets/images/home/service-03.jpg`),
    title: 'App Access', desc: 'Provide standard NFT and blockchain contract SDK with built-in connection information and verification to accelerate development.'  },
  {    value: 4,
    img: require(`@/assets/images/home/service-04.jpg`),
    title: 'High Stability', desc: 'The entire link of the system is designed with high-availability, the underlying data storage has extremely high reliability, and the system also supports non-disruputive and elastic storage expansion of applications.'  },
  {    value: 5,
    img: require(`@/assets/images/home/service-05.jpg`),
    title: 'Simple to Use', desc: 'We help enterprises focus on business innovation with one-click deployment of enterprise-level blockchain environment, rich management and operation and maintenance functions.'  }
])
const active = ref(1)
const activeItem = computed(() => tabs.value.find((item) => active.value === item.value))
function changeTab (item) {
  active.value = item.value;
}
</script>

<style lang="less" scoped>
.title {
  color: #231f20;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.tabs {
  overflow-x: auto;
  margin-bottom: 60px;
}
.tabs::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.tab {
  cursor: pointer;
  margin: 0 10px 0 0;
  padding: 14px 37px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  color: #000;
  background-color: #f5f9ff;
  line-height: 1.1;
  word-break: keep-all;
}
.tab.active {
  color: #fff;
  background-color: #48b0ff;
}
.content {
  background-color: #1d1c21;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  margin-bottom: 120px;
  &-text {
    height: 100%;
    padding: 30px;
    color: #fff;
    &-title {
      font-size: 22px;
      font-weight: bold;
    }
    &-line {
      margin: 15px 0 25px 0;
      width: 45px;
      height: 2px;
      border: 1px solid #fff;
    }
    &-desc {
      font-size: 17px;
      line-height: 1.7;
    }
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }
  .tabs {
    margin-bottom: 40px;
  }
  .tab {
    padding: 10px;
    font-size: 12px;
    line-height: 15px;
  }
  .content {
    margin-bottom: 40px;
  }
}
</style>
