import Vue from 'vue';
import Vuex from 'vuex';
import category from '@/store/category';
import recipe from '@/store/recipe';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    category,
    recipe
  }
});

export default store;
