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
    ...mapState(["anomalyData"]),
  },
  mounted() {
    this.drawChart();
  },

  methods: {
    ...mapActions(["fetchAnomalyData"]),
    drawChart() {
      const ctx = this.$refs.lineChartCanvas.getContext("2d");
      const timestamps = this.anomalyData.map(item => item.timestamp);
      const lossMaes = this.anomalyData.map(item => item.loss_mae);

      const threshold1 = 1;
      const threshold2 = 2;
      const threshold3 = 3;

      const datasets = [
        {
          label: "Loss Mae",
          data: lossMaes,
          fill: true,
          borderColor: "black",
          borderWidth: 1,
          pointRadius: 0, // Remove pointRadius to hide points
          pointHitRadius: 0, // Remove pointHitRadius to hide points
          showLine: true, // Display only the line
        },
        {
          label: "Threshold 1",
          data: Array(lossMaes.length).fill(threshold1),
          borderColor: "green",
          borderWidth: 1,

          fill: false,
          pointRadius: 0, // Remove pointRadius to hide points
          pointHitRadius: 0, // Remove pointHitRadius to hide points
          showLine: true, // Display only the line
        },
        {
          label: "Threshold 2",
          data: Array(lossMaes.length).fill(threshold2),
          borderColor: "orange",
          borderWidth: 1,

          fill: false,
          pointRadius: 0, // Remove pointRadius to hide points
          pointHitRadius: 0, // Remove pointHitRadius to hide points
          showLine: true, // Display only the line
        },
        {
          label: "Threshold 3",
          data: Array(lossMaes.length).fill(threshold3),
          borderColor: "red",
          borderWidth: 1,

          fill: false,
          pointRadius: 0, // Remove pointRadius to hide points
          pointHitRadius: 0, // Remove pointHitRadius to hide points
          showLine: true, // Display only the line
        },
      ];

      new Chart(ctx, {
        type: "line",
        data: {
          labels: timestamps,
          datasets: datasets,
        },
        // fill: false,
        options: {
          responsive: true,
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
        },
      });
    },
  },
};
</script>
