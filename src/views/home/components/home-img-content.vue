<template>
  <el-row class="home-img-content">
    <el-col :md="11" :xs="24">
      <img src="@/assets/images/home/bg-02.jpg" style="width: 100%" />
    </el-col>
    <el-col :md="13" :xs="24">
      <div class="content flex-column flex-center-justify">
        <div class="content-title font-36 weight-6">{{ title }}</div>
        <div class="content-desc ellipsis6 font-17">{{ desc }}</div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue"
import { ElRow, ElCol } from "element-plus"
const title = ref('Libra-OS')
const desc = ref(
  'A decentralized operating system that seamlessly integrates decentralized computing, storage, multi-chain access, and robust server-level protection for wallet private keys. This innovative solution redefines trust and user-centricity in the web landscape, offering a cutting-edge platform for secure and decentralized web interactions.'
)
</script>

<style lang="less" scoped>
.home-img-content {
  padding-bottom: 80px;
  margin-bottom: 80px;
  border-bottom: 1px solid rgba(29, 28, 33, 0.25);
}
.title {
  color: #231f20;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.content {
  height: 100%;
  padding: 0 0 0 60px;
  color: #231f20;
  @media (max-width: 768px) {
    padding: 0;
  }
  &-title {
    margin: 0 0 20px;
  }
  &-desc {
    line-height: 1.5;
  }
}
@media (max-width: 768px) {
  .home-img-content {
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
}
</style>
