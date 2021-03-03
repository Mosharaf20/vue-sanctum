import Vue from 'vue';
import App from './App.vue';

//bootstrap-4
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//vue router file
import router from "./router/index"

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
