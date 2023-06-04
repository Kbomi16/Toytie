export default {
  async registerProject(context, data) {
    const projectData = {
      projectName: data.first,
      fullName: data.last,
      description: data.desc,
      areas: data.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://toytie-default-rtdb.firebaseio.com/projects.json?auth=` + token,
      {
        method: 'POST',
        body: JSON.stringify(projectData)
      }
    );

    if (!response.ok) {
      const error = new Error('프로젝트 등록에 실패했습니다.');
      throw error;
    }

    const responseData = await response.json();
    const projectId = responseData.name; // 새로 생성된 프로젝트의 고유한 ID

    context.commit('registerProject', {
      ...projectData,
      id: projectId
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
        projectName: responseData[key].projectName,
        fullName: responseData[key].fullName,
        description: responseData[key].description,
        areas: responseData[key].areas
      };
      projects.push(project);
    }

    context.commit('setProjects', projects);
    context.commit('setFetchTimestamp');
  }
};
