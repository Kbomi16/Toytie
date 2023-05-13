import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced:true,
  state() {
    return {
      talents: [
        {
          id: 'c1',
          firstName: '보미',
          lastName: '김',
          areas: ['frontend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!"
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'backend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.'
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}