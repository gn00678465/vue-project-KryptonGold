<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-8">
        <div class="cart__detail">
          <h3 class="detail-title">填寫收件人資訊</h3>
          <hr>
          <div class="col-sm-12 col-md-6">
            <InputField label="收件人姓名" :attrs="inputSet"
                v-model="inputTemp.name"/>
          </div>
          <div class="col-sm-12 col-md-6">
            <InputField label="收件人信箱" :attrs="inputSet"
                v-model="inputTemp.email"/>
          </div>
          <div class="col-sm-12 col-md-6">
            <InputField label="收件人電話" :attrs="inputSet"
                v-model="inputTemp.tel"/>
          </div>
          <div class="col-sm-12 col-md-6">
            <InputField label="收件人地址" :attrs="inputSet"
                v-model="inputTemp.adress"/>
          </div>
          <div class="col-sm-12 col-md-6">
            <InputSelect label="付款方式" :options="payments"
            v-model="inputTemp.payment"/>
          </div>
          <div class="col-12">
            <InputField label="留言" :attrs="inputSet"
                v-model="inputTemp.message"/>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="cart__summary">
        <ul>
          <li>
            <span class="label">小計：</span>
            <span class="value">$123 元</span>
          </li>
          <li>
            <span class="label">運費：</span>
            <span class="value">$200 元</span>
          </li>
          <li>
            <span class="label">折扣：</span>
            <span class="value">- $200 元</span>
          </li>
          <li class="total">
            <span class="label">總金額：</span>
            <span class="value">$555 元</span>
          </li>
        </ul>
      </div>
      <div class="cart__btn">
        <button type="button" class="btn btn-next" @click.prevent="goNextStep">
          <span>確認付款</span>
        </button>
        <button type="button" class="btn btn-prev" @click.prevent="goBackStep">
          <span>回購物車</span>
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartDetail',
  components: {},
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
          rules: 'required|',
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
    };
  },
  methods: {
    goNextStep() {
      this.$emit('goNext');
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

.btn-prev {
  width: 100%;
  background: transparent;
  border: 1px solid $default-color;
  color: $default-color;
  &:hover {
    background: $default-color;
    border: 1px solid $default-color;
    color: #fff;
  }
}

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
