import store from '../store'
import axios from 'axios'
import {
  ElMessage,
  ElNotification
} from 'element-plus'
import {
  showLoading,
  hideLoading
} from '../plugins/loading'
let lastTime = 0

async function sendRequest(apilink, type, jsonObject, api_token) {
  // axios.defaults.timeout = 60000
  axios.defaults.headers.common['Authorization'] = `Bearer ${api_token?api_token:store.state.accessToken}`
  try {
    let response
    switch (type) {
      case 'post':
        response = await axios.post(apilink, jsonObject)
        return response.data
      case 'put':
        response = await axios.put(apilink, jsonObject)
        return response.data
      case 'get':
        response = await axios.get(apilink)
        return response.data
      case 'delete':
        response = await axios.delete(apilink, {
          data: jsonObject
        })
        return response.data
    }
  } catch (err) {
    console.error(err, err.response)
    notificationTip(err.response ? err.response.statusText || err.response.data.msg : 'Request failed. Please try again later!', 'error')
    // messageTip('error', err.response ? err.response.statusText : 'Request failed. Please try again later!')
    if (err.response) {
      // The request has been sent, but the status code of the server response is not within the range of 2xx
      // console.log(err.response.data)
      // console.log(err.response.status)
      // console.log(err.response.headers)
      return err.response.data
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', err.message)
      return err
    }
  }
}

async function timeout(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

function momentFun(dateItem) {
  let dateNew = dateItem * 1000
  let dataUnit = ''
  let dataTime = new Date(dateNew) + ''
  let dataUnitIndex = dataTime.indexOf('GMT')
  let dataUnitArray = dataTime.substring(dataUnitIndex, dataUnitIndex + 8)
  switch (dataUnitArray) {
    case 'GMT+1000':
      dataUnit = 'UTC+10'
      break
    case 'GMT-1000':
      dataUnit = 'UTC-10'
      break
    case 'GMT+0000':
      dataUnit = 'UTC+0'
      break
    default:
      dataUnit = dataUnitArray ? dataUnitArray.replace(/0/g, '').replace('GMT', 'UTC') : '-'
      break
  }
  dateNew = dateNew ?
    moment(new Date(parseInt(dateNew))).format('YYYY-MM-DD HH:mm:ss') + ` (${dataUnit})` :
    '-'
  return dateNew
}

async function messageTip(type, text) {
  ElMessage({
    showClose: true,
    message: text,
    type: type,
  })
}

async function notificationTip(title, type, message) {
  if (message) await copyContent(message, 'Copied')
  ElNotification({
    title: title,
    // message: message,
    type: type,
    position: 'bottom-right'
  })
}

function sizeChange(bytes) {
  if (bytes === 0) return '0 B'
  if (!bytes) return '-'
  var k = 1024 // or 1000
  var sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(bytes) / Math.log(k))

  if (Math.round((bytes / Math.pow(k, i))).toString().length > 3) i += 1
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function strToHexCharCode(str) {
  if (str === "") return "";
  const code = Number(str)
  return `0x${code.toString(16)}`
}

function copyContent(text, tipCont) {
  var txtArea = document.createElement('textarea')
  txtArea.id = 'txt'
  txtArea.style.position = 'fixed'
  txtArea.style.top = '0'
  txtArea.style.left = '0'
  txtArea.style.opacity = '0'
  txtArea.value = text
  document.body.appendChild(txtArea)
  txtArea.select()

  try {
    var successful = document.execCommand('copy')
    var msg = successful ? 'successful' : 'unsuccessful'
    console.log('Copying text command was ' + msg)
    if (successful) {
      // messageTip('success', tipCont)
      return true
    }
  } catch (err) {
    console.log('Oops, unable to copy')
  } finally {
    document.body.removeChild(txtArea)
  }
  return false
}

function goLink(link) {
  if (!link) return
  window.open(link)
}

async function jsonFilter(content) {
  return JSON.parse(JSON.stringify(content))
}

async function Init(callback) {
  if (typeof window.ethereum === 'undefined') {
    window.open('https://metamask.io/download.html')
    alert("Consider installing MetaMask!");
  } else {
    const ethereum = window.ethereum;
    ethereum
      .request({
        method: 'eth_requestAccounts'
      })
      .then((accounts) => {
        if (!accounts) {
          return false
        }
        web3Init.eth.getAccounts().then(async webAccounts => {
            store.dispatch('setMetaAddress', webAccounts[0])
            // const chainId = await ethereum.request({ method: 'eth_chainId' })
            // console.log(parseInt(chainId, 16))
            callback(webAccounts[0])
          })
          .catch(async (error) => {
            store.dispatch('setMetaAddress', accounts[0])
            callback(accounts[0])
          })
      })
      .catch((error) => {
        if (error === "User rejected provider access") {} else {
          alert("Please unlock MetaMask and switch to the correct network.");
          return false
        }
        console.error(
          `Error fetching accounts: ${error.message}.
        Code: ${error.code}. Data: ${error.data}`
        );
      });
  }
}

async function login() {
  if (!store.state.metaAddress || store.state.metaAddress === undefined) {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts'
    })
    store.dispatch('setMetaAddress', accounts[0])
  }
  const time = await throttle()
  if (!time) return [false, '']
  const [signature, signErr] = await sign()
  if (!signature) return [false, signErr]
  const token = await performSignin(signature)
  return [!!token, '']
}

