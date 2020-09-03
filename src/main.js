// components
import Pagination from 'components/Pagination.vue';
import ToggleSwitch from 'components/BackendStage/ToggleSwitch.vue';
import BtnGroup from 'components/BackendStage/BtnGroup.vue';
import InputField from 'components/InputField.vue';
import ProdCard from 'components/FrontStage/ProdCard.vue';
import Vue from 'vue';
// normalize
import 'normalize.css';
// Animate.css
import 'animate.css';
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
import './assets/plugin/VueLoadingOverlay';
import './assets/plugin/VueToastification';
import './assets/icons/index';
// filter
import './assets/Filter';

// axios
Vue.use(VueAxios, axios);
// scrollbar
Vue.use(ScrollBar);
// global components
Vue.component('pagination', Pagination);
Vue.component('toggle', ToggleSwitch);
Vue.component('BtnGroup', BtnGroup);
Vue.component('InputField', InputField);
Vue.component('Dialog', () => import('components/BackendStage/Dialog.vue'));
Vue.component('LoadEffect', () => import('components/Loading.vue'));
Vue.component('ProdCard', ProdCard);
Vue.component('AnimatedIngeter', () => import('components/AnimatedIngeter.vue'));

Vue.config.productionTip = false;

// event bus
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
