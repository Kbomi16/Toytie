import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import TalentDetail from '../views/talents/TalentDetail.vue'
import TalentList from '../views/talents/TalentList.vue';
import TalentRegister from '../views/talents/TalentRegister.vue';
import MatchingTalent from '../views/requests/MatchingTalent.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';

const routes = [
  {
    //메인
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    //로그인
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  { 
    //인재리스트
    path: '/talents', 
    component: TalentList 
  },
  { 
    //인재 상세
    path: '/talents/:id', 
    component: TalentDetail, 
    props: true,
    children: [
      {path: 'matching', 
      component: MatchingTalent},
    ] },
  { 
    //인재 등록
    path: '/register', 
    component: TalentRegister },
  { 
    //인재 받기 요청
    path: '/requests', 
    component: RequestReceived 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
