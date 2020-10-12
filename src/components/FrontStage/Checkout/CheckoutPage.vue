<template>
  <validation-observer tag="form" class="container" v-slot="{ invalid }"
    @submit.prevent.stop="submitHandler($event)">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect slot="default"/>
    </loading>
    <div class="row" v-if="!isEmpty">
      <div class="col-sm-12 col-md-6 col-lg-7 detail mb-3">
        <!-- detail -->
        <Detail ref="detial"/>
        <div class="row mb-3">
          <div class="col">
            <button type="button" class="pure-button pure-button-outline-secondary
            w-100 checkout__btn-mobile" @click.prevent="goProducts">
            繼續購物</button>
          </div>
          <div class="col">
            <button type="submit" class="pure-button pure-button-success w-100 checkout__btn-mobile"
              :disabled="invalid || isEmpty">結帳去
              <font-awesome-icon icon="chevron-right" v-if="!invalid && !isEmpty"
              class="ml-2"  :class="[AnimateClass, AnimateRight]" />
              </button>
          </div>
        </div>
      </div>
      <div class="col">
          <div class="row">
            <div class="col-12 list">
              <!-- list -->
              <List/>
              <Summary @coupon="addCoupon">
                <template #button>
                  <div class="row mt-3">
                    <div class="col">
                      <button type="button" class="pure-button pure-button-outline-secondary
                        w-100 checkout__btn" @click.prevent="goProducts">
                        繼續購物</button>
                    </div>
                    <div class="col">
                      <button type="submit" class="pure-button pure-button-success
                      w-100 checkout__btn" :disabled="invalid || isEmpty">
                      結帳去
                      <font-awesome-icon icon="chevron-right" v-if="!invalid && !isEmpty"
                      class="ml-2" :class="[AnimateClass, AnimateRight]" />
                      </button>
                    </div>
                  </div>
                </template>
              </Summary>
              </div>
            </div>
      </div>
    </div>
    <div class="emptyShow" v-else>
      <h4 class="h4">目前購物車內無品項，請到所有商品選購。</h4>
      <button type="button" class="pure-button pure-button-primary mt-3"
        @click.prevent="goProducts">
        回到產品列表
      </button>
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
    return {
      isLoading: false,
      AnimateClass: [
        'animate__animated',
        'animate__fast',
        'animate__infinite',
      ],
      AnimateRight: 'animate__slideOutRight',
      coupon: '',
    };
  },
  methods: {
    submitHandler(e) {
      if (e.keyCode === 13) return;
      const data = { ...this.$refs.detial.form };
      data.coupon = this.coupon || '';
      const vm = this;
      this.isLoading = true;
      this.CreateOrder(data)
        .then(() => {
          vm.isLoading = false;
          vm.$emit('nextStep');
        });
    },
    goProducts() {
      this.$router.push({ name: 'products' });
    },
    addCoupon(code) {
      this.coupon = code;
    },
  },
  computed: {
    isEmpty() {
      return this.$store.cartList.length === 0;
    },
  },
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
  &-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.emptyShow {
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10rem;
  &__link {
    font-weight: 700;
    color: v(info);
  }
  &__link:hover {
    font-weight: 700;
    color: v(danger);
    text-decoration: none;
  }
}

@media (min-width: 768px) {
  .detail {
    order: initial;
  }
  .list {
    order: initial;
  }
  .checkout__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    &-mobile {
      display: none;
    }
  }
}
</style>
