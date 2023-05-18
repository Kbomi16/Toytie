<template>
  <v-app>
    <the-header />
    <v-main>
      <router-view/>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  },

  data: () => ({
    //
  }),
}
</script>
