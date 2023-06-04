import { createStore } from 'vuex'
import talentsModule from './modules/talents/index.js'
import requestsModule from './modules/requests/index.js';
import projectsModule from './modules/projects/index.js'
import PrequestsModule from './modules/Prequests/index.js';
import authModel from './modules/auth/index.js'

const store = createStore({
  modules: {
    talents: talentsModule,
    requests: requestsModule,
    projects: projectsModule,
    Prequests: PrequestsModule,
    auth: authModel
  },
})

export default store