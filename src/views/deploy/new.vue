<template>
  <section id="container-new" class="lang-max top-margin both-margin">
    <loading-over v-if="spaceLoad" :listLoad="spaceLoad"></loading-over>
    <div class="module">
      <div class="area flex-row flex-start nowrap">
        <div class="button width-icon" @click="rollback">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </div>
        <el-steps :active="active" align-center finish-status="success" class="padding-16">
          <el-step>
            <template #title>
              <span class="font-14 weight-4">Choose Template</span>
            </template>
          </el-step>
          <el-step>
            <template #title>
              <span class="font-14 weight-4">Create Deployment</span>
            </template>
          </el-step>
          <el-step>
            <template #title>
              <span class="font-14 weight-4">Choose providers</span>
            </template>
          </el-step>
        </el-steps>
      </div>
      <div class="active-1" v-if="active === 1">
        <div class="area">
          <h1 class="font-32 weight-6 mt-border">Deploy Lagrange Space</h1>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
              <!-- @click="active ='2'" -->
              <el-card shadow="hover">
                <div class="font-14 weight-4 flex-row">
                  Space URL
                </div>
                <div class="font-12 weight-4 desc">
                  <el-input v-model="urlValue" class="font-14" clearable placeholder="Space URL">
                    <template #append>
                      <div class="width-icon min-small flex-row" :class="{'is-disabled': !urlValue}" @click="spaceURLMehthod">
                        <Right />
                      </div>
                    </template>
                  </el-input>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="area">
          <h1 class="font-32 weight-6 mt-border">What do you want to deploy?</h1>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
              <!-- @click="active ='2'" -->
              <el-card class="is-disabled" shadow="hover">
                <div class="font-14 weight-4">Hello World</div>
                <div class="font-12 weight-4 desc">Simple next.js web application showing hello world.</div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="area flex-row center">
          <router-link :to="{ name: 'templates'}" class="root flex-row center button-shadow">
            <span class="hide">See all categories</span>
          </router-link>
        </div>
      </div>
      <div class="active-1" v-else-if="active === 2">
        <div class="builder">
          <div class="list">
            <div class="main-body">
              <div class="root padding-16">
                <div class="space-hard">
                  <el-row class="space_hardware" :gutter="30">
                    <el-col :md="24" :lg="24">
                      <h2 class="flex-row">
                        <span class="width-icon small flex-row">
                          <svg class="mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 12 12">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92865 7.42863H10.643C10.7377 7.42863 10.8285 7.39098 10.8955 7.32405C10.9625 7.25705 11.0001 7.16619 11.0001 7.07148C11.0001 6.97676 10.9625 6.88591 10.8955 6.81891C10.8285 6.75198 10.7377 6.71433 10.643 6.71433H9.92865V5.28575H10.643C10.7377 5.28575 10.8285 5.24812 10.8955 5.18114C10.9625 5.11417 11.0001 5.02333 11.0001 4.9286C11.0001 4.83388 10.9625 4.74304 10.8955 4.67607C10.8285 4.60909 10.7377 4.57146 10.643 4.57146H9.92865V2.78573C9.92865 2.59628 9.85336 2.4146 9.71943 2.28065C9.5855 2.1467 9.40378 2.07144 9.21435 2.07144H7.42862V1.35715C7.42862 1.26242 7.39098 1.17158 7.32405 1.10461C7.25705 1.03763 7.16619 1 7.07148 1C6.97676 1 6.88591 1.03763 6.81891 1.10461C6.75198 1.17158 6.71433 1.26242 6.71433 1.35715V2.07144H5.28575V1.35715C5.28575 1.26242 5.24812 1.17158 5.18114 1.10461C5.11417 1.03763 5.02333 1 4.9286 1C4.83388 1 4.74304 1.03763 4.67607 1.10461C4.60909 1.17158 4.57146 1.26242 4.57146 1.35715V2.07144H2.78573C2.59628 2.07144 2.4146 2.1467 2.28065 2.28065C2.14669 2.4146 2.07144 2.59628 2.07144 2.78573V4.57146H1.35714C1.26242 4.57146 1.17158 4.60909 1.10461 4.67607C1.03763 4.74304 1 4.83388 1 4.9286C1 5.02333 1.03763 5.11417 1.10461 5.18114C1.17158 5.24812 1.26242 5.28575 1.35714 5.28575H2.07144V6.71433H1.35714C1.26242 6.71433 1.17158 6.75198 1.10461 6.81891C1.03763 6.88591 1 6.97676 1 7.07148C1 7.16619 1.03763 7.25705 1.10461 7.32405C1.17158 7.39098 1.26242 7.42863 1.35714 7.42863H2.07144V9.21435C2.07144 9.40378 2.14669 9.5855 2.28065 9.71943C2.4146 9.85336 2.59628 9.92865 2.78573 9.92865H4.57146V10.6429C4.57146 10.7377 4.60909 10.8285 4.67607 10.8955C4.74304 10.9624 4.83388 11.0001 4.9286 11.0001C5.02333 11.0001 5.11417 10.9624 5.18114 10.8955C5.24812 10.8285 5.28575 10.7377 5.28575 10.6429V9.92865H6.71433V10.6429C6.71433 10.7377 6.75198 10.8285 6.81891 10.8955C6.88591 10.9624 6.97676 11.0001 7.07148 11.0001C7.16619 11.0001 7.25705 10.9624 7.32405 10.8955C7.39098 10.8285 7.42862 10.7377 7.42862 10.6429V9.92865H9.21435C9.40378 9.92865 9.5855 9.85336 9.71943 9.71943C9.85336 9.5855 9.92865 9.40378 9.92865 9.21435V7.42863Z"
                              fill="currentColor" fill-opacity="0.3"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44771 4 4 4.44771 4 5V7C4 7.55227 4.44771 8 5 8H7C7.55227 8 8 7.55227 8 7V5C8 4.44771 7.55227 4 7 4H5Z" fill-opacity="0.5"></path>
                          </svg>
                        </span>
                        <span>Space Hardware</span>
                        <span class="button width-icon small flex-row" @click="hardwareInit">
                          <RefreshRight />
                        </span>
                      </h2>
                      <p class="p-2 flex-row">Choose a hardware for your Space.</p>

                    </el-col>
                    <el-col :md="24" :lg="24" class="hardware-right">
                      <el-row :gutter="25" class="space_hardware_list" v-for="(item, index) in hardwareOptions" :key="index">
                        <el-divider content-position="left">{{ item.label }}</el-divider>
                        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="(ol, o) in item.list" :key="o">
                          <el-card class="box-card" :class="{'is-disabled':ol.hardware_status !== 'available'}" @click="sleepChange(ol)">
                            <h5>{{ ol.hardware_name }}</h5>
                            <div class="desc-text">{{ ol.hardware_description }}</div>
                            <div class="price">
                              <b v-if="ol.hardware_status.toLowerCase() === 'available'">{{ ol.hardware_price }} USDC per hour</b>
                              <b v-else>No available CP</b>
                            </div>
                          </el-card>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog class="sleep_body" v-model="sleepVisible" title="Confirm hardware update" :width="dialogWidth">
      <div style="position: relative;">
        <loading-over v-if="hardwareLoad" :listLoad="hardwareLoad"></loading-over>
        <div class="title-hard">The hardware of
          <span>{{ system.$commonFun.hiddAddress(metaAddress) }}/{{ spaceInfo.data.name }}</span> will be switched to:
        </div>
        <el-card class="box-card">
          <h5>{{ sleepSelect.hardware_name }}</h5>
          <div class="desc-text">{{ sleepSelect.hardware_description }}</div>
          <div class="price">
            <b>{{ sleepSelect.hardware_price }} USDC per hour</b>
          </div>
        </el-card>
        <div class="sleep_style">
          <div>
            <div class="title_tip flex-row">
              <div class="flex-row">
                Usage Time
              </div>
              <el-divider/>
            </div>
            <div class="time flex-row">
              <el-input-number v-model="ruleForm.usageTime" :min="24" :max="sleepSelect.hardware_type.toLowerCase() === 'gpu' ? 168:336" :precision="0" :step="1" controls-position="right" /> &nbsp; hours
            </div>
          </div>
          <div>
            <div class="title_tip flex-row">
              <div class="flex-row">
                Region
              </div>
              <el-divider/>
            </div>
            <div class="time flex-row">
              <el-select v-model="sleepSelect.regionValue" class="m-region" placeholder="Region">
                <el-option v-for="item in sleepSelect.regionOption" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
          </div>
          <div>
            <div class="title_tip flex-row">
              <div class="flex-row">
                Start time settings
                <el-popover placement="top-start" :width="200" trigger="hover" content="If the task isn't successfully taken by the CP within the specified time, we will consider it as failed and refund your tokens.">
                  <template #reference>
                    <div>
                      <svg class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <path d="M17 22v-8h-4v2h2v6h-3v2h8v-2h-3z" fill="currentColor"></path>
                        <path d="M16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z" fill="currentColor"></path>
                        <path d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </template>
                </el-popover>
              </div>
              <el-divider/>
            </div>
            <div class="time flex-row">
              Start after
              <el-select v-model="ruleForm.sleepTime" class="m-2" placeholder="Select" size="small">
                <el-option v-for="item in ruleForm.sleepTimeOption" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <p class="p-1 p-small" v-if="sleepSelect.hardware_type.toLowerCase() === 'gpu' && ruleForm.sleepTime < 20">
              For GPU tasks, we recommend that you choose a longer wait time to ensure that the CP can complete the task within your desired time frame</p>
          </div>
          <el-divider/>
          <p class="p-1">Make sure to follow
            <router-link to="">this guide</router-link>
            to ensure your Space takes advantage of the improved hardware.
          </p>
          <p class="p-1">You can switch to a different hardware at any time. Monitor your usage in real time from your
            <router-link to="">billing settings</router-link>
            .
          </p>
        </div>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button-group class="flex-row">
            <el-button @click="hardwareFun" :disabled="hardwareLoad">Confirm new hardware</el-button>
            <el-button @click="sleepVisible=false" :disabled="hardwareLoad">Cancel</el-button>
          </el-button-group>
        </span>
      </template>
    </el-dialog>
    <network-change v-if="networkC" :networkC="networkC" :netEnv="netEnv" @netChange="netChange"></network-change>
  </section>
