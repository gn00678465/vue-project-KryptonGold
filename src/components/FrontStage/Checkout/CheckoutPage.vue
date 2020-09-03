<template>
  <validation-observer tag="div" class="container mt-3" v-slot="{ invalid }">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-7 col-xl-8 detail">
        <!-- detail -->
        <Detail />
        <button type="button" ref="mobile" class="btn w-100 mb-3 checkout__btn-mobile"
          :disabled="invalid">結帳去</button>
      </div>
      <div class="col">
          <div class="row">
            <div class="col-12 list">
              <!-- list -->
              <List />
              <button type="button" class="btn w-100 mt-3 checkout__btn"
                :disabled="invalid">結帳去</button>
              </div>
            </div>
      </div>
    </div>
  </validation-observer>
</template>

<script>
import Detail from 'components/FrontStage/Checkout/Detail.vue';
import List from 'components/FrontStage/Checkout/List.vue';

export default {
  name: 'CheckoutPage',
  components: {
    Detail,
    List,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>

.detail {
  order: 2;
}
.list {
  order: 1;
}

.checkout__btn {
  display: none;
}

@media (min-width: 768px) {
  .detail {
    order: initial;
  }
  .list {
    order: initial;
  }
  .checkout__btn {
    display: block;
    &-mobile {
      display: none;
    }
  }
}
</style>
