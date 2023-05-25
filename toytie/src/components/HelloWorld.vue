<template>
  <v-container class="main-container" fluid fill-height>
    <div class="main-content">
      <div class="text-container">
        <h2>멋진 아이디어, <br/>
        함께 실현하고 완성하는<br/>
        ToyTie 프로젝트 팀매칭 플랫폼<br/>
        </h2>
        <p>토이 프로젝트를 위한 매칭 플랫폼으로,<br/>
        프로젝트를 진행하고 싶은 개인들이 참여하고,<br/>
        함께 하고 싶은 파트너를 찾아 함께 프로젝트를 시작할 수 있도록 도와줍니다.
        </p>
      </div>
      <div class="image-container">
        <img src="/img/TT4.png" alt="말하는 감자 TT">
      </div>
    </div>
  </v-container>
  <div class="slider-container">
    <p class="title-text">✨이번주 인기의 프로젝트 팀✨</p>
      <div class="slider">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        </div>
      </div>
      <div class="slider-container">
    <p class="title-text">✨이번주 인재 프로필✨</p>
      <div class="slider">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        </div>
      </div>
</template>

<style scoped>
* {
  font-family: 'AppleSDGothicNeoR', sans-serif;
}
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  padding: 1rem 10rem;
}

.slider {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  margin-bottom: 1rem;
  justify-content: center;
}

.box {
  flex: 0 0 auto;
  width: 250px;
  height: 250px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 1rem;
}

.title-text {
  font-weight: 600;
  text-align: left;
}
.main-container {
  font-family: 'AppleSDGothicNeoR', sans-serif;
  background-color: #AD8B73;
  padding: 3rem 15rem;
}

.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-container {
  flex: 1;
  margin-right: 2rem;
  color: #fff;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

h2 {
  margin: 0.5rem 0;
}

p {
  margin: 1rem 0;
}

img {
  width: 300px;
  height: 300px;
}

</style>
