import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from '@/common/utilities';

Vue.use(Vuex);

const SET_RECIPES = 'SET_RECIPES';

const recipe = {
  namespaced: false,
  state: {
    recipes: []
  },
  mutations: {
    SET_RECIPES(state, data) {
      state.recipes = data;
    }
  },
  actions: {
    async getRecipes({ commit }, categoryid) {
      try {
        const response = await HTTP.get(`/api/categories/${categoryid}/recipes`);
        commit(SET_RECIPES, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async getRecipe({ commit }, id) {
      try {
        const response = await HTTP.get(`/api/recipes/${id}`);
        commit(SET_RECIPES, response.data);
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  getters: {
    recipes(state) {
      return state.recipes;
    }
  }
};

export default recipe;
