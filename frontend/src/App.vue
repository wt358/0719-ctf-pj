<template>
  <v-app>
    <core-app-bar class="sticky" @Pass="ConnectSidebar" />
    <v-navigation-drawer
      right
      app
      v-model="drawer"
      fixed
      style="padding-top: 100px">
      <v-list>
        <v-list-item>
          <v-img
            :src="require('@/assets/profile.png')"
            contain
            height="50px"
            width="50px"></v-img>
        </v-list-item>

        <v-list-item-action>
          <v-col class="center">
            <div style="text-align: center">
              <v-list-item-title> Celia </v-list-item-title>
              <v-list-item-subtitle>
                {{ this.nameAndRole.Celia }}
              </v-list-item-subtitle>
            </div>
          </v-col>
        </v-list-item-action>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">today</v-list-item-title>
            <v-list-item-subtitle>
              <v-icon class="icon-gap">mdi-calendar</v-icon>
              {{ this.todayDate }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-card style="width: 260px" class="mt-10 mb-10" color="#F5F5F5">
            <v-col offset-md="1">공정시작시각</v-col>
            <p class="text-center">2023.06.20</p>
            <v-divider></v-divider>
            <v-col offset-md="1">공정중단시각</v-col>
            <p class="text-center">2023.07.11</p>
          </v-card>
        </v-list-item>
        <v-list nav dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <p class="black--text">Notification</p>
            <v-list-item v-for="(item, i) in this.alarm" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <core-view></core-view>
    </v-main>
  </v-app>
</template>

<script>
import CoreAppBar from "@/components/core/AppBar.vue";
import CoreView from "@/components/core/View.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    CoreAppBar,
    CoreView,
  },
  computed: {
    ...mapState(["nameAndRole", "todayDate", "alarm", "dc5_status_ratio"]),
  },
  created() {
    this.$store.dispatch("fetchstb_status");
    this.$store.dispatch("fetchstb_anomal");
    this.$store.dispatch("fetchsensor0_status");
    this.$store.dispatch("fetchsensor0_anomal");
    this.$store.dispatch("fetchsensor1_status");
    this.$store.dispatch("fetchsensor1_anomal");
  },
  methods: {
    ConnectSidebar() {
      this.drawer = !this.drawer;
    },
  },
  data() {
    return {
      selectedItem: 0,
    };
  },
};
</script>

<style>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 1000;
}
</style>
