export default {
  async registerProject(context, data) {
    const userId = context.rootGetters.userId;
    const projectData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      areas: data.areas
    };

    const response = await fetch(
      `https://toytie-default-rtdb.firebaseio.com/talents/${userId}.json`,
      {
        // 데이터가 존재하면 덮어쓰고 존재하지 않으면 생성하라고 firebase에 알림
        method: 'PUT',
        // json 문자열로 변환한 talentDate를 첨부함
        body: JSON.stringify(projectData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerProject', {
      ...projectData,
      id: userId
    });
  },
  async loadProjects(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://toytie-default-rtdb.firebaseio.com/projects.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || '데이터를 가져오지 못했습니다!');
      throw error;
    }

    const projects = [];

    for (const key in responseData) {
      const project = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        areas: responseData[key].areas
      };
      projects.push(project);
    }

    context.commit('setProjects', projects);
    context.commit('setFetchTimestamp');
  }
};
