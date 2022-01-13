import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    event: null,
    response: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      // state.user = null
      // axios.defaults.headers.common['Authorization'] = null
      location.reload() // Recarrega a página e por isso apaga o state e o axios.headers
    },
    SET_EVENT_DATA (state, eventData) {
      state.event = eventData
    },
    SET_RESPONSE_DATA (state, response) {
      state.response = response
    }
  },
  actions: {
    async register ({commit}, credentials) {
      return await axios.post('//localhost:3000/user/register', credentials)
        .then(({data}) => {
          commit('SET_USER_DATA', data)
        })
    },
    async login ({commit}, credentials) {
      return await axios.post('//localhost:3000/user/login', credentials)
        .then(({data}) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout ({commit}) {
      commit('CLEAR_USER_DATA')
    },
    async include_event ({commit}, event) {
      return await axios.post('//localhost:3000/event/create', event)
        .then(({data}) => {
          commit('SET_EVENT_DATA', data)
        })
    },

    async passwd_change({commit}, passwd_data){
      return await axios.put('//localhost:3000/user/changepasswd', passwd_data)
        .then(({data}) => {
          commit('SET_RESPONSE_DATA', data)
        })
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    },
    loggedUser (state) {
      return state.user ? state.user : null
    },
    lastEvent (state) {
      return state.event ? state.event : null
    }
  }
})
