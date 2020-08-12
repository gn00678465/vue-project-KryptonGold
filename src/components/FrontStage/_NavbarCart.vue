<template>
  <div class="NavbarCart">
    <ul class="cart__list">
      <li class="cart__item" v-for="i in 2" :key="i">
        <div class="cart__img">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/thbMruwCrlAegcxvyvGFT3RpoW8ABCCM23oMpXwrMYFSaxqvgs7HUZOHA73VM3q82pSPqTNBLTc2gpXLe2u3VBxiUvVcCcIC7d7HFZwd5nSq8DmA54XbO9BQjs1BvJPS.jpg" alt="">
        </div>
        <div class="cart__content">
          <div class="cart__title">XXX</div>
          <div class="cart__price">2 * $130</div>
        </div>
        <button type="button" class="cart__cancle">
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
        </button>
      </li>
    </ul>
    <footer class="cart__footer">
      <button type="button" class="btn btn-cart" @click.prevent="clickHandler">前往結帳</button>
      <div class="cart__total">總計: <span>$123456</span></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NavbarCart',
  components: {},
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      this.$parent.isShow = false;
      if (this.$route.path !== '/carts') this.$router.push('carts');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.NavbarCart {
  width: 300px;
  max-width: 300px;
  height: 100%;
}
.cart {
  &__item, &__footer {
    display: flex;
    align-items: center;
  }
  &__item {
    height: 56px;
    padding: 3px 10px;
    &:hover {
      background: #f3f3f3;
    }
  }
  &__img {
    height: 100%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__content {
    margin-left: 1rem;
    flex-basis: auto;
    flex-grow: 1;
    height: 100%;
    margin-top: 0.5rem;
  }
  &__cancle {
    border: none;
    outline: none;
    padding: 5px;
    color: #fff;
    background: #EA0002;
    border-radius: 3px;
    justify-content: flex-end;
    cursor: pointer;
  }
  &__footer {
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,0,0,0.03);
    .btn {
      @include btn;
      margin-top: .25rem;
      margin-bottom: .25rem;
      cursor: pointer;
      &-cart {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
      &-cart:hover {
        background-color: darken(#007bff, 5%);
        background-color: darken(#007bff, 5%);
      }
    }
  }
  &__total {
    font-weight: 900;
    font-size: 1.1rem;
    span {
      font-weight: normal;
      font-size: 1rem;
      margin-left: 0.25rem;
    }
  }
}

@media (min-width: 768px) {
  .NavbarCart {
    width: 350px;
  }
  .cart {
    &__item {
      height: 64px;
    }
  }
}

@media (min-width: 992px) {
  .NavbarCart {
    width: 350px;
  }
  .cart {
    &__item {
      height: 72px;
    }
  }
}
</style>
