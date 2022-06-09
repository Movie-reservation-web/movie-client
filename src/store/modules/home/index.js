import HomeService from "@/services/home.service";

export default {
  namespaced: true,
  state: {},
  actions: {
    getSlideInfos({ commit }) {
      return HomeService.getSlideInfos().then((data) => {
        commit("getSideInfos", data);
        return Promise.resolve(data);
      });
    },
    getTopReviews({ commit }) {
      return HomeService.getTopReviews().then((data) => {
        commit("getTopReviews", data);
        return Promise.resolve(data);
      });
    },
    getTopSchedules({ commit }) {
      return HomeService.getTopSchedules().then((data) => {
        commit("getTopSchedules", data);
        return Promise.resolve(data);
      });
    },
  },
  mutations: {
    getSideInfos(state, data) {
      state.slideInfos = data;
    },
    getTopReviews(state, data) {
      state.topReviews = data;
    },
    getTopSchedules(state, data) {
      state.topSchedules = data;
    },
  },
  getters: {
    slideInfos: (state) => state.getSlideInfos,
    topReviews: (state) => state.getTopReviews,
    topSchedules: (state) => state.getTopSchedules,
  },
};
