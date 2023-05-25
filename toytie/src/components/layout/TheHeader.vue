<template>
  <header>
    <nav>
      <h1><router-link to="/">ToyTie</router-link></h1>
      <v-app-bar-nav-icon v-if="isMobile && !mobileMenuOpen" @click="toggleMenu" />
      <v-menu v-if="isMobile && mobileMenuOpen" v-model="mobileMenuOpen" bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path" @click="navigateTo(item.path)">
  <v-list-item-title>{{ item.title }}</v-list-item-title>
</v-list-item>

        </v-list>
      </v-menu>
      <ul v-if="!isMobile || mobileMenuOpen">
        <li v-for="item in menuItems" :key="item.title">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      mobileMenuOpen: false,
      menuItems: [
        { title: '프로젝트', path: '/projects' },
        { title: '인재탐색', path: '/talents' },
        { title: '스터디', path: '/study' },
        { title: '공지사항', path: '/info' },
        { title: '마이페이지', path: '/requests' }
      ]
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkWindowSize);
    this.checkWindowSize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed
    },
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'AppleSDGothicNeoR';
  src: url(@/assets/fonts/AppleSDGothicNeoR.ttf);
}
header {
  padding: 2rem 10rem;
  width: 100%;
  background-color: #AD8B73;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoR', sans-serif;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border-bottom: 2px solid white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.separator {
  color: white;
  margin: 0 0.25rem;
}

@media (max-width: 768px) {
  header ul {
    display: none;
  }
}
</style>
