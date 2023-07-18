<template>
  <div>
    <canvas ref="lineChartCanvas"></canvas>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Chart from "chart.js";

export default {
  computed: {
    ...mapState(["liveTemperature"]),

    timestamps() {
      return this.liveTemperature.map(item => item.date);
    },
    barrel1Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[0]["Barrel_Temperature_1"];
      });
    },
    barrel2Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[1]["Barrel_Temperature_2"];
      });
    },
    barrel3Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[2]["Barrel_Temperature_3"];
      });
    },
    barrel4Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[3]["Barrel_Temperature_4"];
      });
    },
    barrel5Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[4]["Barrel_Temperature_5"];
      });
    },
    barrel6Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[5]["Barrel_Temperature_6"];
      });
    },
    barrel7Data() {
      const temperatures = this.liveTemperature.map(item => {
        return item.temperatures;
      });
      return temperatures.map(item => {
        return item[6]["Barrel_Temperature_7"];
      });
    },
  },

  mounted() {
    this.drawChart();
  },
  methods: {
    ...mapActions(["fetchLiveTemperature"]),
    drawChart() {
      const ctx = this.$refs.lineChartCanvas.getContext("2d");
      const datasets = [
        {
          label: "Barrel Temperature 1",
          data: this.barrel1Data,
          fill: false,
          borderColor: "red",
          borderWidth: 1,
        },
        {
          label: "Barrel Temperature 2",
          data: this.barrel2Data,
          fill: false,
          borderColor: "blue",
          borderWidth: 1,
        },
        {
          label: "Barrel Temperature 3",
          data: this.barrel3Data,
          fill: false,
          borderColor: "green",
          borderWidth: 1,
        },
        {
          label: "Barrel Temperature 4",
          data: this.barrel4Data,
          fill: false,
          borderColor: "orange",
          borderWidth: 1,
        },
        {
          label: "Barrel Temperature 5",
          data: this.barrel5Data,
          fill: false,
          borderColor: "purple",
          borderWidth: 1,
        },
        {
          label: "Barrel Temperature 6",
          data: this.barrel6Data,
          fill: false,
          borderColor: "pink",
          borderWidth: 1,
        },
        {
          label: "Barrel Temperature 7",
          data: this.barrel7Data,
          fill: false,
          borderColor: "gray",
          borderWidth: 1,
        },
      ];
      new Chart(ctx, {
        type: "line",
        title: "실시간온도데이터",
        data: {
          labels: this.timestamps,
          datasets: datasets,
        },
        options: {
          responsive: true,

          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Time",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Temperature",
              },
            },

            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            tooltips: {
              mode: "point",
            },
            lineWidth: 1,
          },
        },
      });
    },
  },
};
</script>
<style></style>
