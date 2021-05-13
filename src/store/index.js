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
      console.log('mutations : addCounter');
      return state.counter++;
    },
    subCounter: function(state, payload){
      console.log('mutations : subCounter');
      return state.counter--;
    },
  },
  // actions : 비동기 로직
  actions: {
    addCounter: function(context){
      // mutations 메서드
      // 상태변화 추적을 위해 mustations 메서드 호출
      console.log('actions : addCounter');
      return context.commit('addCounter');
    },
    // HTTP get요청이나 setTimeout과 같은 비동기 처리 로직
    getServerData: function(context){
      return axios.get("sample.json").then(function(){

      });
    },
    delayFewMinutes: function(context){
      return setTimeout(function(){
        commit('addCounter');
      }, 10);
    },
  },
  modules: {
  },
  getters: {
    getCounter : function(state){
      return state.counter;
    }
  }
})
