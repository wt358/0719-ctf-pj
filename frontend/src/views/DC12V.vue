<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>DC12V 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarDc12v></BarDc12v>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>DC12V 이상치 여부</h3>

          <CircleDc12v></CircleDc12v>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleDc12v from "@/components/chart/circle/CircleDc12v.vue";
import BarDc12v from "@/components/chart/bar/BarDc12v.vue";

export default {
  components: {
    CircleDc12v,
    BarDc12v,
  },
  created() {
    this.$store.dispatch("fetchDc12v_status");
    this.$store.dispatch("fetchDc12v_anomal");
  },
};
</script>

<style></style>
