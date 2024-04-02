<template>
  <div class="our-strength">
    <div class="title font-36 weight-6">{{ title }}</div>
    <el-row :gutter="28">
      <el-col :md="6" :sm="12" :xs="24" v-for="item in list" :key="item.title">
        <el-card class="item">
          <div class="flex flex-center">
            <img :src="item.icon" class="item-icon" />
          </div>
          <div class="item-title ellipsis2 font-17">{{ item.title }}</div>
          <div class="item-desc font-16" v-for="(it, i) in item.desc" :key="i">{{ it }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { ElRow, ElCol, ElCard } from "element-plus"
import Icon1 from '@/assets/images/home/icon-01.png'
import Icon2 from '@/assets/images/home/icon-02.png'
import Icon3 from '@/assets/images/home/icon-03.png'
import Icon4 from '@/assets/images/home/icon-04.png'

const title = ref('Our Strength')
const list = ref([
  {
    icon: Icon1,
    title: 'Security and Confidentiality',
    desc: [
      'Encryption of data in transit and at rest',
      'Strictly limit transactions and access to ledgers to authorized users',
      'Ensure that the network is tamper-proof and that digital signatures are valid'
    ]
  },
  {
    icon: Icon2,
    title: 'Scalability',
    desc: [
      'Provide ultra-low transaction latency',
      'Created a large blockchain network',
      'Handle growing transaction volumes'
    ]
  },
  {
    icon: Icon3,
    title: 'Recoverability',
    desc: [
      'High services availability without downtime',
      'Quick recovery if some components fail',
      'Multiple layers of protection against data corruption or loss'
    ]
  },
  {
    icon: Icon4,
    title: 'Design, Develop and Deploy Services',
    desc: [
      'Provide the services to enhance capabilities with engineering or resources',
      'Design consulting and product development',
      'Support package integration with certification assistance'
    ]
  }
])
</script>

<style lang="less" scoped>
.title {
  color: #231f20;
  margin-bottom: 55px;
  text-align: center;
}
.our-strength {
  .el-col {
    margin-bottom: 20px;
    .item {
      height: 100%;
      margin-bottom: 20px;
      border-radius: 8px;
      .el-card__body {
        padding: 20px 40px;
      }
      &-icon {
        width: 70px;
        height: 70px;
      }
      &-title {
        min-height: 47px;
        text-align: center;
        color: #000;
        font-weight: 500;
        margin-top: 10px;
        line-height: 1.3;
      }
      &-desc {
        color: #606060;
        margin-top: 10px;
        line-height: 25px;
      }
    }
  }
}
</style>
