export default {
  matchingTalent(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      talentId: payload.talentId,
      userAddress: payload.address,
      message: payload.message
    }
    context.commit('addRequest', newRequest)
  }
}