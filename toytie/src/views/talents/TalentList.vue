<template>
  <section>
    <talent-filter @change-filter="setFilters"></talent-filter>
  </section>
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
  import TalentFilter from '@/components/talents/TalentFilter.vue'

  export default {
    components: {
      TalentItem,
      TalentFilter
    },
    data() {
      return {
        activeFilters: {
          frontend: true,
          backend: true,
          android: true,
          ios: true
        }
      }
    },
    computed: {
      filteredTalents() {
        const talents = this.$store.getters['talents/talents'] //첫번째 talents는 네임스페이스, 두번째 talents는 getter이름
        return talents.filter(talent => {
          // 프론트 엔드가 선택되고 해당 조건을 충족하는 인재가 있으면 true
          // 해당 인재를 반환된 talents 배열에 유지
          if (this.activeFilters.frontend && talent.areas.includes('frontend')) {
            return true
          }
          if (this.activeFilters.backend && talent.areas.includes('backend')) {
            return true
          }
          if (this.activeFilters.android && talent.areas.includes('android')) {
            return true
          }
          if (this.activeFilters.ios && talent.areas.includes('ios')) {
            return true
          }
        })
      },
      hasTalents() {
        return this.$store.getters['talents/hasTalents']
      }
    },
    methods: {
      setFilters(updatedFilters) {
        this.activeFilters = updatedFilters
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