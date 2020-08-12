<template>
  <div class="container">
    <div class="row ">
      <div class="col-sm-3 col-md-3"></div>
      <div class="col-sm-12 col-md-6">
        <div class="cart__fin-icon">
          <icon class="icon" iconName="order_confirmed" />
        </div>
        <div class="cart__fin-content">
          <h3 class="fin-title">訂單完成</h3>
          <hr>
          <div class="fin-text">
            非常感謝您訂購我們的商品，我們會盡快確認您的訂單。<br>
            如有任何問題歡迎來信或來電詢問。我們會有專人為您服務。
          </div>
        </div>
      </div>
    </div>
    <div class="cart__btn">
      <button type="button" class="btn btn-order">
        <span>確認訂單</span>
      </button>
      <button type="button" class="btn btn-shopping" @click.prevent="goProduct">
        <span>繼續選購</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartFin',
  components: {},
  data() {
    return {};
  },
  methods: {
    goProduct() {
      this.$router.push('/products');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import './style/_cart.scss';

.cart {
  &__fin-icon {
    width: 100%;
    display: block;
    text-align: center;
    color: $hover-color;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  &__fin-content {
    @include borderTop;
    .fin-title {
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
    .fin-text {
      padding: 1rem 2rem 2rem 2rem;
      word-break: break-all;
      line-height: 1.5;
    }
  }
}

.cart__btn {
  width: 100%;
  .btn {
    &-order, &-shopping {
      width: 100%;
      background-color: transparent;
    }
    &-order {
      margin-bottom: 0.5rem;
      border: 1px solid #555;
      &:hover {
        border: 1px solid #555;
        background: #555;
        color: #fff;
      }
    }
    &-shopping {
      border: 1px solid $hover-color;
      background: $hover-color;
      color: #fff;
      &:hover {
        border: 1px solid $hover-color;
        background: darken($hover-color, 10%);
      }
    }
  }
}

@media (min-width: 768px) {
  .cart {
    &__fin-content {
      margin-bottom: 1rem;
    }
  }
  .cart__btn {
    margin-left: 25%;
    width: 50%;
    .btn {
      width: auto;
      margin-bottom: 1rem;
      width: 25%;
      &:last-child {
        float: right;
      }
    }
    &::after {
      content: '';
      clear: both;
    }
  }
}
</style>
