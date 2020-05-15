import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from '@/common/utilities';

Vue.use(Vuex);

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_RECIPES = 'SET_RECIPES';
const SET_RECIPESFULL = 'SET_RECIPESFULL';
const SET_STEPS = 'SET_STEPS';
const SET_INGREDIENTGROUPS = 'SET_INGREDIENTGROUPS';
const SET_INGREDIENTS = 'SET_INGREDIENTS';
const SET_SEARCHSTRING = 'SET_SEARCHSTRING';
const SET_SCROLLCATEGORY = 'SET_SCROLLCATEGORY';
const SET_SCROLLSEARCH = 'SET_SCROLLSEARCH';
const SET_SCROLLRECIPE = 'SET_SCROLLRECIPE';
const SET_WE = 'SET_WE';

const recipe = {
  namespaced: false,
  state: {
    recipes: [],
    steps: [],
    ingredientGroups: [],
    ingredients: [],
    categories: [],
    recipesFull: [],
    scrollCategory: 0,
    scrollSearch: 0,
    scrollRecipe: 0,
    we: 0,
    searchString: ''
  },
  mutations: {
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    SET_RECIPES(state, data) {
      state.recipes = data;
    },
    SET_RECIPESFULL(state, data) {
      state.recipesFull = data;
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
    SET_SEARCHSTRING(state, data) {
      state.searchString = data;
    },
    SET_SCROLLCATEGORY(state, data) {
      state.scrollCategory = data;
    },
    SET_SCROLLSEARCH(state, data) {
      state.scrollSearch = data;
    },
    SET_SCROLLRECIPE(state, data) {
      state.scrollRecipe = data;
    },
    SET_WE(state, data) {
      localStorage.setItem('we', data);
      state.we = data;
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
    async getRecipesFull({ commit }) {
      try {
        const response = await HTTP.get('/api/recipesfull');
        commit(SET_RECIPESFULL, response.data);
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
    setSearchString({ commit }, sString) {
      commit(SET_SEARCHSTRING, sString);
    },
    setScrollCategory({ commit }, scrollPosition) {
      commit(SET_SCROLLCATEGORY, scrollPosition);
    },
    setScrollSearch({ commit }, scrollPosition) {
      commit(SET_SCROLLSEARCH, scrollPosition);
    },
    setScrollRecipe({ commit }, scrollPosition) {
      commit(SET_SCROLLRECIPE, scrollPosition);
    },
    setwe({ commit }, data) {
      commit(SET_WE, data);
    }
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
    },
    recipesFull(state) {
      return state.recipesFull;
    },
    searchString(state) {
      return state.searchString;
    },
    scrollCategory(state) {
      return state.scrollCategory;
    },
    we(state) {
      return state.we;
    },
    scrollSearch(state) {
      return state.scrollSearch;
    },
    scrollRecipe(state) {
      return state.scrollRecipe;
    }
  }
};

export default recipe;
