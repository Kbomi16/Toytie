import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      talents: [
        {
          id: 'c1',
          firstName: '보미',
          lastName: '김',
          areas: ['vue', 'javascript', 'frontend'],
          description:
            "현재 대학생이고 프론트엔드 개발자가 되고 싶습니다.",
        },
        {
          id: 'c2',
          firstName: '보파',
          lastName: '김',
          areas: ['java', 'mysql', 'backend'],
          description:
          "현재 대학생이고 백엔드 개발자가 되고 싶습니다."        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
