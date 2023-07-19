import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
    //api 로 부터 데이터 설정
    dc5v_anomal_ratio: [],
    dc5_status_ratio: [],
    dc12v_anomal_ratio: [],
    dc12_status_ratio: [],
    clk_anomal_ratio: [],
    clk_status_ratio: [],
    miso_anomal_ratio: [],
    miso_status_ratio: [],
    mosi_anomal_ratio: [],
    mosi_status_ratio: [],
    sensor0_anomal_ratio: [],
    sensor0_status_ratio: [],
    sensor1_anomal_ratio: [],
    sensor1_status_ratio: [],
    stb_anomal_ratio: [],
    stb_status_ratio: [],
  },
  getters: {},
  mutations: {
    /**
     *
     * @param {*} state
     * @param {*} data lv1-3 데이터
     */
    setdc5v_anomal_ratio(state, data) {
      state.dc5v_anomal_ratio = data;
    },
    setdc5v_status_ratio(state, data) {
      state.dc5_status_ratio = data;
    },
    setdc12v_anomal_ratio(state, data) {
      state.dc12v_anomal_ratio = data;
    },
    setdc12v_status_ratio(state, data) {
      state.dc12_status_ratio = data;
    },
    setclk_anomal_ratio(state, data) {
      state.clk_anomal_ratio = data;
    },
    setclk_status_ratio(state, data) {
      state.clk_status_ratio = data;
    },
    setmiso_anomal_ratio(state, data) {
      state.miso_anomal_ratio = data;
    },
    setmiso_status_ratio(state, data) {
      state.miso_status_ratio = data;
    },
    setmosi_anomal_ratio(state, data) {
      state.mosi_anomal_ratio = data;
    },
    setmosi_status_ratio(state, data) {
      state.mosi_status_ratio = data;
    },
    setsensor0_anomal_ratio(state, data) {
      state.sensor0_anomal_ratio = data;
    },
    setsensor0_status_ratio(state, data) {
      state.sensor0_status_ratio = data;
    },
    setsensor1_anomal_ratio(state, data) {
      state.sensor1_anomal_ratio = data;
    },
    setsensor1_status_ratio(state, data) {
      state.sensor1_status_ratio = data;
    },
    setstb_anomal_ratio(state, data) {
      state.stb_anomal_ratio = data;
    },
    setstb_status_ratio(state, data) {
      state.stb_status_ratio = data;
    },
  },
  actions: {
    async fetchDc5v_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/dc5v_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setdc5v_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchDc5v_status(context) {
      await axios
        .get("http://0.0.0.0:8000/dc5v_ok")
        .then(response => {
          const data = response.data;
          context.commit("setdc5v_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchDc12v_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/dc12v_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setdc12v_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchDc12v_status(context) {
      await axios
        .get("http://0.0.0.0:8000/dc12v_ok")
        .then(response => {
          const data = response.data;
          context.commit("setdc12v_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchclk_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/clk_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setclk_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchclk_status(context) {
      await axios
        .get("http://0.0.0.0:8000/clk_ok")
        .then(response => {
          const data = response.data;
          context.commit("setclk_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchmosi_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/mosi_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setmosi_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchmosi_status(context) {
      await axios
        .get("http://0.0.0.0:8000/mosi_ok")
        .then(response => {
          const data = response.data;
          context.commit("setmosi_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchmiso_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/miso_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setmiso_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchmiso_status(context) {
      await axios
        .get("http://0.0.0.0:8000/miso_ok")
        .then(response => {
          const data = response.data;
          context.commit("setmiso_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchstb_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/stb_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setstb_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchstb_status(context) {
      await axios
        .get("http://0.0.0.0:8000/stb_ok")
        .then(response => {
          const data = response.data;
          context.commit("setstb_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchsensor0_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/sensor0_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setsensor0_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchsensor0_status(context) {
      await axios
        .get("http://0.0.0.0:8000/sensor0_ok")
        .then(response => {
          const data = response.data;
          context.commit("setsensor0_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchsensor1_anomal(context) {
      await axios
        .get("http://0.0.0.0:8000/sensor1_anomaly")
        .then(response => {
          const data = response.data;
          context.commit("setsensor1_anomal_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchsensor1_status(context) {
      await axios
        .get("http://0.0.0.0:8000/sensor1_ok")
        .then(response => {
          const data = response.data;
          context.commit("setsensor1_status_ratio", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  modules: {},
});
