export default {
  projects(state) {
    return state.projects;
  },
  hasProjects(state) {
    return state.projects && state.projects.length > 0;
  },
  isProject(_, getters, _2, rootGetters) {
    const projects = getters.projects;
    const userId = rootGetters.userId;
    return projects.some(project => project.id === userId);
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