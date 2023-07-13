import VueRouter from "vue-router";
import Vue from "vue";
import SafeMonitor from "../views/SafeMonitor.vue";
import AnomalyDetection from "@/views/AnomalyDetection.vue";
import Test from "@/views/test.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/safety",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: SafeMonitor,
    },
    {
      path: "/anomalydetection",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: AnomalyDetection,
    },
    {
      path: "/test",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: Test,
    },
  ],
  mode: "history",
});
