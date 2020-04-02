import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuemoment from "vue-moment";
import "bootstrap/dist/css/bootstrap.min.css";
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);
Vue.use(vuemoment);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
