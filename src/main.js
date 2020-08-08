// components
import Pagination from 'components/Pagination.vue';
import ToggleSwitch from 'components/ToggleSwitch.vue';
import BtnGroup from 'components/BtnGroup.vue';
import InputField from 'components/InputField.vue';
import Dialog from 'components/Dialog.vue';
import Vue from 'vue';
// normalize
import 'normalize.css';
// HTML meta
import VueMeta from 'vue-meta';
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// scrollbar
import ScrollBar from '@morioh/v-smooth-scrollbar';
// Vue APP
import App from './App.vue';
import router from './router';

// plugin
import './assets/plugin/Fontaweosme';
import './assets/plugin/VeeValidate';
import './assets/plugin/vueLoadingOverlay';
import './assets/plugin/VueToastification';
import './assets/icons/index';
// filter
import './assets/_filter';

// HTML meta
Vue.use(VueMeta);
// axios
Vue.use(VueAxios, axios);
// scrollbar
Vue.use(ScrollBar);
// global components
Vue.component('pagination', Pagination);
Vue.component('toggle', ToggleSwitch);
Vue.component('BtnGroup', BtnGroup);
Vue.component('InputField', InputField);
Vue.component('Dialog', Dialog);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
