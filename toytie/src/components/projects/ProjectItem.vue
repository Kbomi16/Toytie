<template>
  <li>
    <h3>{{ projectName }}</h3>
    <p>{{ fullName }}</p>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="projectApplyLink">Apply</base-button>
      <base-button link :to="projectDetailsLink">정보 보기</base-button>

    </div>
  </li>
</template>

<script>
  export default {
    props: ['id', 'projectName', 'fullName', 'areas'],
    computed: {
      projectApplyLink() {
        return this.$route.path + '/' + this.id + '/apply'
      },
      projectDetailsLink() {
        return this.$route.path + '/' + this.id
      }
    }
  }
</script>

<style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h3,
  h4 {
    margin: 0.5rem 0;
  }

  div {
    margin: 0.5rem 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
</style>