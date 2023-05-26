<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #AD8B73;
  border: 1px solid #AD8B73;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #AD8B73;
  border-color: #AD8B73;
}

.flat {
  background-color: transparent;
  color: #AD8B73;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #AD8B73;
  color: #AD8B73;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #bdb0a7;
}
</style>