<template>
  <v-card elevation="1" rounded height="500px" outlined class="pa-3">
    <v-card-title>모델별 Summary</v-card-title>
    <v-select label="Select" :items="items"></v-select>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: ["LSTM", "AutoEncoder"],
    };
  },
};
</script>

<style></style>
