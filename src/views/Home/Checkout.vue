<template>
  <div class="checkout" :style="rootStyle">
    <Progressbar ref="Progressbar" class="mb-3 mt-2" :steps="steps" :current.sync="current"/>
    <transition>
      <component :is="displayComponent" @nextStep="nextHandler"></component>
    </transition>
  </div>
</template>

<script>
import Progressbar from 'components/FrontStage/Checkout/Progressbar.vue';

export default {
  name: 'Checkout',
  components: {
    Progressbar,
    CheckoutPage: () => import('components/FrontStage/Checkout/CheckoutPage.vue'),
    OrderPage: () => import('components/FrontStage/Checkout/OrderPage.vue'),
    FinPage: () => import('components/FrontStage/Checkout/FinPage.vue'),
  },
  data() {
    return {
      steps: [
        '購物車',
        '確認訂單',
        '訂單完成',
      ],
      current: 1,
      componentsId: ['CheckoutPage', 'OrderPage', 'FinPage'],
    };
  },
  methods: {
    nextHandler() {
      this.current += 1;
    },
    goProducts() {
      this.$router.push({ name: 'products' });
    },
  },
  computed: {
    displayComponent() {
      return this.componentsId[this.current - 1];
    },
    rootStyle() {
      return {
        '--nav-height': `${this.$attrs.navHeight}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  padding-top: var(--nav-height);
}
</style>
