import Vue from 'vue';
import VueNumeric from 'vue-numeric';
import Toasted from 'vue-toasted';
import VModal from 'vue-js-modal';
import App from './App';
import router from './router';
import store from './store';
import './common/filters';
import './assets/styles/main.css';

Vue.use(VueNumeric);
Vue.use(VModal);
Vue.use(Toasted, {
  theme: 'bubble',
  position: 'bottom-center',
  duration: 2000
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
