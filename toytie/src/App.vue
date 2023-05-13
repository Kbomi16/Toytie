<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@font-face {
  font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  src: url(../fonts/AppleSDGothicNeoR.ttf);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
