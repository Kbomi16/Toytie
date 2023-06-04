<template>
  <section>
    <base-card>
    <h3>{{ projectName }}</h3>
    <p>{{ fullName }}</p>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>

  </section>
  <section>
    <base-card>
      <header>
        <h2>관심 있으신가요? 지금 신청해보세요!</h2>
        <base-button link :to="applyLink">Apply</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
</template>
<script>
  export default {
    props: ['id'],
    data() {
      return {
        selectedProject: null
      }
    },
    computed: {
  areas() {
    return this.selectedProject ? this.selectedProject.areas : [];
  },
  description() {
    return this.selectedProject ? this.selectedProject.description : '';
  },
  projectName() {
    return this.selectedProject ? this.selectedProject.projectName : '';
  },
  fullName() {
    return this.selectedProject ? this.selectedProject.fullName : '';
  },
  applyLink() {
    return this.$route.path  + '/apply';
  }
},

    // vuex에 접근해 id에 대한 구체적 데이터를 페칭해 selectedProject와 같다고 설정할거임
    created() {
      this.selectedProject = this.$store.getters['projects/projects']
        .find(project => project.id === this.id) //모든 프로젝트들을 검색한 후, id 비교
    }
  }
</script>

