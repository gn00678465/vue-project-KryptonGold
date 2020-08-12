<template>
  <div class="container">
    <header class="header">
      <div class="wrapper-btn">
        <div class="btn-back" @click.prevent="goProduct">
          <div class="icon"><font-awesome-icon :icon="['fas', 'arrow-left']" /></div>
          <span>繼續購物</span>
        </div>
      </div>
      <button type="button" class="btn btn-clear">清空購物車</button>
    </header>
    <div class="row">
      <div class="col-sm-12 col-lg-8">
        <ul class="cart__list">
          <h3 class="list-title">購物車</h3>
          <hr>
          <li class="cart__item" v-for="i in 2" :key="i">
            <div class="cart__img" style="background-image: url('http://lorempixel.com/output/technics-q-c-300-300-4.jpg')"></div>
            <div class="cart__content">
              <div class="cart__description">
                <span class="title">XXXXX</span>
                <span class="price">單價：$5566 元</span>
                <span class="price">總計：$5566 元</span>
              </div>
              <div class="cart__increment">
                <button type="button" class="minus"> - </button>
                <input type="number" name="" class="amount" value="1">
                <button type="button" class="plus"> + </button>
              </div>
              <div class="cart__item-btn">
                <button type="button" class="btn-cancle">
                  <font-awesome-icon :icon="['fas', 'trash-alt']" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="cart__coupon">
          <div class="input-group">
            <input type="text" class="coupon" placeholder="請輸入優惠碼">
            <button type="button" class="btn-search">套用</button>
          </div>
        </div>
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
            <span>繼續結帳</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  components: {},
  data() {
    return {};
  },
  methods: {
    goNextStep() {
      this.$emit('goNext');
    },
    goProduct() {
      this.$router.push('/products');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import './style/_cart.scss';

$increment-s: 24px;
$increment-m: 29px;
$increment-l: 34px;

$wrapper-btn-sm: 38px;

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
    background: $hover-color;
    color: #fff;
    &:hover {
      background: darken($hover-color, 10%);
    }
  }
}

.wrapper-btn {
  width: $wrapper-btn-sm * 2;
  height: $wrapper-btn-sm;
  position: relative;
  &::after {
    content: '';
    clear: both;
  }
.btn-back {
  position: absolute;
  top: 0;
    width: $wrapper-btn-sm;
    height: $wrapper-btn-sm;
    border-radius: $wrapper-btn-sm - 10px;
    float: left;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    transition: width .3s ease-out;
    &:hover {
      width: $wrapper-btn-sm * 3;
    }
    .icon {
      display: inline-block;
      width: $wrapper-btn-sm;
      height: $wrapper-btn-sm;
      border-radius: $wrapper-btn-sm - 10px;
      line-height: $wrapper-btn-sm;
      font-size: $wrapper-btn-sm / 2 - 3px;
      text-align: center;
    }
    span {
      font-size: $wrapper-btn-sm / 2 - 5px;
      font-weight: 400;
    }
}
}

.header {
  margin-bottom: 0.75rem;
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

.cart {
  &__list {
    @include borderTop;
    padding: 0.4rem 0.5rem;
    .list-title {
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
  &__item {
    width: 100%;
    height: 5rem;
    display: flex;
    border-radius: 5px;
    border: 1px solid #ddd;
    overflow: hidden;
    margin-bottom: 0.25rem;
  }
  &__img {
    min-width: 5rem;
    padding: 0;
    height: 100%;
    background-size: cover;
    background-position: center center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0.5rem 0.75rem;
  }
  &__description {
    flex: 2 0 0;
    .title, .price {
      display: inline-block;
      width: 100%;
    }
    .title {
      font-size: 0.8rem;
    }
    .price {
      font-size: 0.75rem;
      color: #a8a8b2;
      margin-top: 0.15rem;
      &:last-child {
        font-size: .85rem;
        font-weight: 400;
        color: #000;
      }
    }
  }
  &__increment {
    flex: 1 0 0;
    position: relative;
    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: center;
    button {
      &:first-child:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
    }
    .plus, .minus {
      height: $increment-s;
      padding: 0;
      width: $increment-s + 10px;
      border-style: solid;
      border-color: #ccc;
      border-width: 1px;
      background: transparent;
      color: #333;
      outline: none;
      &:hover {
        background: $hover-color;
        color: #fff;
      }
    }
    input {
      text-align: center;
      height: $increment-s;
      border-width: 0 1px;
      width: $increment-s + 10px;
      border-style: solid;
      border-color: #ccc;
      padding: 6px 3px;
      background-color: #fff;
      border-radius: 0;
    }
  }
  &__item-btn {
    display: inline-block;
    text-align: center;
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
      background: $hover-color;
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
    &__increment {
      flex: 2 0 0;
      display: inline-block;
      vertical-align: middle;
      input {
        border-width: 1px 0;
        text-align: center;
        width: $increment-l + 10px;
      }
    }
  }
}
</style>
