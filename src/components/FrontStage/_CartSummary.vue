<template>
  <div class="cart__summary">
    <ul>
      <li>
        <span class="label">小計：</span>
        <span class="value">{{OriginTotalPrice|Currency|Dollar}} 元</span>
      </li>
      <li>
        <span class="label">運費：</span>
        <span class="value">$ 200 元</span>
      </li>
      <li>
        <span class="label">折扣：</span>
        <span class="value">{{DisCount|Currency|Dollar}} 元</span>
      </li>
      <li class="total">
        <span class="label">總金額：</span>
        <span class="value">{{FinalPrice|Currency|Dollar}} 元</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from 'assets/store';

export default {
  name: 'CartSummary',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    OriginTotalPrice() {
      return this.CartList.map((cart) => cart.quantity * cart.product.price)
        .reduce((prev, curr) => prev + curr, 0);
    },
    DisCount() {
      return this.OriginTotalPrice > 1000 ? -200 : 0;
    },
    FinalPrice() {
      return this.OriginTotalPrice + this.DisCount;
    },
    CartList() {
      return store.cartList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/_cart.scss';
</style>
