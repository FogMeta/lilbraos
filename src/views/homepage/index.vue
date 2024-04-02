<template>
    <div class="header">
        <div class="header-title">{{ title }}</div>
        <div class="header-desc">{{ desc }}</div>
        <div class="header-action flex-row center">
            <el-button>
                <el-text type="primary">Started Now</el-text>
            </el-button>
            <el-button>
                <el-text type="primary">Learn More</el-text>
            </el-button>
        </div>
    </div>
    <div class="body">
        <div class="body-title">

        </div>
    </div>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
    Edit
} from '@element-plus/icons-vue'
import { ElButton, ElText } from "element-plus"

export default defineComponent({
    components: {
        ElButton, ElText
    },
    setup () {
        const title = ref('Decentralized Operating System')
        const desc = ref('A decentralized operating system that seamlessly integrates decentralized computing, storage, multi-chain access, and robust server-level protection for wallet private keys.')
        const bodyTitle1 = ref('Blockchain-as-a-Service (BaaS)');
        const tabs = ref([
            { label: 'Rapid Deployment', value: 1 },
            { label: 'Monitoring Services', value: 2 },
            { label: 'App Access', value: 3 },
            { label: 'High Stability', value: 4 },
            { label: 'Simple to Use', value: 5 },
        ])
        onMounted(() => { })
        return {
            title,
            desc,
        }
    }
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  color: #fff;
  background-color: #48b0ff;
  padding: 170px 0 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-title {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }
  &-desc {
    margin-top: 60px;
    max-width: 995px;
    font-size: 22px;
    text-align: center;
  }
  &-action {
    margin-top: 60px;
    .btn {
      margin: 0 20px;
    }
  }
}
.body {
  margin-top: 80px;
}
</style>