async function throttle() {
  // Prevent multiple signatures
  let now = new Date().valueOf();
  if (lastTime > 0 && (now - lastTime) <= 2000) return false
  lastTime = now
  return true
}

async function sign(nonce) {
  const rightnow = (Date.now() / 1000).toFixed(0)
  const sortanow = rightnow - (rightnow % 600)
  const local = process.env.VUE_APP_DOMAINNAME
  const buff = Buffer.from("Signing in to " + local + " at " + sortanow, 'utf-8')
  let signature = null
  let signErr = ''
  await ethereum.request({
    method: 'personal_sign',
    params: [buff.toString('hex'), store.state.metaAddress]
  }).then(sig => {
    signErr = ''
    signature = sig
  }).catch(err => {
    console.log(err)
    signature = ''
    signErr = err && err.code ? String(err.code) : err
  })
  return [signature, signErr]
}

async function performSignin(sig) {
  try {
    const reqOpts = [store.state.metaAddress, sig]
    const response = await sendRequest(`${process.env.VUE_APP_BASEAPI}login`, 'post', reqOpts)
    if (response) {
      store.dispatch('setLagToken', response.access_token)
      const libraReqOpts = {
        type: 1,
        wallet_token: response.access_token
      }
      const libarResponse = await sendRequest(`${process.env.VUE_APP_LOGINAPI}/user/login`, 'post', libraReqOpts)
      store.dispatch('setAccessToken', libarResponse.data.token)
      return true
    }
    messageTip('error', response.message || 'Fail')
    return null
  } catch (err) {
    console.log('login err:', err)
    messageTip('error', 'Fail')
    return null
  }
}

async function getUnit(id) {
  let unit = 'ETH'
  let name = ''
  let url = ''
  let url_tx = ''
  switch (id) {
    case 1:
      unit = 'ETH'
      name = 'Ethereum Mainnet '
      break
    case 8598668088:
      unit = 'SwanETH'
      name = 'OpSwan '
      url = `${process.env.VUE_APP_OPSWANURL}/address/`
      url_tx = `${process.env.VUE_APP_OPSWANURL}/tx/`
      break
    case 56:
      unit = 'BNB'
      name = 'Binance Smart Chain Mainnet '
      url = `${process.env.VUE_APP_BSCBLOCKURL}/address/`
      url_tx = `${process.env.VUE_APP_BSCBLOCKURL}/tx/`
      break
    case 97:
      unit = 'tBNB'
      name = 'Binance Smart Chain Testnet '
      url = `${process.env.VUE_APP_BSCTESTNETBLOCKURL}/address/`
      url_tx = `${process.env.VUE_APP_BSCTESTNETBLOCKURL}/tx/`
      break
    case 137:
      unit = 'MATIC'
      name = 'Polygon Mainnet '
      url = `${process.env.VUE_APP_POLYGONBLOCKURL}/address/`
      url_tx = `${process.env.VUE_APP_POLYGONBLOCKURL}/tx/`
      break
    case 80001:
      unit = 'MATIC'
      name = 'Mumbai Testnet '
      // url = `${process.env.VUE_APP_MUMBAIBLOCKURL}/address/`
      url = `${process.env.VUE_APP_MUMBAIPAYMENTURL}/address/`
      url_tx = `${process.env.VUE_APP_MUMBAIPAYMENTURL}/tx/`
      break
    case 3141:
      unit = 'ETH'
      name = 'Filecoin - Hyperspace testnet '
      break
    case 11155111:
      unit = 'ETH'
      name = 'Sepolia Testnet '
      url = `${process.env.VUE_APP_SEPOLIABLOCKURL}/address/`
      url_tx = `${process.env.VUE_APP_SEPOLIABLOCKURL}/tx/`
      break
    default:
      unit = '-'
      name = `Chain ${id}`
      break
  }
  return ({
    unit,
    name,
    url,
    url_tx
  })
}

