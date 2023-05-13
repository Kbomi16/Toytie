export default {
  talents(state) {
    return state.talents
  },
  hasTalents(state) {
    return state.talents && state.talents.length > 0
  }
}