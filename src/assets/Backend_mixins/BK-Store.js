import Vue from 'vue';

export const store = Vue.observable({
  productInput: '',
});

export const mutation = {
  setproductInput(data) {
    store.productInput = data;
  },
};
