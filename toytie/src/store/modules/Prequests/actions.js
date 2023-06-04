export default {
  async matchingProject(context, payload) {
    const newRequest = {
      userAddress: payload.address,
      message: payload.message,
      projectId: payload.projectId // 프로젝트 아이디 추가
    };
    const response = await fetch(`https://toytie-default-rtdb.firebaseio.com/requests.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '요청 보내기에 실패했습니다.');
      throw error;
    }

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const projectId = context.rootGetters.projectId; // 변경된 부분: userId -> projectId
    const token = context.rootGetters.token;
    const response = await fetch(`https://toytie-default-rtdb.firebaseio.com/requests.json?auth=` + token);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '요청을 못보냈습니다.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      if (responseData[key].projectId === projectId) {
        const request = {
          id: key,
          projectId: projectId, // talentId -> projectId
          userAddress: responseData[key].userAddress,
          message: responseData[key].message
        };
        requests.push(request);
      }
    }

    context.commit('setRequests', requests);
  }
};
