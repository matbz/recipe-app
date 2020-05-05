import Vue from 'vue';
import Vuex from 'vuex';
import { HTTP } from '@/common/utilities';

Vue.use(Vuex);

const SET_MEMBERS = 'SET_MEMBERS';
const SELECT_MEMBER = 'SELECT_MEMBER';
const UNSELECT_MEMBER = 'UNSELECT_MEMBER';
const INIT_SELECTED_MEMBERS = 'INIT_SELECTED_MEMBERS';

const account = {
  namespaced: false,
  state: {
    members: [],
    selectedMembers: []
  },
  mutations: {
    SET_MEMBERS(state, data) {
      state.members = data;
    },
    SELECT_MEMBER(state, id) {
      state.selectedMembers.push(id);
    },
    UNSELECT_MEMBER(state, id) {
      state.selectedMembers = state.selectedMembers.filter(e => e !== id);
    },
    INIT_SELECTED_MEMBERS(state) {
      state.selectedMembers = [];
    },
  },
  actions: {
    async getMembers({ commit }) {
      try {
        const response = await HTTP.get('api/members');
        commit(SET_MEMBERS, response.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async createMember({ getters }, data) {
      try {
        await HTTP.post('/api/members', data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async deleteMembers({ getters }, data) {
      try {
        await HTTP.post('/api/members/delete', data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async setMember({ getters }, data) {
      try {
        await HTTP.put('/api/members', data);
      } catch (error) {
        throw new Error(error);
      }
    },
    addToSelectedMembers({ commit }, id) {
      commit(SELECT_MEMBER, id);
    },
    removeFromSelectedMembers({ commit }, id) {
      commit(UNSELECT_MEMBER, id);
    },
    initSelectedMembers({ commit }) {
      commit(INIT_SELECTED_MEMBERS);
    },
  },
  getters: {
    members(state) {
      return state.members;
    },
    selectedMembers(state) {
      return state.selectedMembers;
    },
  }
};

export default account;
