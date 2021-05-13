import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  // state : 컴포넌트 간 공유할 data속성
  state: {
    // counter state 속성 추가
    counter: 0
  },
  // mutation : 동기적으로 로직 정의
  // 정의한 로직들을 순차적으로 실행 - 추적 용이
  mutations: {
    addCounter: function(state, payload){
      return state.counter+=payload;
    },
    subCounter: function(state, payload){
      return state.counter-=payload;
    },
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
