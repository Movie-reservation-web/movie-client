import CategoryService from "@/services/category.service";

export default {
  namespaced: true,
  state: {
  },
  actions: {
    getGenderType({ commit }) {
      return CategoryService.getGenderType().then((data) => {
        commit("getGenderTypes", data);
        return Promise.resolve(data);
      });
    },
  },
  mutations: {
    getGenderTypes(state, data) {
      state.genderTypes = data;
    },
  },
  getters: {
    genderTypes: (state) => state.getGenderTypes,
  },
};