async function walletChain(chainId) {
  let text = {}
  switch (chainId) {
    case 8598668088:
      text = {
        chainId: web3Init.utils.numberToHex(8598668088),
        chainName: 'OpSwan',
        // nativeCurrency: {
        //   name: 'SwanETH',
        //   symbol: 'SwanETH', // 2-6 characters long
        //   decimals: 18
        // },
        rpcUrls: [process.env.VUE_APP_OPSWANRPCURL],
        blockExplorerUrls: [process.env.VUE_APP_OPSWANURL]
      }
      break
    case 80001:
      text = {
        chainId: web3Init.utils.numberToHex(80001),
        chainName: 'Mumbai Testnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC', // 2-6 characters long
          decimals: 18
        },
        rpcUrls: [process.env.VUE_APP_MUMBAIRPCURL],
        blockExplorerUrls: [process.env.VUE_APP_MUMBAIPAYMENTURL]
      }
      break
    case 97:
      text = {
        chainId: web3Init.utils.numberToHex(97),
        chainName: 'BSC TestNet',
        nativeCurrency: {
          name: 'tBNB',
          symbol: 'tBNB', // 2-6 characters long
          decimals: 18
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
        blockExplorerUrls: [process.env.VUE_APP_BSCTESTNETBLOCKURL]
      }
      break
    case 137:
      text = {
        chainId: web3Init.utils.numberToHex(137),
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC', // 2-6 characters long
          decimals: 18
        },
        rpcUrls: ['https://polygon-rpc.com'],
        blockExplorerUrls: [process.env.VUE_APP_POLYGONBLOCKURL]
      }
      break
  }
  try {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        text
      ]
    })
    await timeout(500)
    // showLoading()
    const [lStatus, signErr] = await login()
    // hideLoading()
  } catch (err) {
    if (err.message) messageTip('error', err.message)
    // hideLoading()
  }
}

async function checkDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return true
  else return false
}

async function checkMode() {
  let mode = false
  const check = await checkDarkMode()
  if (String(store.state.reverse) === '1') mode = true
  else if (String(store.state.reverse) === '2') mode = false
  else mode = check

  if (mode) document.querySelector('html').classList.add('dark')
  else document.querySelector('html').classList.remove('dark')
  return mode
}

function NumFormat(value) {
  if (String(value) === '0') return '0'
  else if (!value) return '-'
  var intPartArr = String(value).split('.')
  var intPartFormat = intPartArr[0]
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartArr[1] ? `${intPartFormat}.${intPartArr[1]}` : intPartFormat
}

function signOutMeta() {
  store.dispatch('setAccessToken', '')
  store.dispatch('setEmailAddress', '')
  store.dispatch('setLagToken', '')
  // router.push({
  //   name: 'home'
  // })
}

function hiddAddress(val) {
  if (val) return `${val.substring(0, 5)}...${val.substring(val.length - 5)}`
  else return '-'
}

async function listArray(arrayList) {
  let listArr = [{
      label: 'CPU',
      list: []
    },
    {
      label: 'GPU',
      list: []
    }
  ]
  // arrayList.sort((a, b) => a['hardware_name'].localeCompare(b['hardware_name']))
  arrayList.forEach(async hard => {
    hard.regionOption = await regionList(hard.region)
    hard.regionValue = hard.region && hard.region[0] ? hard.region[0] : ''
    if (hard.hardware_type.toLowerCase() === 'cpu') listArr[0].list.push(hard)
    else listArr[1].list.push(hard)
  })
  return listArr
}

async function regionList(list) {
  if (!list || !Array.isArray(list) || list.length === 0) {
    return [];
  }

  let arr = [{
    value: "Global",
    label: "Global"
  }];

  list.forEach(l => {
    arr.push({
      value: l,
      label: l
    });
  });

  return arr;
}

let web3Init
if (typeof window.ethereum === 'undefined') {
  // window.open('https://metamask.io/download.html')
  // alert("Consider installing MetaMask!");
} else {
  if (window.ethereum) {
    web3 = new Web3(ethereum);
    web3.setProvider(ethereum);
  } else if (window.web3) {
    web3 = window.web3;
    console.log("Injected web3 detected.");
  } else {
    var currentProvider = web3.currentProvider;
    web3 = new Web3(currentProvider);
    web3.setProvider(currentProvider);
    console.log("No web3 instance injected, using Local web3.");
  }
  web3Init = web3
}

