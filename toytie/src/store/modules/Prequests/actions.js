export default {
  async matchingProject(context, payload) {
    const newRequest = {
      userAddress: payload.address,
      message: payload.message
    };
    const response = await fetch(`https://toytie-default-rtdb.firebaseio.com/requests/${payload.talentId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '요청 보내기에 실패했습니다.');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.projectId = payload.projectId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const projectId = context.rootGetters.userId;
    const response = await fetch(`https://toytie-default-rtdb.firebaseio.com/requests/${projectId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '요청을 못보냈습니다.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        talentId: projectId,
        userAddress: responseData[key].userAddress,
        message: responseData[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};