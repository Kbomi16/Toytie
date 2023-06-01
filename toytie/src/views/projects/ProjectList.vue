<template>
  <div>
    <base-dialog :show="!!error" title="에러 발생" @close="handleError"></base-dialog>
    <p>{{ error }}</p>
  <section>
    <project-filter @change-filter="setFilters"></project-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadProjects(true)">새로고침</base-button>
        <base-button v-if="!isProject || !isLoading" link to="/Pregister">프로젝트 등록하기</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="hasProjects">
        <project-item
          v-for="project in filteredProjects"
          :key="project.id"
          :id="project.id"
          :first-name="project.firstName"
          :last-name="project.lastName"
          :areas="project.areas"
        ></project-item>
      </ul>
      <h3 v-else>프로젝트가 없습니다.</h3>
    </base-card>
  </section>
</div>
</template>

<script>
import ProjectItem from '@/components/projects/ProjectItem.vue';
import ProjectFilter from '@/components/projects/ProjectFilter.vue'

export default {
  components: {
    ProjectItem,
    ProjectFilter,
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
    isProject() {
      return this.$store.getters['projects/isTalent'];
    },
    filteredProjects() {
      const projects = this.$store.getters['projects/projects']
      return projects.filter(project => {
        if (this.activeFilters.frontend && project.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && project.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.android && project.areas.includes('android')) {
          return true
        }
        if (this.activeFilters.ios && project.areas.includes('ios')) {
          return true
        }
      })
    },
    hasProjects() {
      return !this.isLoading && this.$store.getters['projects/hasProjects']
    }
  },
  created() {
    this.loadProjects()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadProjects(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('projects/loadProjects', {
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
