<template>
  <li>
    <div>
      <a :href="addressLink">{{ address }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>

export default {
  props: ['address', 'message'],
  computed: {
    addressLink() {
      return this.address
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #AD8B73;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #AD8B73;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
