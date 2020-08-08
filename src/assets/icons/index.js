import Vue from 'vue';
import SvgIcon from 'components/SvgIcon.vue';

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('assets/icons', true, /\.svg$/);
requireAll(req);

Vue.component('icon', SvgIcon);
