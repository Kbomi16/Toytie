<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <v-container class="main-container" fluid fill-height>
    <div class="main-content">
      <div class="text-container">
        <h2>멋진 아이디어, <br />
          함께 실현하고 완성하는<br />
          ToyTie 프로젝트 팀매칭 플랫폼<br />
        </h2>
        <p>토이 프로젝트를 위한 매칭 플랫폼으로,<br />
          프로젝트를 진행하고 싶은 개인들이 참여하고,<br />
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
      <div class="box">
        <div class="content">
          <h3>운동시설 홍보 플랫폼</h3>
          <h5>보리밥</h5>
          <p class="time">프로젝트 기간: 2023.02.03 - 2023.5.31</p>
        </div>
        <div class="skills">
          <div class="skill">Kotlin</div>
          <div class="skill">MongoDB</div>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h3>사이즈 고민 없는 쇼핑 앱</h3>
          <h5>아항</h5>
          <p class="time">프로젝트 기간: 2023.01.11 ~ </p>
        </div>
        <div class="skills">
          <div class="skill">iOS</div>
          <div class="skill">Swift</div>
        </div>
      </div>
      <div class="box">
        <div class="content">
          <h3>캐릭터 제작 사이드 프로젝트</h3>
          <h5>하하하</h5>
          <p class="time">프로젝트 기간: 2022.03 ~ </p>
        </div>
        <div class="skills">
          <div class="skill">React</div>
          <div class="skill">HTML</div>
        </div>
      </div>
    </div>
  </div>
  <div class="slider-container">
  <p class="title-text">✨이번주 인재 프로필✨</p>
  <div class="slider">
    <div class="box">
      <div class="content">
        <div class="info">
          <i class="material-icons">person</i>
          <h3>김보미</h3>
          <p class="time">서울시 은평구 / 24세 / 구인중</p>
        </div>
        <div class="area">프론트엔드 개발자</div>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="info">
          <i class="material-icons">person</i>
          <h3>김보파</h3>
          <p class="time">서울시 마포구 / 28세 / 구인중</p>
        </div>
        <div class="area">백엔드 개발자</div>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="info">
          <i class="material-icons">person</i>
          <h3>김보솔</h3>
          <p class="time">경기도 성남시 / 22세 / 구인중</p>
        </div>
        <div class="area">iOS 개발자</div>
      </div>
    </div>
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
    padding: 3rem 28rem;
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

  .box {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex;
    flex-wrap: wrap;
  }

  .time {
    color: gray;
    font-size: x-small;
    margin-top: 0.5rem;
  }

  .skills {
    margin-top: 2rem;
    display: flex;
  }

  .skill {
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  .icon {
    font-size: 48px;
    margin-bottom: 1rem;
  }

  .info {
    margin-bottom: 1rem;
    flex-direction: row;
    align-items: center;
  }

  .area {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 1500px) {
    .main-content {
      flex-direction: column;
      align-items: center;
    }

    .text-container {
      margin-right: 0;
      text-align: center;
    }

    .image-container {
      justify-content: center;
    }

    h2 {
      white-space: nowrap;
    }

    .slider {
      flex-direction: column;
      align-items: center;
    }

    .box {
      margin: 1rem 0;
    }
  }
</style>