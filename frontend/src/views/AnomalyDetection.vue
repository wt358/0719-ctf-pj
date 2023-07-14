<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="8" lg="8" xl="12">
        <Outlier-distribution></Outlier-distribution>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" xl="12">
        <Outlier-weight></Outlier-weight>
      </v-col>
      <v-col cols="8" sm="12" md="8" lg="8" xl="12">
        <v-row>
          <v-col cols="12">
            <Time-Model></Time-Model>
          </v-col>
          <v-col cols="12">
            <performance-model></performance-model>
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
import OutlierDistribution from "../components/anomaly/OutlierDistribution.vue";
import OutlierWeight from "@/components/anomaly/OutlierWeight.vue";
import PerformanceModel from "../components/anomaly/PerformanceModel.vue";
import TimeModel from "../components/anomaly/TimeModel.vue";
import ModelSummary from "@/components/anomaly/ModelSummary.vue";
export default {
  components: {
    OutlierDistribution,
    OutlierWeight,
    PerformanceModel,
    TimeModel,
    ModelSummary,
  },
};
</script>

<style></style>
