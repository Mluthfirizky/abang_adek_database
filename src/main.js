import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase/compat/app'
import store from "./store"
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(ElementUI);



firebase.auth().onAuthStateChanged(user => {
console.log(user)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
})
