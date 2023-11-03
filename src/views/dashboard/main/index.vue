<template>
  <section id="container-main" class="lang-max top-margin both-margin">
    <!-- <el-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" :show-text="false" stroke-linecap="square" /> -->
    <div class="module">
      <h1 class="font-20 padding-16">Your Account</h1>
      <div class="area flex-row padding-16">
        <p class="font-20">Connect your wallet to deploy!</p>
        <div class="connect flex-row">
          <svg class="width-24 small" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountBalanceWalletIcon">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          </svg>
          <span class="font-14">Connect Wallet</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  CircleCheck
} from '@element-plus/icons-vue'
import { ElButton, ElProgress } from "element-plus"
export default defineComponent({
  components: {
    CircleCheck, ElButton, ElProgress
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const claimShow = ref(false)

    function hardClose (dialog) {
      claimShow.value = dialog
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      claimShow,
      hardClose
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  align-items: flex-start;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .module {
    background-color: #101010;
    color: #eeeeee;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 4px;
    h1 {
      font-weight: 500;
      text-shadow: 0px 0px 9px #e77304;
      border-bottom: 1px solid rgb(66, 66, 66);
      color: rgb(238, 238, 238);
    }
    .area {
      justify-content: center;
      text-align: center;
      p {
        width: 100%;
        font-weight: 300;
      }
      .connect {
        flex-wrap: nowrap;
        padding: 6px 15px;
        margin: 0.16rem auto;
        text-transform: uppercase;
        border: 1.6px solid rgba(232, 90, 57, 0.5);
        border-radius: 4px;
        line-height: 1.5;
        cursor: pointer;
        &:hover {
          border-color: rgba(232, 90, 57, 1);
        }
        .width-24 {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
