import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    list:[]
  },
  mutations: {
     getUser(state,payload){
        state.user=payload
     },
     getList(state,payload){
      state.list=payload
     }
  },
  actions: {
    getList({commit}){
      axios.get('/listdata').then(({data})=>{
          commit('getList',data)
      })
    }
  },
  modules: {
  }
})
