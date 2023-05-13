import { createStore } from 'vuex'
import talentsModule from './modules/talents/index.js'

const store = createStore({
  modules: talentsModule
})

export default store