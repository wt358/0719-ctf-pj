<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>SENSOR0 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarSensor0></BarSensor0>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>SENSOR0 이상치 여부</h3>

          <CircleSensor0></CircleSensor0>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleSensor0 from "@/components/chart/circle/CircleSensor0.vue";
import BarSensor0 from "@/components/chart/bar/BarSensor0.vue";

export default {
  components: {
    CircleSensor0,
    BarSensor0,
  },
  created() {
    this.$store.dispatch("fetchsensor0_status");
    this.$store.dispatch("fetchsensor0_anomal");
  },
};
</script>

<style></style>
