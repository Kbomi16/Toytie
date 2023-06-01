<template>
  <div>
    <h2>공지사항</h2>
    <base-card>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        <h3>{{ notice.title }}</h3>
        <p>{{ notice.content }}</p>
        <small>{{ formatDate(notice.date) }}</small>
      </li>
    </ul>
  </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notices: [
        {
          id: 1,
          title: '서비스 업데이트 안내',
          content: '새로운 기능이 추가되었습니다.',
          date: '2023-05-20'
        },
        {
          id: 2,
          title: '서버 점검 일정 안내',
          content: '2023년 5월 25일에 서버 점검이 예정되어 있습니다.',
          date: '2023-05-18'
        },
        // 다른 공지사항들...
      ]
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 20px;
  margin: 5rem auto;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

p {
  margin-bottom: 5px;
}

small {
  font-size: 12px;
  color: #999;
}
</style>
