import Vue from 'vue';

export const store = Vue.observable({
  cartList: [],
  orderID: '',
  ScrollTop: 0,
  clientWidth: 0,
  clientHeight: 0,
  filter: '所有品項',
});

export const mutation = {
  setCartsArray(data) {
    store.cartList = [...data];
  },
  setOrderID(data) {
    store.orderID = data;
  },
  setScrollTop(val) {
    store.ScrollTop = val;
  },
  setClientWidth(val) {
    store.clientWidth = val;
  },
  setClientHeight(val) {
    store.clientHeight = val;
  },
  setFilter(val) {
    store.filter = val;
  },
};
