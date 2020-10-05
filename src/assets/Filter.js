import Vue from 'vue';

// 加入貨幣符號
Vue.filter('Dollar', (val) => `$${val}`);

// 加入百分比符號
Vue.filter('Percent', (val) => `${val} %`);

// 加入 ml
Vue.filter('ml', (val) => `${val} ml`);

// 貨幣千分位
Vue.filter('Currency', (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});

// 加入 0
Vue.filter('addZero', (val) => (val < 10 ? `0${val}` : val));
