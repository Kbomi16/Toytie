<template>
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
    <h3 v-else>아직 받은 요청이 없습니다.</h3>
  </base-card>
  </section>
</template>

<script>
import RequestItem from '@/components/requests/RequestsItem.vue'

export default {
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
