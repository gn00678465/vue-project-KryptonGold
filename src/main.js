// components
import Pagination from 'components/Pagination.vue';
import ToggleSwitch from 'components/ToggleSwitch.vue';
import BtnGroup from 'components/BtnGroup.vue';
import InputField from 'components/InputField.vue';
import ItemCard from 'components/FrontStage/ItemCard.vue';
import InputSelect from 'components/InputSelect.vue';
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
import './assets/plugin/vueLoadingOverlay';
import './assets/plugin/VueToastification';
import './assets/icons/index';
// filter
import './assets/_filter';

// axios
Vue.use(VueAxios, axios);
// scrollbar
Vue.use(ScrollBar);
// global components
Vue.component('pagination', Pagination);
Vue.component('toggle', ToggleSwitch);
Vue.component('BtnGroup', BtnGroup);
Vue.component('InputField', InputField);
Vue.component('InputSelect', InputSelect);
Vue.component('Dialog', () => import('components/Dialog.vue'));
Vue.component('LoadEffect', () => import('components/Loading.vue'));
Vue.component('LoadEffect2', () => import('components/Loading2.vue'));
Vue.component('ItemCard', ItemCard);
Vue.component('AnimatedIngeter', () => import('components/AnimatedIngeter.vue'));

Vue.config.productionTip = false;

// event bus
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
