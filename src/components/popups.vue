<template>
  <div class="pop-up flex-row center" v-show="props.connetShow">
    <div class="connect-area padding-24">
      <loading-over v-if="spookyLoad" :listLoad="spookyLoad"></loading-over>
      <div class="close flex-row" @click="closeHandle">
        <el-icon>
          <Close />
        </el-icon>
      </div>
      <div class="connect-wallet" v-if="active === 'connect'">
        <div class="title font-20">Connect Wallet</div>
        <div class="metamask weight-5 padding-16 flex-row" @click="isLogin">
          <img :src="metaLogo" alt="" class="image" />
          <div class="font-20">MetaMask</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, onActivated, onDeactivated, watch, ref, reactive, getCurrentInstance, toRefs, nextTick } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  Close
} from '@element-plus/icons-vue'
import { ElIcon } from "element-plus"
export default defineComponent({
  name: 'Popup',
  components: {
    loadingOver, Close, ElIcon
  },
  props: {
    connetShow: { type: Boolean, default: false }
  },
  setup (props, context) {
    const store = useStore()
    const accessToken = computed(() => (store.state.accessToken))
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const metaLogo = require("@/assets/images/metamask.png")
    const active = ref('connect')
    const spookyLoad = ref(false)
    const hash = ref('')
    const info = reactive({
      address: '',
      balance: '',
      unit: '',
      network: ''
    })

    function closeHandle () {
      spookyLoad.value = false
      context.emit('hardClose', false)
    }

    let lastTime = 0
    async function throttle () {
      // Prevent multiple signatures
      let now = new Date().valueOf();
      if (lastTime > 0 && (now - lastTime) <= 2000) return false
      lastTime = now
      return true
    }

    async function isLogin () {
      const time = await throttle()
      if (!time) return false
      system.$commonFun.Init(async (addr, chain) => {
        spookyLoad.value = true
        info.address = addr
        system.$commonFun.web3Init.eth.getBalance(addr).then((balance) => {
          // console.log(balance)
          const myBalance = balance
          const balanceAll = system.$commonFun.web3Init.utils.fromWei(myBalance, 'ether')
          info.balance = Number(balanceAll).toFixed(4)
        })
        const chainId = await system.$commonFun.web3Init.eth.net.getId()
        const { unit, name } = await system.$commonFun.getUnit(chainId)
        info.unit = unit
        info.network = name || chainId
        await system.$commonFun.timeout(500)
        if (accessToken.value) closeHandle()
        else await signIn()
      })
    }

    async function signIn () {
      const chainId = await system.$commonFun.providerInit.request({ method: 'eth_chainId' })
      const [lStatus, signErr] = await system.$commonFun.login()
      if (lStatus) closeHandle()
      else if (signErr !== '4001') signSetIn()
      else spookyLoad.value = false
      return false
    }

    async function signSetIn (t) {
      let time = t || 0
      let timer = null
      timer = setInterval(() => {
        if (time > 3) {
          clearInterval(timer)
          if (accessToken.value) closeHandle()
          else signIn()
        } else time += 1
      }, 1000)
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      props,
      metaLogo,
      active,
      hash,
      spookyLoad,
      info,
      closeHandle, isLogin
    }
  }
})
</script>

<style lang="less" scoped>
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
  color: @primary-color;
  line-height: 1;
  transition: all 0.2s;
  .connect-area {
    position: relative;
    min-width: 30%;
    color: @primary-color;
    border-radius: 4px;
    background-color: @white-color;
    @media screen and (max-width: 1260px) {
      width: 35%;
    }
    @media screen and (max-width: 768px) {
      width: 50%;
      border-radius: 10px;
    }
    @media screen and (max-width: 600px) {
      width: 70%;
    }
    @media screen and (max-width: 540px) {
      width: 80%;
    }
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 25px;
      color: @primary-color;
      cursor: pointer;
      z-index: 100;
      padding: 4px;
      cursor: pointer;
      border-radius: 100px;
      &:hover {
        background-color: rgba(223, 223, 223, 0.3);
      }
    }
    .connect-wallet {
      .title {
        padding: 0 0 24px;
      }
      .metamask {
        //   width: 490px;
        background-color: rgba(223, 223, 223, 0.6);
        border-radius: 0;
        cursor: pointer;
        &:hover {
          background-color: rgba(223, 223, 223, 0.8);
        }
        .image {
          width: 30px;
          height: auto;
          margin: -2px 20px 0 0;
        }
      }
    }
  }
}
</style>
