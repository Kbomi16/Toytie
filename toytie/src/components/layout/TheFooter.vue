<template>
  <footer>
    <div class="footer-left">
      <img src="/img/TT4.png" alt="logo">
      <p>All That Developer.</p>
    </div>
    <div class="footer-right">
      <nav>
        <ul>
          <li><a href="#">회사소개</a></li>
          <li><a href="#">공지사항</a></li>
          <li><a href="#">연락처</a></li>
          <li><a href="#">광고문의</a></li>
          <li><a href="#">채용</a></li>
          <li><a href="#">버그제보</a></li>
          <li><a href="#">개인정보 처리방침</a></li>
          <li><a href="#">서비스 이용약관</a></li>
        </ul>
      </nav>
      <div class="text">
        <p>상호명: (주)토이타이 | 대표명 : 김보미 | 사업자등록번호 : 2023541005 | 문의 : kimbomi2172@naver.com</p>
        <p>통신판매업신고번호 : 제 2023-서울 ㅣ 주소: 서울 서대문구 명지전문대 정보통신공학과</p>
        <p>&copy; 2023 (주)토이타이, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@font-face {
  font-family: 'AppleSDGothicNeoR';
  src: url(@/assets/fonts/AppleSDGothicNeoR.ttf);
}

footer {
  padding: 3rem 25rem;
  background-color: #AD8B73;
  text-align: center;
  color: #fff;
  font-size: 15px;
  font-family: 'AppleSDGothicNeoR', sans-serif;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.footer-left {
  float: left;
}

.footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex;
  float:right;
}

ul {
  list-style: none;
  display: flex;
  gap: 50px;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
  color: #fff;
}

.text {
  margin-top: 10px;
  font-size: 12px;
  text-align: left;
}

img {
  width: 80px;
  height: 80px;
}

/* 반응형 디자인을 위한 Media Query */
@media screen and (max-width: 768px) {
  footer {
    padding: auto;
  }
  .footer-left,
  .footer-right {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left {
    margin-bottom: 20px;
  }

  .footer-right {
    margin-top: 20px;
    align-items: flex-start
  }

  ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  .text {
    text-align: center;
  }
}
</style>
