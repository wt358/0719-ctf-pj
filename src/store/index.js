import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const date = new Date();
export const store = new Vuex.Store({
  // count state 속성 추가
  state: {
    name: "Celia",
    todayDate: date,
  },
  mutations: {},
  actions: {},
  modules: {},
});
