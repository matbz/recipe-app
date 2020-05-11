import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from '@/common/utilities';

Vue.use(Vuex);

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_RECIPES = 'SET_RECIPES';
const SET_STEPS = 'SET_STEPS';
const SET_INGREDIENTGROUPS = 'SET_INGREDIENTGROUPS';
const SET_INGREDIENTS = 'SET_INGREDIENTS';

const recipe = {
  namespaced: false,
  state: {
    recipes: [],
    steps: [],
    ingredientGroups: [],
    ingredients: [],
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    SET_RECIPES(state, data) {
      state.recipes = data;
    },
    SET_STEPS(state, data) {
      state.steps = data;
    },
    SET_INGREDIENTGROUPS(state, data) {
      state.ingredientGroups = data;
    },
    SET_INGREDIENTS(state, data) {
      state.ingredients = data;
    },
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
    },
    async getSteps({ commit }, id) {
      try {
        const response = await HTTP.get(`/api/recipes/${id}/steps`);
        commit(SET_STEPS, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async getIngredientGroups({ commit }, id) {
      try {
        const response = await HTTP.get(`/api/recipes/${id}/ingredientgroups`);
        commit(SET_INGREDIENTGROUPS, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async getIngredients({ commit }, id) {
      try {
        const response = await HTTP.get(`/api/ingredientgroups/${id}/ingredients`);
        commit(SET_INGREDIENTS, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async getCategories({ commit }) {
      try {
        const response = await HTTP.get('api/categories');
        commit(SET_CATEGORIES, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async load({ commit }) {
      try {
        let response = await HTTP.get('api/all/recipes');
        commit(SET_RECIPES, response.data);
        response = await HTTP.get('api/all/ingredientgroups');
        commit(SET_INGREDIENTGROUPS, response.data);
        response = await HTTP.get('api/all/ingredients');
        commit(SET_INGREDIENTS, response.data);
        response = await HTTP.get('api/all/steps');
        commit(SET_STEPS, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    recipes(state) {
      return state.recipes;
    },
    ingredientGroups(state) {
      return state.ingredientGroups;
    },
    ingredients(state) {
      return state.ingredients;
    },
    steps(state) {
      return state.steps;
    }
  }
};

export default recipe;
