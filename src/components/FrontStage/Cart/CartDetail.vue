<template>
  <validation-observer tag="form" class="container" v-slot="{ invalid }">
    <div class="row">
      <div class="col-sm-12 col-lg-8">
        <div class="cart__detail"></div>
        <h3 class="detail-title">填寫收件人資訊</h3>
        <hr>
        <div class="col-sm-12 col-md-6"></div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <Summary/>
        <div class="cart__btn">
          <button type="button" class="btn btn-next" :disabled="invalid"
            @click.prevent="goNextStep">
            <span><font-awesome-icon v-if="isSpin" icon="spinner" pulse /> 送出訂單</span>
          </button>
          <button type="button" class="btn btn-prev" @click.prevent="goBackStep">
            <span>回購物車</span>
          </button>
        </div>
      </div>
    </div>
  </validation-observer>
</template>

<script>
import FrontCartAPI from 'assets/Frontend_mixins/Cart';
// import Summary from './CartSummary.vue';

export default {
  name: 'CartDetail',
  mixins: [FrontCartAPI],
  // components: { Summary },
  data() {
    return {
      payments: ['WebATM', 'ATM', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'],
      inputSet: {
        收件人姓名: {
          rules: 'required',
          placeholder: '請輸入收件人姓名',
          type: 'text',
        },
        收件人信箱: {
          rules: 'required',
          placeholder: '請輸入收件人信箱',
          type: 'email',
        },
        收件人電話: {
          rules: 'required|integer|min:10',
          placeholder: '請輸入收件人電話',
          type: '',
        },
        收件人地址: {
          rules: 'required',
          placeholder: '請輸入收件人地址',
          type: 'text',
        },
        留言: {
          rules: '',
          placeholder: '請輸入留言',
          type: 'textarea',
        },
      },
      inputTemp: {},
      isSpin: false,
    };
  },
  methods: {
    goNextStep() {
      this.CreateOrder(this.inputTemp)
        .then(() => {
          this.$emit('goNext');
        });
    },
    goBackStep() {
      this.$emit('goBack');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import './style/_cart.scss';

.cart {
  &__detail {
    @include borderTop;
    padding: 0.4rem 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .detail-title {
      display: block;
      width: 100%;
      text-align: center;
      position: relative;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    hr {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid rgba(0,0,0,0.05) ;
      width: 100%;
    }
  }
}

.btn {
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .cart {
    &__detail {
      .detail-title {
        margin-top: 0;
      }
    }
  }
}
</style>
