import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const date = new Date();
export const store = new Vuex.Store({
  // count state 속성 추가
  state: {
    // Navigation Drawer 부분 test
    nameAndRole: { Celia: "manager" },
    todayDate: date,
    alarm: [
      { text: "이상치 감지 lv1", icon: "mdi-access-point" },
      { text: "이상치 감지 lv2", icon: "mdi-access-point" },
      { text: "이상치 감지 lv1", icon: "mdi-access-point" },
      { text: "이상치 감지 lv2", icon: "mdi-access-point" },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
