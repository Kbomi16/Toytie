export default {
  registerTalent(state, payload) {
    state.talents.push(payload)
  },
  setTaletns(state, payload) {
    state.talents = payload
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime()
  }
}