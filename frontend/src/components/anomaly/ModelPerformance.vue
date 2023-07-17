<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"></v-data-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["mpHeaders"]),
    ...mapState(["mpDateSets"]),
  },
};
</script>

<style></style>
