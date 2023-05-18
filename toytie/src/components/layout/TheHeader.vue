<template>
  <header>
    <nav>
      <h1><router-link to="/">ToyTie</router-link></h1>
      <ul>
        <li><router-link to="/projects">프로젝트</router-link></li>
        <li class="separator">|</li>
        <li><router-link to="/talents">인재탐색</router-link></li>
        <li class="separator">|</li>
        <li><router-link to="/study">스터디</router-link></li>
        <li class="separator">|</li>
        <li><router-link to="/info">공지사항</router-link></li>
        <li class="separator">|</li>
        <li><router-link to="/requests">마이페이지</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@font-face {
  font-family: 'AppleSDGothicNeoR';
  src: url(@/assets/fonts/AppleSDGothicNeoR.ttf);
}
header {
  width: 100%;
  height: 5rem;
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
</style>
