<template>
  <li class="cart__item vld-parent">
    <loading :active.sync="isLoading"
      loader="dots"
      :is-full-page="false">
    </loading>
    <div class="item-img">
      <img :src="data.product.imageUrl[0]" alt=""></div>
    <div class="item-content">
      <div class="title">{{data.product.title}} <small>({{data.product.unit}})</small> </div>
      <button type="button" class="destroy" @click.prevent="DelProduct">
        <font-awesome-icon icon="trash-alt" />
      </button>
      <Increment class="increment" :value="data.quantity" styled="simple"
        :count.sync="quantity" size="sm">
        <template #plus>
          <font-awesome-icon icon="plus" />
        </template>
        <template #minus>
          <font-awesome-icon icon="minus" />
        </template>
      </Increment>
      <div class="price">{{CalcTotalPrice | Dollar | Currency}}</div>
    </div>
  </li>
</template>

<script>
import Increment from 'components/Increment.vue';
import FrontCartAPI from 'assets/Frontend_mixins/Cart'; // mixins: [FrontCartAPI]
import Resize from 'assets/Frontend_mixins/Resize';

export default {
  name: 'CartListItem',
  components: { Increment },
  mixins: [FrontCartAPI, Resize],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: this.data.quantity,
      isLoading: false,
    };
  },
  methods: {
    DelProduct() {
      this.DestroyCart(this.data.product.id);
    },
  },
  computed: {
    CalcTotalPrice() {
      return this.quantity * this.data.product.price;
    },
  },
  watch: {
    quantity() {
      this.EditCart(this.data.product.id, this.quantity);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart__item {
  display: flex;
  flex-direction: row;
  height: 4rem;
  width: 100%;
  margin: 2rem 0;
  background: #fff;
  border-radius: 5px;
  &:first-child {
    margin-top: 0;
  }
}
.item {
  &-img {
    width: 6rem;
  }
  &-content {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    padding: 0.5rem;
    padding-left: 0;
    position: relative;
    .title {
      font-weight: 600;
    }
    .increment {
      position: absolute;
      bottom: 0.5rem;
      left: -.25rem;
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.9);
    }
    .price {
      display: inline-block;
      width: 100%;
      text-align: right;
      align-self: flex-end;
      font-size: 1.1rem;
      font-weight: 600;
      color: v(theme-card-price);
    }
    .destroy {
      background: transparent;
      border: none;
      outline: none;
      margin-left: auto;
      cursor: pointer;
      color: #2A9FC0;
      &:hover {
        color: darken($color: #2A9FC0, $amount: 10%)
      }
    }
  }
}

img {
  width: 8rem;
  transform: translate(-1rem, -3rem);
}

@media (min-width: 375px) {
  .item {
    &-content {
      .title {
        font-size: 1.2rem;
      }
      .increment {
        left: 0;
        bottom: 0;
        transform: translateY(15px);
      }
      .price {
        font-size: 1.2rem;
      }
      .destroy {
        font-size: 1.1rem;
      }
    }
  }
}

@media (min-width: 768px) {
  .item {
    &-content {
      justify-content: space-between;
      align-items: center;
      .title {
        order: 1;
        flex:  0 0 35%;
      }
      .increment {
        position: initial;
        transform: initial;
        box-shadow: none;
        order: 2
      }
      .price {
        flex:  0 0 20%;
        font-size: 1.4rem;
        align-self: initial;
        width: auto;
        order: 3
      }
      .destroy {
        margin-left: initial;
        order: 4
      }
    }
  }
}
</style>
