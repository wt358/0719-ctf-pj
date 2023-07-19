import VueRouter from "vue-router";
import Vue from "vue";
import DC5V from "@/views/DC5V.vue";
import DC12V from "@/views/DC12V.vue";
import CLK from "@/views/CLK.vue";
import MISO from "@/views/MISO.vue";
import MOSI from "@/views/MOSI.vue";
import SENSOR0 from "@/views/SENSOR0.vue";
import SENSOR1 from "@/views/SENSOR1.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/dc5v",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: DC5V,
    },
    {
      path: "/dc12v",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: DC12V,
    },
    {
      path: "/clk",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: CLK,
    },
    {
      path: "/miso",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: MISO,
    },
    {
      path: "/mosi",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: MOSI,
    },
    {
      path: "/sensor0",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: SENSOR0,
    },
    {
      path: "/sensor1",
      //url 주소로 이동시 표시될 컴포넌트 cf. 페이지
      component: SENSOR1,
    },
  ],
  mode: "history",
});
