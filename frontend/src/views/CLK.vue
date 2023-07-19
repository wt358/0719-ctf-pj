<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>CLK 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarClk></BarClk>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>CLK 이상치 여부</h3>

          <CircleClk></CircleClk>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleClk from "@/components/chart/circle/CircleClk.vue";
import BarClk from "@/components/chart/bar/BarClk.vue";

export default {
  components: {
    CircleClk,
    BarClk,
  },
  created() {
    this.$store.dispatch("fetchclk_status");
    this.$store.dispatch("fetchclk_anomal");
  },
};
</script>

<style></style>
