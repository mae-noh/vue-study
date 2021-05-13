import Vue from 'vue'
import App from './App.vue'
import router from './router'

// store.js를 불러오는 코드
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // Vue 인스턴스에 store 속성 연결
  store,
  render: h => h(App)
}).$mount('#app')
