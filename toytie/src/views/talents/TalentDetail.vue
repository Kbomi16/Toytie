<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>

  </section>
  <section>
    <base-card>
      <header>
        <h2>관심 있으신가요? 지금 매칭해보세요!</h2>
        <base-button link :to="matchingLink">Matching</base-button>
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
        selectedTalent: null
      }
    },
    computed: {
      fullName() {
        return this.selectedTalent.firstName + this.selectedTalent.lastName
      },
      areas() {
        return this.selectedTalent.areas
      },
      description() {
        return this.selectedTalent.description
      },
      matchingLink() {
        return this.$route.path  + '/matching'
      }
    },
    // vuex에 접근해 id에 대한 구체적 데이터를 페칭해 selectedTalent와 같다고 설정할거임
    created() {
      this.selectedTalent = this.$store.getters['talents/talents']
        .find(talent => talent.id === this.id) //모든 인재들을 검색한 후, id 비교
    }
  }
</script>