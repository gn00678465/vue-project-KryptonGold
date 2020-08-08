import Vue from 'vue';

import {
  ValidationObserver,
  ValidationProvider,
  extend, configure,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_TW.json';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});
// vee-validate Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
