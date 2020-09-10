<template>
  <validation-observer tag="form" class="container mt-3" v-slot="{ invalid }"
    @submit.prevent="submitHandler">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect slot="default"/>
    </loading>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-7 detail">
        <!-- detail -->
        <Detail ref="detial"/>
        <div class="row mb-3">
          <div class="col">
            <button type="button" class="pure-button pure-button-outline-secondary
            w-100 checkout__btn-mobile" @click.prevent="goProducts">
            <font-awesome-icon icon="chevron-left" v-if="invalid" class="mr-2"
              :class="[AnimateClass, AnimateLeft]" />
            繼續購物</button>
          </div>
          <div class="col">
            <button type="submit" class="pure-button pure-button-success w-100 checkout__btn-mobile"
              :disabled="invalid">結帳去
              <font-awesome-icon icon="chevron-right" v-if="!invalid" class="ml-2"
                :class="[AnimateClass, AnimateRight]" />
              </button>
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
                      <button type="button" class="pure-button pure-button-outline-secondary
                        w-100 checkout__btn" @click.prevent="goProducts">
                        <font-awesome-icon icon="chevron-left" v-if="invalid" class="mr-2"
                        :class="[AnimateClass, AnimateLeft]" />
                        繼續購物</button>
                    </div>
                    <div class="col">
                      <button type="submit" class="pure-button pure-button-success
                      w-100 checkout__btn" :disabled="invalid">
                      結帳去
                      <font-awesome-icon icon="chevron-right" v-if="!invalid" class="ml-2"
                      :class="[AnimateClass, AnimateRight]" />
                      </button>
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
    return {
      isLoading: false,
      AnimateClass: [
        'animate__animated',
        'animate__fast',
        'animate__infinite',
      ],
      AnimateLeft: 'animate__slideOutLeft',
      AnimateRight: 'animate__slideOutRight',
    };
  },
  mounted() {
  },
  methods: {
    submitHandler() {
      const { ...data } = this.$refs.detial.form;
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
  &-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
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
