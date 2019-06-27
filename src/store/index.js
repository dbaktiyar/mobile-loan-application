import Vue from 'vue';
import Vuex from 'vuex';
import userState from './modules/user.js';
import roadmapState from './modules/roadmap.js';
import errorLogs from './modules/errorLogs.js';
import createPersistedState from 'vuex-persistedstate';
import getters from './getters'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    user: userState,
    roadmap: roadmapState,
    errorLogs: errorLogs
  },
  getters,
  strict: debug,
  plugins: [
    createPersistedState({
      key: 'user',
      storage: localStorage,
      reducer: (state) => {
        return state.user
      }
    })
  ]
});

export default store;
