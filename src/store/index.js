import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    metaAddress: sessionStorage.getItem('metaAddressClaim') || '',
    clientWidth: document.body.clientWidth < 992 ? false : true,
    reverse: localStorage.getItem('libraReverse') || '0', // 0:not set, 1:dark, 2:light
    accessToken: sessionStorage.getItem('access_token_libraos') || '',
    lagToken: sessionStorage.getItem('lagToken_libraos') || '',
    emailAddress: sessionStorage.getItem('email_address_libraos') || '',
  },
  mutations: {
    SET_METAADDRESS: (state, metaAddress) => {
      state.metaAddress = metaAddress
      sessionStorage.setItem('metaAddressClaim', metaAddress)
    },
    SET_CLIENTWIDTH: (state, clientWidth) => {
      state.clientWidth = clientWidth
    },
    SET_REVERSE: (state, reverse) => {
      state.reverse = reverse
      localStorage.setItem('libraReverse', reverse)
    },
    SET_ACCESSTOKEN: (state, accessToken) => {
      state.accessToken = accessToken
      sessionStorage.setItem('access_token_libraos', accessToken)
    },
    SET_LAGTOKEN: (state, lagToken) => {
      state.lagToken = lagToken
      sessionStorage.setItem('lagToken_libraos', lagToken)
    },
    SET_EMAILADDRESS: (state, emailAddress) => {
      state.emailAddress = emailAddress
      sessionStorage.setItem('email_address_libraos', emailAddress)
    }
  },
  actions: {
    setMetaAddress({
      commit
    }, metaAddress) {
      commit('SET_METAADDRESS', metaAddress)
    },
    setClientWidth({
      commit
    }, clientWidth) {
      commit('SET_CLIENTWIDTH', clientWidth)
    },
    setReverse({
      commit
    }, reverse) {
      commit('SET_REVERSE', reverse)
    },
    setAccessToken({
      commit
    }, accessToken) {
      commit('SET_ACCESSTOKEN', accessToken)
    },
    setLagToken({
      commit
    }, lagToken) {
      commit('SET_LAGTOKEN', lagToken)
    },
    setEmailAddress({
      commit
    }, emailAddress) {
      commit('SET_EMAILADDRESS', emailAddress)
    },
  },
  modules: {}
})