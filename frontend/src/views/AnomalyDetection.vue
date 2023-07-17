<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="8" lg="8" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>단계별 이상치 분포</h3>
          <anomaly-line-chart></anomaly-line-chart>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>단계별 이상치 비중</h3>
          <anomaly-circle-chart></anomaly-circle-chart>
        </v-card>
      </v-col>
      <v-col cols="8" sm="12" md="8" lg="8" xl="12">
        <v-row>
          <v-col cols="12">
            <v-card class="pa-3" outlined style="height: 100%">
              <h3>모델별 학습 소요시간</h3>
              <model-timebar-chart></model-timebar-chart>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="pa-3" outlined style="height: 100%">
              <h3>모델별 성능</h3>
              <model-performance></model-performance>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" sm="12" md="4" lg="4" xl="12">
        <Model-Summary></Model-Summary>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModelSummary from "@/components/anomaly/ModelSummary.vue";

import AnomalyCircleChart from "@/components/chart/circle/AnomalyCircleChart.vue";
import AnomalyLineChart from "@/components/chart/line/AnomalyLineChart.vue";
import ModelTimebarChart from "@/components/chart/bar/ModelTimebarChart.vue";
import ModelPerformance from "@/components/anomaly/ModelPerformance.vue";
export default {
  components: {
    ModelSummary,
    AnomalyCircleChart,
    AnomalyLineChart,
    ModelTimebarChart,
    ModelPerformance,
  },
};
</script>

<style></style>
