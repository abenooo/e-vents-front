<template>
  <!-- <Layout v-slot="{ searchText }"> -->
  <!-- <v-tabs v-model="tab" grow> -->
  <Layout>
    <v-container>
      <v-row>
        <v-col sm="6" offset-sm="3">
          <v-tabs v-model="tab" grow>
            <v-tab>All Events</v-tab>
            <v-tab>Live Music</v-tab>
            <v-tab>Coding Events</v-tab>
          </v-tabs>
          <v-card class="mx-auto" max-width="400">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Top western road trips </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      tab: 0,
    };
  },
  watch: {
    tab(val) {
      if (tab === 0) {
        this.showAllEvents();
      } else {
        this.showAllEventsByType();
      }
    },
  },
  methods: {
    showAllEvents() {
      console.log("all");
    },
    showAllEventsByType() {
      console.log("type");
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
