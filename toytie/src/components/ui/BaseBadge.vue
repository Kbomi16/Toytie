<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'AppleSDGothicNeoR';
  src: url(@/assets/fonts/AppleSDGothicNeoR.ttf);
}

* {
  font-family: 'AppleSDGothicNeoR', sans-serif;
}

.badge {
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: black;
  color: white;
}

.backend {
  background-color: black;
  color: white;
}

.career {
  background-color: black;
  color: white;
}
</style>