</template>

<script>
import popOver from "@/components/popover"
import loadingOver from "@/components/loading"
import networkChange from '@/components/networkChange'
import SpacePaymentABI from '@/utils/abi/SpacePaymentV6.json'
import SpaceTokenABI from '@/utils/abi/SpacePaymentV6.json'
import tokenABI from '@/utils/abi/tokenLLL.json'
import tokenUSDCABI from '@/utils/abi/USDC.json'
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Right, RefreshRight } from '@element-plus/icons-vue'
import {  ElButton, ElButtonGroup, ElRow, ElCol, ElSelect, ElOption, ElOptionGroup, ElStep, ElSteps,
  ElCard, ElInput, ElInputNumber, ElDivider, ElDialog, ElPopover} from "element-plus"
export default defineComponent({
  components: {
    popOver, loadingOver, networkChange,
    Right, RefreshRight, ElButton, ElButtonGroup,
    ElRow, ElCol, ElSelect, ElOption, ElOptionGroup, ElStep, ElSteps, ElCard, ElInput, ElInputNumber, ElDivider, ElDialog, ElPopover
  },
  setup () {
    const store = useStore()
    const metaAddress = computed(() => (store.state.metaAddress))
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const dialogWidth = ref(document.body.clientWidth < 992 ? '90%' : '800px')
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const spaceLoad = ref(false)
    const urlValue = ref('')
    const spaceInfo = reactive({
      data: {}
    })
    const active = ref(1)
    const theme = reactive({
      value: '',
      options: [{
        value: 'Auto',
        label: 'Auto',
      }, {
        value: 'Dark',
        label: 'Dark 🌑',
      }, {
        value: 'Light',
        label: 'Light ☀️',
      }]
    })
    const builderData = ref([])
    const netEnv = ref([{
      name: 'OpSwan',
      id: 8598668088
    },
    {
      name: 'Mumbai Testnet',
      id: 80001
    }])
    const networkC = ref(false)
    const hardwareLoad = ref(false)
    const hardwareOptions = ref([])
    const sleepSelect = ref({})
    const sleepVisible = ref(false)
    const ruleForm = reactive({
      usageTime: 24,
      sleepTime: '1',
      sleepTimeOption: [
        {
          value: "1",
          label: "1 minute",
        },
        {
          value: '5',
          label: "5 minutes",
        }, {
          value: '10',
          label: "10 minutes",
        }, {
          value: '15',
          label: "15 minutes",
        }, {
          value: '20',
          label: "20 minutes",
        }, {
          value: '30',
          label: "30 minutes",
        }, {
          value: '40',
          label: "40 minutes",
        }, {
          value: '50',
          label: "50 minutes",
        }, {
          value: '60',
          label: "60 minutes",
        }, {
          value: '70',
          label: "70 minutes",
        }, {
          value: '80',
          label: "80 minutes",
        }, {
          value: '90',
          label: "90 minutes",
        }, {
          value: '100',
          label: "100 minutes",
        }, {
          value: '110',
          label: "110 minutes",
        }, {
          value: '120',
          label: "120 minutes",
        }
      ],
      pauseSpace: false,
      displayPrice: false
    })
    let tokenAddress = process.env.VUE_APP_MUMBAI_USDC_ADDRESS
    let tokenContract = new system.$commonFun.web3Init.eth.Contract(tokenABI, tokenAddress);
    let paymentContractAddress = process.env.VUE_APP_HARDWARE_ADDRESS
    let paymentContract = new system.$commonFun.web3Init.eth.Contract(SpacePaymentABI, paymentContractAddress)

    async function rollback () {
      if (active.value === 1) router.push({ name: 'deploy' })
      else if (active.value === 2) active.value = 1
      else if (active.value === 3) active.value = 2
    }
    async function spaceURLMehthod () {
      spaceLoad.value = true
      const params = {
        "url": urlValue.value
      }
      const spaceRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_LOGINAPI}/spaces/info`, 'post', params)
      if (spaceRes && String(spaceRes.code) === '0') {
        spaceInfo.data = spaceRes.data || {}
        active.value = 2
        hardwareInit()
      } else spaceLoad.value = false
    }
    async function hardwareInit (params) {
      spaceLoad.value = true
      const machinesRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}cp/machines`, 'get')
      if (machinesRes && machinesRes.status === 'success') {
        hardwareOptions.value = await system.$commonFun.listArray(machinesRes.data.hardware)
      }
      spaceLoad.value = false
    }
    function handleHard (val, refresh, net) {
      if (net) {
        networkC.value = true
      } else if (refresh) {
        context.emit('handleValue', true, 'setting')
        // requestInitData()
      }
    }
    async function netChange (dialog, rows) {
      networkC.value = dialog
      if (rows) system.$commonFun.walletChain(rows)
    }
    async function sleepChange (row) {
      if (row.hardware_status.toLowerCase() !== 'available') return false
      const net = await networkEstimate()
      if (!net) {
        networkC.value = true
        return
      }
      ruleForm.usageTime = 24
      sleepSelect.value = row
      sleepSelect.value.regionOption = await system.$commonFun.regionList(row.region)
      sleepSelect.value.regionValue = row.region && row.region[0] ? "Global" : ''
      ruleForm.sleepTime = sleepSelect.value.hardware_type.toLowerCase() === 'gpu' ? '20' : '1'
      sleepVisible.value = true
    }

    async function networkEstimate () {
      const getID = await system.$commonFun.web3Init.eth.net.getId()
      const list = [80001, 8598668088]
      const getPast = await list.some(t => t === getID)
      return getPast
    }

    async function hardwareFun () {
      const net = await networkEstimate()
      if (!net) return
      hardwareLoad.value = true
      try {
        const hardwareInfo = await paymentContract.methods.hardwareInfo(sleepSelect.value.hardware_id).call()
        const pricePerHour = system.$commonFun.web3Init.utils.fromWei(String(hardwareInfo.pricePerHour), 'mwei')
        const approveAmount = (pricePerHour * ruleForm.usageTime).toFixed(6) // usdc is 6 decimal, ensure the amount will not be more than 6

        let approveGasLimit = await tokenContract.methods
          .approve(paymentContractAddress, system.$commonFun.web3Init.utils.toWei(String(approveAmount), 'mwei'))
          .estimateGas({ from: metaAddress.value })

        const approve_tx = await tokenContract.methods
          .approve(paymentContractAddress, system.$commonFun.web3Init.utils.toWei(String(approveAmount), 'mwei'))
          .send({
            from: metaAddress.value, gasLimit: approveGasLimit
          })

        let payMethod = paymentContract.methods
          .lockRevenue(spaceInfo.data.uuid, sleepSelect.value.hardware_id, ruleForm.usageTime)

        let gasLimit = await payMethod.estimateGas({ from: metaAddress.value })
        console.log('gasLimit:', gasLimit)
        const tx = await payMethod.send({ from: metaAddress.value, gasLimit: gasLimit })
          .on('transactionHash', async (transactionHash) => {
            console.log('transactionHash:', transactionHash)
            await hardwareHash(transactionHash, approveAmount)
            closePart()
          })
          .on('error', () => hardwareLoad.value = false)
      } catch (err) {
        console.log('err', err)
        if (err && err.message) system.$commonFun.messageTip('error', err.message)
        closePart()
      }
    }

    function closePart () {
      hardwareLoad.value = false
      sleepVisible.value = false
    }
    async function hardwareHash (tx_hash, approveAmount) {
      const net = await networkEstimate()
      if (!net) return
      const getID = await system.$commonFun.web3Init.eth.net.getId()
      const params = {
        "space_name": spaceInfo.data.name,
        "paid": approveAmount,
        "duration": ruleForm.usageTime * 3600,
        "tx_hash": tx_hash,
        "chain_id": getID.toString(),
        "cfg_name": sleepSelect.value.hardware_name,
        "region": sleepSelect.value.regionValue,
        "start_in": ruleForm.sleepTime * 60,
        "space_uuid": spaceInfo.data.uuid
      }

      const deployRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_LOGINAPI}/deployments`, 'post', params)
      if (deployRes && String(deployRes.code) === '0') router.push({ name: 'deploy' })
    }

    async function paymentEnv () {
      if (getnetID !== 80001) {
        tokenAddress = process.env.VUE_APP_OPSWAN_USDC_ADDRESS
        tokenContract = new system.$commonFun.web3Init.eth.Contract(tokenUSDCABI, tokenAddress);
        paymentContractAddress = process.env.VUE_APP_OPSWAN_ADDRESS
        paymentContract = new system.$commonFun.web3Init.eth.Contract(SpaceTokenABI, paymentContractAddress)
      }
    }

    let getnetID = NaN
    onMounted(async () => {
      getnetID = await system.$commonFun.web3Init.eth.net.getId()
      paymentEnv()
      active.value = 1
    })
    return {
      system, metaAddress,
      bodyWidth, dialogWidth, hardwareLoad,
      spaceLoad,
      urlValue,
      active,
      theme,
      rollback, spaceInfo,
      builderData, networkC, netEnv, hardwareOptions, sleepSelect, sleepVisible, ruleForm,
      spaceURLMehthod, handleHard, netChange, sleepChange, hardwareFun, hardwareInit
    }
  }
})
</script>

<style lang="less" scoped>
#container-new {
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  :deep(.module) {
    margin: 0 auto 15px;
    .area {
      height: auto;
      transition: all 0.8s;
      .el-steps {
        width: 100%;
        .el-step__head {
          &.is-success {
            color: @theme-color;
          }
          .el-step__line {
            .el-step__line-inner {
              border-color: @theme-color;
            }
          }
          .el-step__icon {
            background-color: @bg-color;
            font-size: 18px;
            border: 0;
            color: inherit;
            div.el-step__icon-inner {
              color: transparent;
              width: 8px;
              height: 8px;
              background-color: @dot-fusco-color;
              border-radius: 8px;
            }
          }
        }
        .el-step__main {
          .el-step__title {
            color: @primary-color-opacity;
            line-height: 1.3;
            &.is-success {
              color: @theme-color;
            }
          }
        }
      }
      .el-row {
        .el-col {
          .el-card {
            color: @primary-color;
            border: 0;
            // cursor: pointer;
            .desc {
              margin: 20px 0 0;
              line-height: 1.8;
              color: @primary-color-opacity;
              .el-input {
                cursor: pointer;
                .el-input-group__append {
                  padding: 0;
                  .width-icon {
                    height: 100%;
                    padding: 0 6px;
                  }
                }
              }
            }
          }
        }
      }
      .root {
        padding: 8px 22px;
        margin: 16px;
        background-color: @theme-color;
        font-size: 15px;
        color: @white-color;
        border-radius: 5px;
        text-transform: uppercase;
        &:hover {
          background-color: @theme-color-opacity1;
        }
        &.is-disabled {
          cursor: no-drop;
          background-color: @primary-color-opacity1;
        }
        .el-icon {
          margin: 0 0 0 16px;
          color: @white-color;
          fill: @white-color;
          svg,
          path {
            opacity: 1;
          }
        }
        span {
          letter-spacing: 0.5px;
        }
      }
    }
    .builder {
      .list {
        width: 100%;
        margin: 16px 0;
        background-color: @white-color;
        border-radius: 8px;
        box-sizing: border-box;
        .top {
          .top-left {
            width: 100%;
            position: relative;
            margin: 0;
            .m-16 {
              margin-right: 8px;
            }
            small {
              position: absolute;
              top: -6px;
              left: 10px;
              padding: 0 4px;
              background-color: @white-color;
              color: @primary-color-opacity;
              z-index: 9;
              line-height: 1;
            }
            .el-input {
              width: 100%;
              .el-input__wrapper {
                height: 40px;
                padding: 0 32px 0 14px;
                text-align: left;
                color: @primary-color;
                box-shadow: none;
                border: 1px solid @primary-color-opacity1;
                .el-input__inner {
                  color: inherit;
                }
              }
            }
          }
          .top-right {
            line-height: 25px;
            color: @grey-color;
            .flex-row {
              .flex-row {
                margin: 2px 8px;
                white-space: nowrap;
                span {
                  margin: 0 8px;
                  color: @primary-color;
                }
              }
            }
            .width-icon {
              fill: @grey-color;
              transition: all 0.1s;
              &.transform {
                transform: rotate(180deg);
              }
              svg,
              path {
                fill: inherit;
              }
            }
          }
        }
        .main-body {
          max-height: unset;
          border-top: 1px solid @dot-color;
          animation: showing 0.1s linear 1 forwards;
          transition: all 0.3s;
          overflow: hidden;
          &.hide {
            animation: hiddening 0.1s linear 1 forwards;
          }
          .el-row {
            .el-col {
              .piece {
                margin: 0 0 16px;
                .center {
                  position: relative;
                  width: 100%;
                  margin: 0 8px 0 0;
                  border: 1px solid @primary-color-opacity1;
                  border-radius: 4px;
                  small {
                    position: absolute;
                    top: -6px;
                    left: 10px;
                    padding: 0 4px;
                    background-color: @white-color;
                    color: @primary-color-opacity;
                    z-index: 9;
                    line-height: 1;
                  }
                }
                .el-input-number {
                  width: 100%;
                  .el-input__inner {
                    text-align: left;
                  }
                  .el-input-number__increase,
                  .el-input-number__decrease {
                    height: 20px;
                    background-color: transparent;
                    box-shadow: none;
                    border: 0;
                  }
                }
                .el-input {
                  .el-input__wrapper {
                    height: 40px;
                    padding: 0 14px;
                    box-shadow: none;
                  }
                  .el-input-group__prepend,
                  .el-input-group__append {
                    padding: 0 14px;
                    background-color: transparent;
                    box-shadow: none;
                    &.el-input-group__prepend {
                      padding-right: 0;
                    }
                    &.el-input-group__append {
                      padding-left: 0;
                    }
                  }
                }
              }
              .background-main {
                padding: 8px 16px;
                margin: 0 0 16px;
                background-color: @bg-color;
                border-radius: 4px;
                .el-divider--horizontal {
                  margin: 8px 0;
                }
                h3 {
                  span {
                    padding: 2px 0 0 8px;
                    line-height: 24px;
                  }
                  .el-select {
                    width: auto;
                    max-width: 85px;
                    margin: 0 0 0 16px;
                  }
                }
                h4 {
                  padding: 0 0 16px;
                  text-transform: capitalize;
                  span {
                    color: @theme-color;
                    line-height: 20px;
                    cursor: pointer;
                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
                h6 {
                  color: @grey-color;
                  b {
                    color: @primary-color;
                  }
                }
                .slider-demo-block {
                  margin-top: 8px;
                }
                .el-input-number {
                  width: auto;
                  .el-input-number__increase,
                  .el-input-number__decrease {
                    background-color: transparent;
                    border: 0;
                  }
                  .el-input {
                    font-size: inherit;
                    color: inherit;
                    .el-input__wrapper {
                      width: 100px;
                      height: 40px;
                      padding: 0 32px 0 14px;
                      background-color: transparent;
                      box-shadow: none;
                      border: 1px solid @primary-color-opacity1;
                      box-sizing: border-box;
                      .el-input__inner {
                        text-align: left;
                      }
                    }
                  }
                }
                .center {
                  position: relative;
                  small {
                    position: absolute;
                    top: 8px;
                    left: 6px;
                    max-width: calc(100% - 20px);
                    padding: 0 4px;
                    background-color: @bg-color;
                    color: @primary-color-opacity;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    z-index: 9;
                  }
                }
                .el-select {
                  width: 100%;
                  margin: 16px 0 0;
                  .el-input {
                    font-size: inherit;
                    .el-input__wrapper {
                      height: 40px;
                      background-color: transparent;
                      box-shadow: none;
                      border: 1px solid @primary-color-opacity1;
                      box-sizing: border-box;
                      .el-input__inner {
                        color: @primary-color;
                      }
                    }
                  }
                }
                .el-checkbox {
                  color: inherit;
                  .el-checkbox__input {
                    padding: 0 16px 0 0;
                    background-color: transparent;
                    border-color: @primary-color-opacity;
                  }
                  .el-checkbox__input.is-checked .el-checkbox__inner {
                    background-color: @theme-color;
                    border-color: @theme-color;
                  }
                  .el-checkbox__label {
                    color: inherit;
                  }
                }
              }
            }
          }
        }
      }
    }
    .space-hard {
      width: 100%;
      margin: 0.15rem 0;
      font-family: "Helvetica-light";
      border: 1px solid #e4e4e4;
      border-radius: 0.1rem;
      color: #606060;
      text-align: left;
      word-break: break-word;
      overflow: hidden;

      .space_hardware {
        position: relative;
        padding: 0.3rem 0.2rem;
        color: #000;
        line-height: 1.5;

        .el-col {
          position: relative;
        }

        h2 {
          margin: 0 0 0.12rem;
          font-size: 20px;
          font-weight: 600;
          color: #000;
          @media screen and (max-width: 1600px) {
            font-size: 18px;
          }
          @media screen and (max-width: 1440px) {
            font-size: 17px;
          }
          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
          span {
            margin: 0 6px 0 0;
          }
        }

        .p-2 {
          align-items: flex-start;
          margin: 0 0 0.08rem;
          font-size: 17px;
          @media screen and (max-width: 1600px) {
            font-size: 15px;
          }
          @media screen and (max-width: 1440px) {
            font-size: 14px;
          }
          @media screen and (max-width: 768px) {
            font-size: 13px;
          }

          strong {
            min-width: 90px;
            margin-right: 0.05rem;
            text-transform: capitalize;
          }
        }

        .p-4 {
          margin: 0 0 0.08rem;
          font-size: 15px;
          color: rgba(107, 114, 128, 1);
          @media screen and (max-width: 1600px) {
            font-size: 13px;
          }
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }

          a {
            color: inherit;
            text-decoration: underline;
          }

          span {
            padding: 0.02rem 0.05rem;
            margin: 0 0 0 0.05rem;
            background: linear-gradient(
              45.4deg,
              rgba(247, 0, 89, 0.1),
              rgba(82, 255, 0, 0.1) 22.65%,
              rgba(20, 0, 255, 0.075) 46.82%,
              rgba(255, 0, 0, 0.1) 67.96%,
              rgba(255, 230, 0, 0.1) 96.66%
            );
            border-radius: 0.05rem;
            white-space: nowrap;
            cursor: pointer;
          }
        }

        .fork {
          position: absolute;
          bottom: 0;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .hardware-right {
          max-height: 430px;
          overflow-y: scroll;
        }

        .hardware-left {
          padding-bottom: 0.5rem;
        }

        .sleep_style {
          margin: 0 0 0.28rem;

          .title_tip {
            white-space: nowrap;
            font-size: 18px;
            font-weight: 600;
            @media screen and (max-width: 1600px) {
              font-size: 16px;
            }
            @media screen and (max-width: 1440px) {
              font-size: 15px;
            }
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }

            p {
              flex-wrap: inherit;
            }

            svg {
              width: 12px;
              height: 12px;
              margin: 0 0.08rem;
            }

            .el-divider {
              margin: auto;
            }

            .el-switch {
              margin: 0 0 0 0.08rem;

              .el-switch__core {
                width: 30px !important;
                height: 16.05px;

                .el-switch__action {
                  width: 12px;
                  height: 12px;
                }
              }

              &.is-checked {
                .el-switch__core {
                  .el-switch__action {
                    margin-left: -13px;
                  }
                }
              }
            }
          }

          .pause_margin {
            margin: 0.2rem 0 0.3rem;
          }

          .time {
            margin: 0.15rem 0;
            white-space: nowrap;
            font-size: 17px;
            @media screen and (max-width: 1600px) {
              font-size: 15px;
            }
            @media screen and (max-width: 1440px) {
              font-size: 14px;
            }
            @media screen and (max-width: 768px) {
              font-size: 13px;
            }

            .el-select {
              margin: 0 0.08rem;

              .el-input {
                .el-input__inner {
                  max-width: 120px;
                }

                &.is-disabled {
                  .el-input__inner {
                    background-color: transparent;
                    opacity: 0.8;
                  }
                }
              }
            }

            .m-region {
              margin: 0;
            }
          }
        }

        .price_switch {
          position: absolute;
          top: 0.2rem;
          right: 0.6rem;
          font-size: 14px;
          color: #333;
          z-index: 9;
          @media screen and (max-width: 1600px) {
            font-size: 13px;
          }
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }
          @media screen and (max-width: 1200px) {
            position: relative;
            right: 0;
            left: 0;
          }

          .el-switch {
            margin: 0 0 0 0.08rem;

            .el-switch__core {
              width: 25px !important;
              height: 14.05px;

              .el-switch__action {
                width: 10px;
                height: 10px;
              }
            }

            * {
              font-size: 14px;
              color: #333;
              @media screen and (max-width: 1600px) {
                font-size: 13px;
              }
              @media screen and (max-width: 768px) {
                font-size: 12px;
              }
            }

            .el-switch__label.is-active {
              color: inherit;
            }

            &.is-checked {
              .el-switch__core {
                .el-switch__action {
                  margin-left: -11px;
                }
              }
            }
          }
        }

        .space_hardware_list {
          @media screen and (max-width: 1200px) {
            padding: 0;
          }

          .el-card {
            position: relative;
            padding: 0.1rem;
            margin: 0.12rem 0;
            border-radius: 0.1rem;
            transition: all 0.3s;
            cursor: pointer;

            * {
              cursor: inherit;
            }

            &.active {
              background: linear-gradient(to bottom right, #eff6ff, #fff);
              // cursor: no-drop;
              &:hover {
                box-shadow: none;
              }
            }

            &:hover {
              box-shadow: inset 0 0 0.2rem rgba(0, 0, 0, 0.05);
            }

            &.is-disabled {
              background: linear-gradient(to bottom right, #eeeeee, #f2f2f2);
              cursor: no-drop;

              &:hover {
                box-shadow: none;
              }
            }

            .el-card__body {
              padding: 0;

              .abo {
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                width: 15px;
                height: 15px;
                z-index: 9;

                svg {
                  width: 100%;
                  height: 100%;
                  animation: spin 1.5s linear infinite;
                  @keyframes spin {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                  @-webkit-keyframes spin /* Safari 与 Chrome */ {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                }
              }

              h5 {
                padding: 0.05rem 0;
                font-size: 16px;
                @media screen and (max-width: 1600px) {
                  font-size: 14px;
                }
                @media screen and (max-width: 768px) {
                  font-size: 13px;
                }
              }

              .desc-text {
                height: 30px;
                padding: 0;
                font-size: 14px;
                color: #6b7280;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 15px;
                @media screen and (max-width: 1600px) {
                  font-size: 12px;
                }
                @media screen and (max-width: 768px) {
                  font-size: 11px;
                }
              }

              .price {
                margin-top: 0.05rem;

                b {
                  padding: 0.03rem 0.08rem;
                  background: rgba(243, 244, 246, 1);
                  border-radius: 0.05rem;
                  font-size: 14px;
                  font-weight: normal;
                  color: #333;
                  @media screen and (max-width: 1600px) {
                    font-size: 12px;
                  }
                  @media screen and (max-width: 768px) {
                    font-size: 11px;
                  }
                }
              }
            }
          }

          // &:nth-child(2) {
          //   margin-top: -0.25rem;
          //   @media screen and (max-width: 1200px) {
          //     margin-top: 0.2rem;
          //   }
          // }
        }
      }

      .fork-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        justify-content: flex-end;
        padding: 0 0.2rem;

        .el-button {
          span {
            cursor: inherit;
          }

          &:hover {
            text-decoration: underline;
          }
        }
      }

      &.space-hard-fork {
        margin: 0;

        .space_hardware {
          padding: 0.1rem 0.2rem 0.3rem;

          .hardware-right {
            border: 0;
          }
        }
      }
    }
  }
  :deep(.net_body) {
    width: 570px;
    margin: auto;
    border-radius: 0.23rem;
    text-align: left;
    color: #000;
    word-break: break-word;
    @media screen and (max-width: 600px) {
      width: 94%;
    }
    .el-dialog__header {
      padding: 0.25rem 0.6rem 0.1rem;
      font-size: 0.2rem;
      .el-dialog__headerbtn {
        right: 0.3rem;
        top: 0.28rem;
        font-size: 0.2rem;
        font-weight: 600;
        color: #000;
        cursor: pointer;
        i,
        svg,
        path {
          color: inherit;
          cursor: inherit;
        }
      }
    }

    .el-dialog__body {
      padding: 0 0 0.15rem;
    }

    .el-dialog__footer {
      padding: 0 0.6rem 0.5rem;
      text-align: left;
      .dialog-footer {
        justify-content: center;
      }
      .el-button {
        width: 60%;
        max-width: 204px;
        height: auto;
        background: linear-gradient(180deg, #fefefe, #f0f0f0);
        font-family: inherit;
        font-size: 16px;
        line-height: 1;
        color: #000;
        border-radius: 0.07rem;
        @media screen and (max-width: 1600px) {
          font-size: 14px;
        }
        &:hover {
          opacity: 0.9;
          span {
            cursor: inherit;
          }
        }
        &.is-disabled {
          opacity: 0.5;
          border-color: #e3e6eb;
        }
      }
    }
  }
  :deep(.sleep_body) {
    border-radius: 0.1rem;
    font-family: "Helvetica-light";
    text-align: left;

    .el-dialog__body {
      padding: 0.25rem 0.25rem 0.15rem;
      color: #000;

      .title-hard {
        font-size: 18px;
        @media screen and (max-width: 1600px) {
          font-size: 16px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }

        span {
          color: rgba(107, 114, 128, 1);
        }
      }

      .el-card {
        position: relative;
        padding: 0.15rem;
        margin-top: 0.25rem;
        border-radius: 0.1rem;
        transition: all 0.3s;

        * {
          cursor: pointer;
        }

        &.active {
          background: linear-gradient(to bottom right, #eff6ff, #fff);
        }

        // &:hover {
        //   box-shadow: inset 0 0 0.2rem rgba(0, 0, 0, 0.05);
        // }
        .el-card__body {
          padding: 0;

          .abo {
            position: absolute;
            top: 0.1rem;
            right: 0.1rem;
            width: 15px;
            height: 15px;
            z-index: 9;

            svg {
              width: 100%;
              height: 100%;
              animation: spin 1.5s linear infinite;
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              @-webkit-keyframes spin /* Safari 与 Chrome */ {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            }
          }

          h5 {
            padding: 0.05rem 0;
            font-size: 16px;
            @media screen and (max-width: 1600px) {
              font-size: 14px;
            }
            @media screen and (max-width: 768px) {
              font-size: 13px;
            }
          }

          .desc-text {
            height: 30px;
            padding: 0;
            font-size: 14px;
            color: #6b7280;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 15px;
            @media screen and (max-width: 1600px) {
              font-size: 12px;
            }
            @media screen and (max-width: 768px) {
              font-size: 11px;
            }
          }

          .price {
            margin-top: 0.05rem;

            b {
              padding: 0.03rem 0.08rem;
              background: rgba(243, 244, 246, 1);
              border-radius: 0.05rem;
              font-size: 14px;
              font-weight: normal;
              color: #333;
              @media screen and (max-width: 1600px) {
                font-size: 12px;
              }
              @media screen and (max-width: 768px) {
                font-size: 11px;
              }
            }
          }
        }
      }

      .sleep_style {
        margin: 0.28rem 0 0;

        .title_tip {
          white-space: nowrap;
          font-size: 18px;
          font-weight: 600;
          @media screen and (max-width: 1600px) {
            font-size: 16px;
          }
          @media screen and (max-width: 1440px) {
            font-size: 15px;
          }
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }

          p {
            flex-wrap: inherit;
          }

          svg {
            width: 12px;
            height: 12px;
            margin: 0 0.08rem;
          }

          .el-switch {
            margin: 0 0 0 0.08rem;

            .el-switch__core {
              width: 30px !important;
              height: 16.05px;

              .el-switch__action {
                width: 12px;
                height: 12px;
              }
            }

            &.is-checked {
              .el-switch__core {
                .el-switch__action {
                  margin-left: -13px;
                }
              }
            }
          }
        }

        .pause_margin {
          margin: 0.2rem 0 0.3rem;
        }

        .time {
          margin: 0.15rem 0;
          white-space: nowrap;
          font-size: 17px;
          @media screen and (max-width: 1600px) {
            font-size: 15px;
          }
          @media screen and (max-width: 1440px) {
            font-size: 14px;
          }
          @media screen and (max-width: 768px) {
            font-size: 13px;
          }

          .el-select {
            margin: 0 0.08rem;

            .el-input {
              .el-input__inner {
                max-width: 120px;
              }

              &.is-disabled {
                .el-input__inner {
                  background-color: transparent;
                  opacity: 0.8;
                }
              }
            }

            &.m-region {
              margin: 0;

              .el-input {
                .el-input__inner {
                  max-width: 155px;
                }
              }
            }
          }
        }
      }

      .el-divider {
        margin: 0;
      }

      .p-1 {
        margin: 0.15rem 0;
        color: rgba(107, 114, 128, 1);
        font-size: 17px;
        word-break: break-word;
        @media screen and (max-width: 1600px) {
          font-size: 15px;
        }
        @media screen and (max-width: 1440px) {
          font-size: 14px;
        }
        @media screen and (max-width: 768px) {
          font-size: 13px;
        }

        a {
          text-decoration: underline;
          color: inherit;
        }
      }

      .p-small {
        font-size: 15px;
        color: #f85149;
        @media screen and (max-width: 1600px) {
          font-size: 13px;
        }
        @media screen and (max-width: 1440px) {
          font-size: 12px;
        }
        @media screen and (max-width: 768px) {
          font-size: 11px;
        }
      }
    }

    .el-dialog__footer {
      padding: 0 0.25rem 0.25rem;
      text-align: left;

      .dialog-footer {
        .el-button-group {
          margin: 0;

          .el-button {
            margin: 0 0.15rem 0 0;
            background: linear-gradient(180deg, #fefefe, #f0f0f0);
            font-family: inherit;
            font-size: 18px;
            @media screen and (max-width: 1600px) {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>