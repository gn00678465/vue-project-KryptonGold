import Vue from 'vue';

export const store = Vue.observable({
  cartList: [],
  orderID: '',
});

export const mutation = {
  setCartsArray(data) {
    store.cartList = [...data];
  },
  getOrderID(data) {
    store.orderID = data;
  },
};
