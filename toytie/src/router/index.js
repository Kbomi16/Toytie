import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import TalentDetail from '../views/talents/TalentDetail.vue'
import TalentList from '../views/talents/TalentList.vue';
import TalentRegister from '../views/talents/TalentRegister.vue';
import MatchingTalent from '../views/requests/MatchingTalent.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';
import ProjectList from '@/views/projects/ProjectList.vue'
import ProjectDetail from '@/views/projects/ProjectDetail.vue'
import ProjectRegister from '@/views/projects/ProjectRegister.vue'
import ApplyProject from '@/views/Prequests/ApplyProject.vue'
import NoticeView from '../views/NoticeView.vue'
import UserAuth from '@/views/auth/UserAuth.vue'
import MypageView from '../views/MypageView.vue'

const routes = [
  {
    //메인
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    //인재리스트
    path: '/talents', 
    component: TalentList 
  },
  {
    //로그인
    path: '/auth',
    component: UserAuth
  },
  {
    // 마이페이지
    path: '/mypage',
    component: MypageView
  },
  {
  //프로젝트 리스트
  path: '/projects',
  component: ProjectList
},
{ 
  //프로젝트 상세
  path: '/projects/:id', 
  component: ProjectDetail, 
  props: true,
  children: [
    {path: 'apply', 
    component: ApplyProject},
  ] },
{ 
  //프로젝트 등록
  path: '/Pregister', 
  component: ProjectRegister },
  
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
    //(요청)
    path: '/requests', 
    component: RequestReceived 
  },
  {
    // 공지사항
    path: '/notice',
    component: NoticeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
