<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="20"
        />

        <h4>Dataviz</h4> 
      </div>

      <v-spacer></v-spacer>

      <v-tabs align-with-title class="pl-5">
        <v-tab to='/'>Dashboard</v-tab>
        <v-tab to='/editor'>Data Editor</v-tab>
        <v-tab to='/search'>Smart Search</v-tab>
      </v-tabs>
     

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
