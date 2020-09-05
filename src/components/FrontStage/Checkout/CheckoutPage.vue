<template>
  <validation-observer tag="form" class="container mt-3" v-slot="{ invalid }"
    @submit.prevent="submitHandler">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-7 col-xl-8 detail">
        <!-- detail -->
        <Detail ref="detial"/>
        <div class="row mb-3">
          <div class="col">
            <button type="button" class="pure-button w-100 checkout__btn-mobile">繼續購物</button>
          </div>
          <div class="col">
            <button type="submit" class="pure-button w-100 checkout__btn-mobile"
              :disabled="invalid">結帳去</button>
          </div>
        </div>
      </div>
      <div class="col">
          <div class="row">
            <div class="col-12 list">
              <!-- list -->
              <List/>
              <Summary>
                <template #button>
                  <div class="row mt-3">
                    <div class="col">
                      <button type="button" class="pure-button w-100 checkout__btn">繼續購物</button>
                    </div>
                    <div class="col">
                      <button type="submit" class="pure-button w-100 checkout__btn"
                        :disabled="invalid">結帳去</button>
                    </div>
                  </div>
                </template>
              </Summary>
              </div>
            </div>
      </div>
    </div>
  </validation-observer>
</template>

<script>
import Detail from 'components/FrontStage/Checkout/Detail.vue';
import List from 'components/FrontStage/Checkout/List.vue';
import Summary from 'components/FrontStage/Checkout/Summary.vue';
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'CheckoutPage',
  mixins: [FrontCartAPI],
  components: {
    Detail,
    List,
    Summary,
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    submitHandler() {
      const { ...data } = this.$refs.detial.form;
      const vm = this;
      this.CreateOrder(data)
        .then(() => {
          vm.$emit('nextStep');
        });
    },
  },
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
