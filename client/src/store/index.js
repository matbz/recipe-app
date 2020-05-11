import Vue from 'vue';
import Vuex from 'vuex';
import recipe from '@/store/recipe';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipe
  }
});

export default store;
