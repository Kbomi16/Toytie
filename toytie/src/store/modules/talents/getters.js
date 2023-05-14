export default {
  talents(state) {
    return state.talents;
  },
  hasTalents(state) {
    return state.talents && state.talents.length > 0;
  },
  isTalent(_, getters, _2, rootGetters) {
    const talents = getters.talents;
    const userId = rootGetters.userId;
    return talents.some(talent => talent.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};