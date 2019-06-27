import client from '@/api/request';

const state = {
  info: {},
  token: '',
  refreshToken: '',
  refreshRequest: null
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_REFRESH_TOKEN: (state, refreshToken) => {
    state.refreshToken = refreshToken;
  },
  SET_REFRESH_REQUEST: (state, request) => {
    state.refreshRequest = request;
  },
  SET_CURRENT_USER: (state, userInfo) => {
    state.info = userInfo;
  }
};

const actions = {
  async login({ commit, dispatch }, userInfo) {
    return new Promise((resolve, reject) => {
      client.post(`oauth/token?grant_type=password&username=${userInfo.username}&password=${userInfo.password}`,
          {},
          {
            headers: { 'Authorization': 'Basic ' + 'bW9iaWxlOm1vYjEyMw==' }
          })
          .then((response) => {
            const { data } = response;

        commit('SET_TOKEN', data.access_token);
        commit('SET_REFRESH_TOKEN', data.refresh_token);
        dispatch('getCurrentUser', { root: true });
        resolve();
      })
      .catch(error => {
        const err = error.response;
        dispatch('errorLogs/addErrorLog', err.data.message, {root: true});
        reject(err.data.message);
    });
    })
  },
  async signup({ commit, dispatch }, userInfo) {
    return new Promise((resolve, reject) => {
      client.post('auth/signup', userInfo)
      .then(response => {
        const { data } = response;
        commit('SET_TOKEN', data.token);
        resolve();
      })
      .catch(error => {
        const err = error.response;
        dispatch('errorLogs/addErrorLog', err.data.message, {root: true});
        reject(err.data.message);
      })
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        commit('SET_TOKEN', '');
        commit('SET_REFRESH_TOKEN', '');
        localStorage.clear();
        resolve();
      } catch(err) {
        reject(err);
      }
    })
  },
  // async getCurrentUser({ commit }) {
  //   try {
  //     const { data: currentUser } = await client.get('users/current');
  //     commit('SET_CURRENT_USER', currentUser);
  //   } catch (err) {
  //     // eslint-disable-next-line no-console
  //     console.log(err, 'current user');
  //   }
  // }
};

export default {
  state,
  mutations,
  actions
};
