import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { firebaseConfig } from './config/configFirebase';
import firebase from 'firebase';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
