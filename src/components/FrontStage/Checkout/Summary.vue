<template>
  <div class="summary mb-lg-3">
    <ul class="list-group">
      <li class="list-group-item summary__item border-bottom">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="輸入優惠卷" v-model.trim="coupon">
          <div class="input-group-append">
            <button type="button" class="input-group-text" @click.prevent="applycoupon"
              :disabled="isSearch">
              <font-awesome-icon v-if="isSearch" icon="spinner" pulse />
              <span v-else>套用</span>
            </button>
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
        <AnimatedIngeter class="value" :value="DisCount" >元</AnimatedIngeter>
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
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'Summary',
  mixins: [FrontCartAPI],
  data() {
    return {
      coupon: '',
      percent: 100,
      isSearch: false,
    };
  },
  methods: {
    applycoupon() {
      if (this.coupon === '') {
        this.$toast.error('請輸入優惠碼!');
        return;
      }
      this.isSearch = true;
      this.SearchCoupon(this.coupon)
        .then((res) => {
          this.percent = res.data.percent;
          this.$emit('coupon', res.data.code);
          this.isSearch = false;
          this.$toast.success('已套用優惠碼');
        });
      this.coupon = '';
    },
  },
  computed: {
    CartList() {
      return this.$store.cartList;
    },
    OriginTotalPrice() {
      return this.CartList.map((cart) => cart.quantity * cart.product.price)
        .reduce((prev, curr) => prev + curr, 0) * (this.percent / 100);
    },
    Shipping() {
      return this.OriginTotalPrice > 1000 ? 0 : 200;
    },
    DisCount() {
      return this.OriginTotalPrice * ((100 - this.percent) / 100);
    },
    TotalPrice() {
      return this.OriginTotalPrice + this.Shipping;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap';

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
