import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import VueLodash from 'vue-lodash';
import LoadScript from 'vue-plugin-load-script';
import VeeValidate from 'vee-validate';
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 500,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

VeeValidate.configure({
  fieldsBagName: 'fieldss',
});

Vue.use(VeeValidate);
Vue.use(LoadScript);
Vue.use(Vuex);
Vue.use(VueLodash);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
