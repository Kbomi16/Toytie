<template>
  <div>
    <base-dialog :show="!!error" title="에러 발생" @close="handleError"></base-dialog>
    <p>{{ error }}</p>
  <section>
    <talent-filter @change-filter="setFilters"></talent-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadTalents(true)">새로고침</base-button>
        <base-button v-if="!isTalent || !isLoading" link to="/register">인재 등록하기</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
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
</div>
</template>

<script>
import TalentItem from '@/components/talents/TalentItem.vue';
import TalentFilter from '@/components/talents/TalentFilter.vue'

export default {
  components: {
    TalentItem,
    TalentFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        android: true,
        ios: true
      }
    }
  },
  computed: {
    isTalent() {
      return this.$store.getters['talents/isTalent'];
    },
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
      return !this.isLoading && this.$store.getters['talents/hasTalents']
    }
  },
  mounted() {
    console.log('mounted')
    this.loadTalents()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadTalents(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('talents/loadTalents', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || '잘못되었습니다!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
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
