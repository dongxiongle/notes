import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant';
// import '@/assets/less/index.less';
import 'vant/lib/index.less'
import '@/assets/css/reset.less';

Vue.use(vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