const optionCont = {
  data: {
    name: 'service-1',
    collapse: false,
    count: 1,
    cpuValue: 0,
    cpuPop: [{
        desc: "The amount of vCPU's required for this workload.",
        link: ''
      },
      {
        desc: "The maximum for a single instance is 256 vCPU's.",
        link: ''
      },
      {
        desc: "The maximum total multiplied by the count of instances is 512 vCPU's.",
        link: ''
      }
    ],
    gpuValue: 1,
    gpuPop: [{
        desc: "The amount of GPUs required for this workload.",
        link: ''
      },
      {
        desc: "You can also specify the GPU vendor and model you want specifically. If you don't specify any model, providers with any GPU model will bid on your workload.",
        link: ''
      },
      {
        desc: "View official documentation.",
        link: 'https://docs.lagrangedao.org/'
      }
    ],
    gpuCheck: false,
    gpuSelect: {
      value: 'nvidia',
      options: [{
        value: 'nvidia',
        label: 'nvidia',
      }]
    },
    gpuModels: {
      value: '',
      options: [{
        label: '',
        list: []
      }]
    },
    MemoryValue: 512,
    MemoryPop: [{
        desc: "The amount of memory required for this workload.",
        link: ''
      },
      {
        desc: "The maximum for a single instance is 512 Gi.",
        link: ''
      },
      {
        desc: "The maximum total multiplied by the count of instances is 1024 Gi.",
        link: ''
      }
    ],
    MemorySelect: {
      value: 'Mb',
      options: [{
          value: 'Mb',
          label: 'Mb',
        },
        {
          value: 'Mi',
          label: 'Mi',
        },
        {
          value: 'GB',
          label: 'GB',
        },
        {
          value: 'Gi',
          label: 'Gi',
        }
      ]
    },
    EphemeralValue: 1,
    EphemeralPop: [{
        desc: "The amount of ephemeral disk storage required for this workload.",
        link: ''
      },
      {
        desc: "This disk storage is ephemeral, meaning it will be wiped out on every deployment update or provider reboot.",
        link: ''
      },
      {
        desc: "The maximum for a single instance is 32 Ti.",
        link: ''
      },
      {
        desc: "The maximum total multiplied by the count of instances is also 32 Ti.",
        link: ''
      }
    ],
    EphemeralSelect: {
      value: 'Mb',
      options: [{
          value: 'Mb',
          label: 'Mb',
        },
        {
          value: 'Mi',
          label: 'Mi',
        },
        {
          value: 'GB',
          label: 'GB',
        },
        {
          value: 'Gi',
          label: 'Gi',
        },
        {
          value: 'TB',
          label: 'TB',
        },
        {
          value: 'Ti',
          label: 'Ti',
        }
      ]
    },
    docker: '',
    dockerPop: [{
        desc: 'Docker image of the container.',
        link: ''
      },
      {
        desc: 'Best practices: avoid using :latest image tags as Lagrange Providers heavily cache images.',
        link: ''
      }
    ],
    evList: [],
    evPop: [{
        desc: 'A list of environment variables to expose to the running container.',
        link: ''
      },
      {
        desc: 'View official documentation.',
        link: 'https://docs.lagrangedao.org/'
      }
    ],
    commandsList: [],
    commandsPop: [{
        desc: 'Custom command use when executing container.',
        link: ''
      },
      {
        desc: 'An example and popular use case is to run a bash script to install packages or run specific commands.',
        link: ''
      }
    ],
    exposeList: [{
      port: 80,
      as: 80,
      httpValue: 'http',
      httpOption: [{
          label: 'http',
          value: 'http'
        },
        {
          label: 'tcp',
          value: 'tcp'
        }
      ],
      global: false,
      accept: ''
    }],
    exposePop: [{
        desc: 'Expose is a list of port settings describing what can connect to the service.',
        link: ''
      },
      {
        desc: 'View official documentation.',
        link: 'https://docs.lagrangedao.org/'
      }
    ],
    dependOn: ''
  }
}

window.addEventListener('resize', () => {
  let client = document.body.clientWidth < 992 ? false : true
  store.dispatch('setClientWidth', client)
})

export default {
  sendRequest,
  timeout,
  momentFun,
  messageTip,
  notificationTip,
  sizeChange,
  strToHexCharCode,
  copyContent,
  goLink,
  jsonFilter,
  Init,
  login,
  getUnit,
  walletChain,
  web3Init,
  optionCont,
  checkDarkMode,
  checkMode,
  NumFormat,
  signOutMeta,
  hiddAddress,
  listArray,
  regionList
}