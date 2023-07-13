<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="6"
        ><Machine-temperature></Machine-temperature
      ></v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xl="6">
        <Live-temperature-vue></Live-temperature-vue
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import LiveTemperatureVue from "../components/safety/LiveTemperature.vue";
import MachineTemperature from "@/components/safety/MachineTemperature.vue";
export default {
  components: {
    LiveTemperatureVue,
    MachineTemperature,
  },
};
</script>

<style></style>
