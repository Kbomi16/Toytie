<template>
  <section>
    <base-card>
    <h2>인재 등록하기</h2>
    <talent-form @save-data="saveData"></talent-form>
  </base-card>
  </section>
</template>

<script>
import TalentForm from '@/components/talents/TalentForm.vue'

export default {
  components: {
    TalentForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('talents/registerTalent', data)
      this.$router.replace('talents')
    }
  }
}
</script>

<style>
* {
  font-family: 'AppleSDGothicNeoR', sans-serif;
}
</style>