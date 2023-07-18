<template>
  <div><canvas ref="pieChartCanvas" width="200" height="200"></canvas></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Chart from "chart.js";

export default {
  computed: {
    ...mapState(["ratios"]),
  },
  mounted() {
    this.drawChart();
  },

  methods: {
    ...mapActions(["fetchAnomalyList"]),
    drawChart() {
      const ctx = this.$refs.pieChartCanvas.getContext("2d");
      const labels = Object.keys(this.ratios);
      const data = Object.values(this.ratios);

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                // Add more colors if needed
              ],
              borderColor: "rgba(0, 0, 0, 0.8)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          // Additional options for customization
        },
      });
    },
  },
};
</script>

<style></style>
