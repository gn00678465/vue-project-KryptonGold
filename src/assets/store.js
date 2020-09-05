import Vue from 'vue';

export const store = Vue.observable({
  cartList: [],
  orderID: '',
  ScrollTop: 0,
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
};
