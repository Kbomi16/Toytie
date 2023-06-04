<template>
  <div>
    <h2>마이페이지</h2>
    <base-card>
      <div v-if="isLoggedIn">
        <div class="info">
        <base-button v-if="isLoggedIn" @click="logout">로그아웃</base-button>
      </div>
        <section>
    <base-card>
    <header>
      <h2>요청 리스트</h2>
    </header>
    <ul v-if="hasRequests">
      <request-item 
      v-for="req in receivedRequests" 
      :key="req.id" 
      :address="req.userAddress" 
      :message="req.message"></request-item>
    </ul>
    <h3 v-else style="text-align: center;">아직 받은 요청이 없습니다.</h3>
  </base-card>
  </section>
      </div>
      <div v-else>
        <p style="text-align: center;">로그인이 필요합니다.</p>

        <router-link to="/auth"><p style="text-align: center;">로그인 하기</p></router-link>
        
      </div>
    </base-card>
  </div>
</template>

<script>
import RequestItem from '@/components/requests/RequestsItem.vue'


export default {
  components: {
    RequestItem
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    receivedRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  },
  methods: {
    logout() {
      // 로그아웃 처리 로직
      // 예시: 사용자 상태를 초기화하고 로그인 페이지로 이동
      this.$store.dispatch('logout');
      this.$router.push('/auth');
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  margin: 5rem auto;
  text-align: center;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}


</style>
