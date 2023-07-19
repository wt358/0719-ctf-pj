<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["miso_status_ratio"]),
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");
      const labels = Object.keys(this.miso_status_ratio);
      const data = Object.values(this.miso_status_ratio);
      console.log(data);
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              label: "Ratio",
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          responsive: true,
        },
      });
    },
  },
};
</script>

<style>
canvas {
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
}
</style>
