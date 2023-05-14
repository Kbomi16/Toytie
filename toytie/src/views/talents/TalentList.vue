<template>
  <section>필터</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">새로고침</base-button>
      <base-button link to="/register">인재 등록하기</base-button>
    </div>
    <ul v-if="hasTalents">
      <talent-item 
      v-for="talent in filteredTalents" 
      :key="talent.id" 
      :id="talent.id"
      :first-name="talent.firstName"
      :last-name="talent.lastName"
      :areas="talent.areas"
      ></talent-item>
    </ul>
    <h3 v-else>인재가 없습니다.</h3>
  </base-card>
  </section>
</template>

<script>
  import TalentItem from '@/components/talents/TalentItem.vue';

  export default {
    components: {
      TalentItem
    },
    computed: {
      filteredTalents() {
        return this.$store.getters['talents/talents'] //첫번째 talents는 네임스페이스, 두번째 talents는 getter이름
      },
      hasTalents() {
        return this.$store.getters['talents/hasTalents']
      }
    }
  }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>