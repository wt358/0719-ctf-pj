<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>MISO 상태 OK, NON-OK</h3>
          <h4>전압 하한상한 벗어난 비율</h4>
          <BarMiso></BarMiso>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-card class="pa-3" outlined style="height: 100%">
          <h3>MISO 이상치 여부</h3>

          <CircleMiso></CircleMiso>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleMiso from "@/components/chart/circle/CircleMiso.vue";
import BarMiso from "@/components/chart/bar/BarMiso.vue";

export default {
  components: {
    CircleMiso,
    BarMiso,
  },
  created() {
    this.$store.dispatch("fetchmiso_status");
    this.$store.dispatch("fetchmiso_anomal");
  },
};
</script>

<style></style>
