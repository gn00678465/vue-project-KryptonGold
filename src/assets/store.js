import Vue from 'vue';

export const store = Vue.observable({
  cartList: [],
  personDetial: {},
});

export const mutation = {
  setCartsArray(data) {
    store.cartList = [...data];
  },
  setPersonObj(data) {
    store.personDetial = { ...data };
  },
};
