<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>SENSOR1 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarSensor1></BarSensor1>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>SENSOR1 이상치 여부</h3>

          <CircleSensor1></CircleSensor1>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleSensor1 from "@/components/chart/circle/CircleSensor1.vue";
import BarSensor1 from "@/components/chart/bar/BarSensor1.vue";

export default {
  components: {
    CircleSensor1,
    BarSensor1,
  },
  created() {
    this.$store.dispatch("fetchsensor1_status");
    this.$store.dispatch("fetchsensor1_anomal");
  },
};
</script>

<style></style>
