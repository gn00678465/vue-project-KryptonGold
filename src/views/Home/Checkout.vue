<template>
  <div class="checkout">
    <Progressbar :steps="steps" :current.sync="current"/>
    <transition>
      <component :is="componentId"></component>
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
      componentId: 'CheckoutPage',
    };
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
</style>
