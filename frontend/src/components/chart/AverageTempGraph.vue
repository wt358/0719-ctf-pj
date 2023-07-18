<template>
  <div><canvas ref="doughnutCanvas"></canvas></div>
</template>

<script>
import Chart from "chart.js";

export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const ctx = this.$refs.doughnutCanvas.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Label 1", "Rest"],
          datasets: [
            {
              data: [0.7, 0.3],
              backgroundColor: ["yellow", "lightgray"],
            },
          ],
        },
        options: {
          // 추가적인 옵션 설정 가능
          responsive: true,
        },
      });
    },
  },
};
</script>

<style></style>
