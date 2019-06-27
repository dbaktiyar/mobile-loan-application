const getters = {
  errorLogs: state => state.errorLogs.logs,
  isLoggedIn: state => !!state.user.token,
  user: state => state.user.info,
  refreshToken: state => state.user.refreshToken,
  token: state => state.user.token,
  refreshRequest: state => state.user.refreshRequest
};

export default getters;
