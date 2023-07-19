<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>DC5V 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarDc5v></BarDc5v>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>DC5V 이상치 여부</h3>

          <CircleDc5v></CircleDc5v>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleDc5v from "@/components/chart/circle/CircleDc5v.vue";
import BarDc5v from "@/components/chart/bar/BarDc5v.vue";

export default {
  components: {
    CircleDc5v,
    BarDc5v,
  },
  created() {
    this.$store.dispatch("fetchDc5v_status");
    this.$store.dispatch("fetchDc5v_anomal");
  },
};
</script>

<style></style>
