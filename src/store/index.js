import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  // state : 컴포넌트 간 공유할 data속성
  state: {
    // counter state 속성 추가
    counter: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCounter : function(state){
      return state.counter;
    }
  }
})
