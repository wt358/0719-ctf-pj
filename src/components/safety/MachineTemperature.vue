<template>
  <v-card class="mt-10 rounded">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" xl="6">
        <averageTempGraph></averageTempGraph
      ></v-col>
      <v-col cols="12" sm="12" md="6" lg="8" xl="6">
        <v-img :src="require('@/assets/machine.png')" contain> </v-img
      ></v-col>
    </v-row>
  </v-card>
</template>

<script>
import AverageTempGraph from "@/components/chart/AverageTempGraph.vue";
export default {
  components: {
    AverageTempGraph,
  },
};
</script>

<style></style>
