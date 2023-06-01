export default {
  registerProject(state, payload) {
    state.projects.push(payload)
  },
  setProjects(state, payload) {
    state.projects = payload
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime()
  }
}