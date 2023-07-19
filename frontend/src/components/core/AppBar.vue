<template>
  <div>
    <v-app-bar dense>
      <img src="../../assets/CTF_white2.svg" height="45px" width="45px" />
      <v-tabs>
        <v-tab><router-link to="/dc5v">DC5V</router-link></v-tab>

        <v-tab><router-link to="/dc12v">DC12V</router-link></v-tab>
        <v-tab><router-link to="/clk">CLK</router-link></v-tab>
        <v-tab><router-link to="/MISO">MISO</router-link></v-tab>
        <v-tab><router-link to="/MOSI">MOSI</router-link></v-tab>
        <v-tab><router-link to="/SENSOR0">SENSOR0</router-link></v-tab>
        <v-tab><router-link to="/SENSOR1">SENSOR1</router-link></v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>

      <img src="@/assets/profile.png" alt="John" height="30px" width="30px" />

      <v-icon @click="toggleDrawer">mdi-chevron-down</v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$emit("Pass");
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  gap: 0px;
  margin-right: 3px;
}
</style>
