import { createStore } from 'vuex'
import talentsModule from './modules/talents/index.js'
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    talents: talentsModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c1'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
})

export default store