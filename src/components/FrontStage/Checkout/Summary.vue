<template>
  <div class="summary">
    <ul class="list-group">
      <li class="list-group-item summary__item border-bottom">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="輸入優惠卷">
          <div class="input-group-append">
            <span class="input-group-text">套用</span>
          </div>
        </div>
      </li>
      <li class="list-group-item summary__item">
        <p class="label">小計：</p>
        <AnimatedIngeter class="value" :value="OriginTotalPrice" >元</AnimatedIngeter>
      </li>
      <li class="list-group-item summary__item">
        <p class="label">運費：</p>
        <p class="value" :class="{ through:Shipping === 0 }">{{ Shipping|Dollar }}元</p>
      </li>
      <li class="list-group-item summary__item">
        <p class="label">折扣：</p>
        <p class="value">{{ 0|Dollar }} 元</p>
      </li>
      <li class="list-group-item total summary__item">
        <!-- TODO: tween.js version 16.6 now is 18 -->
        <p class="label">總金額：</p>
        <AnimatedIngeter class="value" :value="TotalPrice" >元</AnimatedIngeter>
      </li>
    </ul>
    <slot name="button"></slot>
  </div>
</template>

<script>
import { store } from 'assets/Store';

export default {
  name: 'Summary',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    CartList() {
      return store.cartList;
    },
    OriginTotalPrice() {
      return this.CartList.map((cart) => cart.quantity * cart.product.price)
        .reduce((prev, curr) => prev + curr, 0);
    },
    Shipping() {
      return this.OriginTotalPrice > 1000 ? 0 : 200;
    },
    TotalPrice() {
      return this.OriginTotalPrice + this.Shipping;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap';

.h4 {
  font-weight: bold;
}

.summary {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
  }
  .label, .value {
    margin: 0;
  }
}

.total {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 2px;
    background: #eee;
  }
  .label, .value {
    font-size: 1.2rem;
    font-weight: 700;
  }
}
.through {
  text-decoration: line-through
}
</style>
