<template>
  <section>
    <base-card>
    <h2>프로젝트 등록하기</h2>
    <project-form @save-data="saveData"></project-form>
  </base-card>
  </section>
</template>

<script>
import ProjectForm from '@/components/projects/ProjectForm.vue'

export default {
  components: {
    ProjectForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('projects/registerProject', data)
      this.$router.replace('projects')
    }
  }
}
</script>

<style>
* {
  font-family: 'AppleSDGothicNeoR', sans-serif;
}
</style>