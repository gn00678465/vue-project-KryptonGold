<template>
  <div class="container mb-3">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect slot="default"/>
    </loading>
    <div class="row no-gutters order">
      <div class="col-sm-12 col-md-6 col-lg-7 order__img">
        <img src="https://images.unsplash.com/photo-1586999763660-2a8730809450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-5 order__content">
          <div class="order__col">
            <h4 class="h4 text-bold d-inline-block">訂單資訊</h4>
            <ul class="order__list">
              <li class="order__item mb-2">
                <p class="id border-bottom">訂單編號：</p>
                <p class="id__value">{{ orderID }}</p>
              </li>
              <li class="order__item">
                <p class="id border-bottom">訂購品項：</p>
              </li>
              <li class="order__item" v-for="prod in products" :key="prod.product.id">
                <p class="label">{{ prod.product.title }}</p>
                <p class="value">x {{ prod.quantity }}{{ prod.product.unit }}</p>
              </li>
            </ul>
          </div>
          <div class="order__col">
            <h4 class="h4 text-bold d-inline-block">訂購人資料</h4>
              <ul class="order__list">
                <li class="order__item">
                  <p class="label">姓名：</p>
                  <p class="value">{{ user.name }}</p>
                </li>
                <li class="order__item">
                  <p class="label">信箱：</p>
                  <p class="value">{{ user.email }}</p>
                </li>
                <li class="order__item">
                  <p class="label">電話：</p>
                  <p class="value">{{ user.tel }}</p>
                </li>
                <li class="order__item">
                  <p class="label">地址：</p>
                  <p class="value">{{ user.address }}</p>
                </li>
              </ul>
          </div>
          <div class="order__col">
            <button class="pure-button pure-button-success w-100"
              type="button" @click.prevent="payOrder" :disabled="isSpin">
              <span v-if="isSpin"><font-awesome-icon  icon="spinner" pulse />正在付款</span>
              <span v-else>確認付款</span>
            </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'OrderPage',
  mixins: [FrontCartAPI],
  components: {},
  data() {
    return {
      isLoading: false,
      isSpin: false,
      products: [],
      user: {},
      amount: 0,
    };
  },
  created() {
    const vm = this;
    this.ShowOrder(this.orderID)
      .then((data) => {
        vm.products = data.data.products;
        vm.user = data.data.user;
        vm.amount = data.data.amount;
      });
  },
  methods: {
    payOrder() {
      const vm = this;
      this.SetOrderPaid(this.orderID)
        .then(() => vm.$emit('nextStep'));
    },
  },
  computed: {
    orderID() {
      return this.$store.orderID;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% 10%;
}

p, .h4 {
  margin-top: 0;
}

.order {
  justify-content: center;
  height: 100%;
  position: relative;
  &__img {
    display: none;
  }
  &__content {
    min-height: 65vh;
    left: 50%;
    top: 0;
    height: 100%;
    transform: translateX(-50%);
    background: #ffffff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__col {
    display: flex;
    flex-direction: column;
    padding: 24px;
  }
  &__list {
    flex: 1 0 auto;
    margin-left: 1rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    font-size: 1.2rem;
    line-height: 1.5;
  }
}

.order__content {
  .order__col:nth-child(1) {
    .id {
      display: block;
    }
    .id__value {
      display: block;
      width: 100%;
      font-size: 1rem;
      word-break: break-all;
    }
    .label {
      flex: 1 0 0;
    }
  }
  .order__col:nth-child(2) {
    .label {
      margin-right: .5rem;
    }
    .value {
      flex: 1 0 0;
      word-break: break-all;
    }
  }
}

.border-bottom {
  border-bottom: 2px solid #ccc;
}

@media (min-width: 768px) {
  .order {
    &__img {
      display: block;
      max-height: 65vh;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    img {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &__content {
      position: relative;
      transform: initial;
      left: 0%;
      height: auto;
      backdrop-filter: initial;
      color: #000;
      background: #fff;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>
