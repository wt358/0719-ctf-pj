import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { store } from "../src/store/index.js";
// import "@mdi/react";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount("#app");
