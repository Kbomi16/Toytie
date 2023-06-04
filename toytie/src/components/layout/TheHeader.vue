<template>
  <header :class="{ fixed: isHeaderFixed }">
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
          <v-list-item v-for="item in getMenuItems" :key="item.title" :to="item.path" @click="navigateTo(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <ul v-if="!isMobile || mobileMenuOpen">
        <li v-for="item in getMenuItems" :key="item.title" @click="navigateTo(item)">
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
        { title: '공지사항', path: '/notice' }
      ],
      authMenuItems: [
        { title: '마이페이지', path: '/mypage' },
      ],
      guestMenuItems: [
        { title: '로그인/회원가입', path: '/auth' },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    getMenuItems() {
      if (this.isLoggedIn) {
        return this.menuItems.concat(this.authMenuItems);
      } else {
        return this.menuItems.concat(this.guestMenuItems);
      }
    }
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
      this.isMobile = window.innerWidth < 1500;
    },
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    navigateTo(item) {
      if (!this.isLoggedIn && item.path !== '/auth') {
        if (confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')) {
          this.$router.push('/auth');
        } else {
          this.$router.push('/');
        }
        return;
      }
      this.$router.push(item.path);
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
  padding: 2rem 25rem;
  width: 100%;
  background-color: #AD8B73;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoR', sans-serif;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: top 1s ease;
}
header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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

@media (max-width: 1500px) {
  header ul {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #AD8B73;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }

  header ul li {
    margin: 1rem 0;
  }

  header nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
}
</style>
