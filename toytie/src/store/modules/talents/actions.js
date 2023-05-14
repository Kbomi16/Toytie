export default {
  async registerTalent(context, data) {
    const userId = context.rootGetters.userId;
    const talentData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/talents/${userId}.json`,
      {
        method: 'PUT',
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
      `https://vue-http-demo-85e9e.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const talents = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        areas: responseData[key].areas
      };
      talents.push(coach);
    }

    context.commit('setTalents', talents);
    context.commit('setFetchTimestamp');
  }
};
