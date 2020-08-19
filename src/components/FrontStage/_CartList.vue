<template>
  <div class="container vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect2 slot="default"/>
      </loading>
    <header class="header">
      <BackBtn @click-emit="goProduct">繼續購物</BackBtn>
      <button type="button" class="btn btn-clear" @click.prevent="clearCart">清空購物車</button>
    </header>
    <div class="row">
      <div class="col-sm-12 col-lg-8">
        <ul v-if="CartList.length !== 0" class="cart__list">
          <!-- <h3 class="list-title">購物車</h3> -->
          <!-- <hr> -->
          <CartItem v-for="cart in CartList" :key="cart.product.id" :data="cart"/>
        </ul>
        <h2 class="empty" v-else >
          購物車是空的，趕緊<router-link to="/products"
          style="border-bottom: 1px solid #000; color: #4c4c4c">
          購物
          </router-link>去吧!!
        </h2>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="cart__coupon">
          <div class="input-group">
            <!-- TODO: 待加入優惠碼功能 -->
            <input type="text" class="coupon" placeholder="請輸入優惠碼">
            <button type="button" class="btn-search">套用</button>
          </div>
        </div>
        <Summary/>
        <div class="cart__btn">
          <button type="button" class="btn btn-next" @click.prevent="goNextStep">
            <span>繼續結帳</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackBtn from 'components/FrontStage/BackBtn.vue';
import FrontCartAPI from 'assets/Frontend_mixins/Cart'; // mixins: [FrontCartAPI]
import { store } from 'assets/store';
import CartItem from './_CartListItem.vue';
import Summary from './_CartSummary.vue';

export default {
  name: 'CartList',
  mixins: [FrontCartAPI],
  components: { BackBtn, CartItem, Summary },
  data() {
    return {
      isLoading: false,
      carts: [],
    };
  },
  created() {
  },
  methods: {
    goNextStep() {
      if (this.CartList.length === 0) {
        this.$toast.info('目前購物車無品項喔!');
      } else {
        this.$emit('goNext');
      }
    },
    goProduct() {
      this.$router.push('/products');
    },
    clearCart() {
      this.DestroyAllCart();
    },
  },
  computed: {
    // CartList() {
    //   return store.cartList;
    // },
    CartList: {
      get() {
        return store.cartList;
      },
      set(val) {
        this.carts = val;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/_cart.scss';

.btn {
  @include btn;
  &-clear {
    padding: 0.125rem 0.25rem;
    font-size: 0.95rem;
    background: transparent;
    border: 1px solid $default-color;
    color: $default-color;
    margin-bottom: 0 !important;
    &:hover {
      background: $default-color;
      border: 1px solid $default-color;
      color: #fff;
    }
  }
  &-cancle {
    border: none;
    outline: none;
    padding: 5px;
    color: #fff;
    background: $default-color;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background: darken($default-color, 10%);
    }
  }
  &-next {
    width: 100%;
    color: #fff;
    border: 1px solid v(theme-order-success);
    background: v(theme-order-success);
    &:hover {
      border: 1px solid v(theme-order-success);
      background: v(theme-order-success-hover);
    }
  }
}

.header {
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__text {
    font-size: 1.2rem;
    font-weight: 600;
    flex: 1 0 0;
    display: inline-block;
    text-align: center;
  }
}

.empty {
  width: 100%;
  text-align: center;
  margin: 3rem 0;
}

.cart {
  &__list {
    padding: 0 0.5rem;
    .list-title {
      display: block;
      width: 100%;
      text-align: center;
      position: relative;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }
    hr {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid rgba(0,0,0,0.05) ;
      width: 100%;
    }
  }
}

.cart__coupon {
  border-top: 5px solid #f44336;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  .input-group {
    width: 100%;
    height: 35px;
    display: flex;
    flex-flow: row nowrap;
  }
  input {
    flex: 1 0 0;
    width: auto;
    height: 100%;
    border-style: solid;
    border-color: #ccc;
    border-width: 1px 0 1px 1px;
    padding-left: 0.5rem;
  }
  .btn-search {
    height: 100%;
    border-style: solid;
    border-color: #ccc;
    border-width: 1px;
    padding: 5px;
    background: transparent;
    outline: none;
    &:hover {
      border: 1px solid v(theme-order-success);
      background: v(theme-order-success);
      color: #fff;
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
  .empty {
    margin: 7rem 0;
  }
}
</style>
