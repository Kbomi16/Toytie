<template>
  <v-app id="app">
    <the-header :class="{ fixed: isHeaderFixed }"/>
    <v-main>
      <router-view></router-view>
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
    isHeaderFixed: false, // 헤더의 상태를 저장할 데이터 속성 추가
  }),

  mounted() {
    window.addEventListener('scroll', this.handleHeaderScroll); // 스크롤 이벤트 리스너 등록
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleHeaderScroll); // 스크롤 이벤트 리스너 제거
  },

  methods: {
    handleHeaderScroll() {
      // 스크롤 위치를 확인하여 헤더의 상태를 변경
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isHeaderFixed = scrollTop > 0;
    },
  },
};
</script>

<style scoped>
header {
  position: static;
  transition: top 1s ease; 
}

header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
