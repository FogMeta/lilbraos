<template>
  <div class="home-header flex-column flex-center-align flex-around">
    <img src="@/assets/images/home/base64-img.png" />
    <div class="home-header-title">{{ title }}</div>
    <div class="home-header-desc ellipsis3 lang-max">{{ desc }}</div>
    <div class="home-header-action flex flex-center">
      <el-button class="home-header-action-btn" :size="isPhone ? 'small' : 'default'" @click="start">Started Now</el-button>
      <el-button class="home-header-action-btn" :size="isPhone ? 'small' : 'default'" @click="learn">Learn More</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { ElButton } from "element-plus"
import { isPhone } from '@/hooks/layer'
const title = ref('Decentralized Operating System')
const desc = ref(
  'A decentralized operating system that seamlessly integrates decentralized computing, storage, multi-chain access, and robust server-level protection for wallet private keys.'
)
function start () { }
function learn () { }
</script>

<style lang="less" scoped>
.home-header {
  position: relative;
  padding: 150px 10px 140px 10px;
  background: #48b0ff url(../../../assets/images/home/bg-banner.jpg) no-repeat
    left bottom;
  background-size: 100%;
  overflow: hidden;
  color: #fff;
  img {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 310px;
  }
  &-title {
    position: relative;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }
  &-desc {
    padding: 32px 0;
    position: relative;
    font-size: 22px;
    text-align: center;
  }
  &-action {
    position: relative;
    &-btn {
      padding: 16px 23px;
      margin: 7px;
      font-size: 15px;
      color: #48b0ff;
      border: 1px solid #bac8d3;
      border-radius: 8px;
    }
  }
}

@media (max-width: 768px) {
  .home-header {
    padding: 110px 10px 120px 10px;
    img {
      width: 150px;
    }
    &-title {
      font-size: 25px;
      line-height: 30px;
      max-width: 90vw;
    }
    &-desc {
      font-size: 12px;
      max-width: 80vw;
    }
    &-action {
      &-btn {
        margin: 0 10px;
      }
    }
  }
}
</style>
