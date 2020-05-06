import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from '@/common/utilities';

Vue.use(Vuex);

const SET_CATEGORIES = 'SET_CATEGORIES';

const category = {
  namespaced: false,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, data) {
      state.categories = data;
    }
  },
  actions: {
    async getCategories({ commit }) {
      try {
        const response = await HTTP.get('api/categories');
        commit(SET_CATEGORIES, response.data);
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  getters: {
    categories(state) {
      return state.categories;
    }
  }
};

export default category;
