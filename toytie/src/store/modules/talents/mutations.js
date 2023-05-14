export default {
  registerTalent(state, payload) {
    state.talents.push(payload);
  },
  setTalents(state, payload) {
    state.talents = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};