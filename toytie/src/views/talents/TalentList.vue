<template>
  <section>
    <talent-filter @change-filter="setFilters"></talent-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="refresh">새로고침</base-button>
        <base-button v-if="!isCoach && !isLoading" mode="outline" link to="/register">인재 등록하기</base-button>
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
      const talents = this.$store.getters['talents/talents']
      return talents.filter(talent => {
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
    },
    refresh() {
      // 새로고침 동작 구현
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'AppleSDGothicNeoR', sans-serif;
}
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
