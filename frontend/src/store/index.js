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

    //anomaly
    lv1Data: [],
    lv2Data: [],
    lv3Data: [],
    ratios: [],
    anomalyData: [],

    mpHeaders: [],
    mpDataSets: [],
    liveTemperature: [],
  },
  getters: {},
  mutations: {
    /**
     *
     * @param {*} state
     * @param {*} data lv1-3 데이터
     */
    setLv1Data(state, data) {
      state.lv1Data = data;
    },
    setLv2Data(state, data) {
      state.lv2Data = data;
    },
    setLv3Data(state, data) {
      state.lv3Data = data;
    },
    setAnomalyData(state, data) {
      state.anomalyData = data;
    },
    setRatios(state, data) {
      state.ratios = data;
    },
    setMpHeaders(state, data) {
      state.mpHeaders = data;
    },
    setMpDataSets(state, data) {
      state.mpDataSets = data;
    },
    setLiveTemperature(state, data) {
      state.liveTemperature = data;
    },
  },
  actions: {
    async fetchAnomalyList(context) {
      await axios
        .get("http://0.0.0.0:8000/anomalylist")
        .then(response => {
          const data = response.data;

          context.commit("setLv1Data", data.lv1);
          context.commit("setLv2Data", data.lv2);
          context.commit("setLv3Data", data.lv3);
          context.commit("setRatios", data.ratios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchAnomalyData(context) {
      await axios
        .get("http://0.0.0.0:8000/lossmae")
        .then(response => {
          const data = response.data;
          console.log(new Date(data[0].timestamp).toLocaleString());
          console.log(new Date(data[0].timestamp).getHours());
          console.log(new Date());
          const formattedData = data.map(item => {
            // timestamp: new Date(item.timestamp).toISOString().substring(11, 16), // Extract hour part (index 11 to 13)
            const date = new Date(item.timestamp);
            const hours = date.getHours();
            const minutes = date.getMinutes();

            const timestamp = `${hours}시${minutes}분`;
            return {
              timestamp: timestamp,
              loss_mae: item.loss_mae,
            };
          });
          context.commit("setAnomalyData", formattedData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchLiveTemperature(context) {
      await axios
        .get("http://0.0.0.0:8000/liveTemperature")
        .then(response => {
          const data = response.data;
          console.log(data[0]);
          const formattedData = data.map(item => {
            const date =
              item[0].split(":")[1] +
              ":" +
              item[0].split(":")[2] +
              ":" +
              item[0].split(":")[3]; // timestamp에서 날짜 정보 추출
            const temperatureObj = item[1]; // 온도 객체

            // 각 온도를 포맷팅하거나 추가적인 변환 작업 수행
            const formattedTemperatures = Object.keys(temperatureObj).map(
              key => {
                return {
                  [key]: temperatureObj[key],
                };
              }
            );

            return {
              date,
              temperatures: formattedTemperatures,
            };
          });
          context.commit("setLiveTemperature", formattedData);
        })
        .catch(error => console.log(error));
    },
  },
  modules: {},
});
