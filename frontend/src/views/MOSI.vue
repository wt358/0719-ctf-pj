<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>MOSI 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarMosi></BarMosi>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>MOSI 이상치 여부</h3>

          <CircleMosi></CircleMosi>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleMosi from "@/components/chart/circle/CircleMosi.vue";
import BarMosi from "@/components/chart/bar/BarMosi.vue";

export default {
  components: {
    CircleMosi,
    BarMosi,
  },
  created() {
    this.$store.dispatch("fetchmosi_status");
    this.$store.dispatch("fetchmosi_anomal");
  },
};
</script>

<style></style>
