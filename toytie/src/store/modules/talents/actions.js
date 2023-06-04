export default {
  async registerTalent(context, data) {
    const userId = context.rootGetters.userId;
    const talentData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      areas: data.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://toytie-default-rtdb.firebaseio.com/talents/${userId}.json?auth=` + token,
      {
        // 데이터가 존재하면 덮어쓰고 존재하지 않으면 생성하라고 firebase에 알림
        method: 'PUT',
        // json 문자열로 변환한 talentDate를 첨부함
        body: JSON.stringify(talentData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerTalent', {
      ...talentData,
      id: userId
    });
  },
  async loadTalents(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://toytie-default-rtdb.firebaseio.com/talents.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '데이터를 가져오지 못했습니다!');
      throw error;
    }

    const talents = [];

    for (const key in responseData) {
      const talent = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        areas: responseData[key].areas
      };
      talents.push(talent);
    }

    context.commit('setTalents', talents);
    context.commit('setFetchTimestamp');
  }
};
