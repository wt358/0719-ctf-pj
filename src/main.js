import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
// import "@mdi/react";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,

  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount("#app");
