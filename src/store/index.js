import Vuex from 'vuex';
import Vue from 'vue';
import { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList, 
  fetchUserInfo,
  fetchCommentItem,
  fetchList 
} from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
    item: {},
    // hoc
    list: [],
  },
  getters: {
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_ASKS(state, payload) {
      state.asks = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_ITEM(state, payload) {
      state.item = payload;
    },
    SET_LIST(state, payload) {
      state.list = payload;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(res => {
          context.commit('SET_NEWS', res.data);
          return res;
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then(res => {
          context.commit('SET_JOBS', res.data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_ASKS({commit}) {
      fetchAskList() 
        .then(({ data }) => {
          commit('SET_ASKS', data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_USER({commit}, name) {
      fetchUserInfo(name) 
        .then(({ data }) => {
          commit('SET_USER', data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_ITEM({commit}, id) {
      fetchCommentItem(id) 
        .then(({ data }) => {
          commit('SET_ITEM', data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_LIST({commit}, pageName) {
      fetchList(pageName) 
        .then(({ data }) => {
          commit('SET_LIST', data);
        })
        .catch(err => {
          console.log(err);
        })
    },

  },
});




