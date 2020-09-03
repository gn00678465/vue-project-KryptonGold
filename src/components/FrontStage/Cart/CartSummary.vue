<template>
<!-- TODO: mobile 畫面時置底 -->
  <div class="cart__summary">
    <ul>
      <li>
        <span class="label">小計：</span>
        <AnimatedIngeter class="value" :value="OriginTotalPrice" >元</AnimatedIngeter>
      </li>
      <li>
        <span class="label">運費：</span>
        <span class="value">$ 200 元</span>
      </li>
      <li>
        <span class="label">折扣：</span>
        <span class="value">{{ DisCount|Currency|Dollar }} 元</span>
      </li>
      <li class="total">
        <!-- TODO: tween.js version 16.6 now is 18 -->
        <span class="label">總金額：</span>
        <AnimatedIngeter class="value" :value="FinalPrice" >元</AnimatedIngeter>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from 'assets/Store';

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
