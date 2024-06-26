import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin'
import 'vue-waterfall-plugin/dist/style.css'

import VueLazyload from 'vue-lazyload';


Vue.component('LazyImg', LazyImg)
Vue.component('Waterfall', Waterfall)

Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: require('@/assets/error.png'),
  // loading: require('@/assets/loading.gif'),
  // attempt: 1
});

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
