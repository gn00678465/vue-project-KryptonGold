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
      <Increment :value="data.quantity" styled="simple"
        :count.sync="quantity" :size="setSize" :key="setSize">
        <template v-slot:plus>
          <font-awesome-icon icon="plus" />
        </template>
        <template v-slot:minus>
          <font-awesome-icon icon="minus" />
        </template>
      </Increment>
      <div class="price">{{CalcTotalPrice | Dollar | Currency}}元</div>
      <button type="button" class="destroy" @click.prevent="DelProduct">
        <font-awesome-icon icon="trash-alt" />
      </button>
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
    setSize() {
      if (this.screenWidth <= 414) return 'xs';
      if (this.screenWidth <= 768) return 'sm';
      return 'md';
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
    padding: 0.25rem ;
    .title {
      order: 1;
      flex: 1 0 50%;
      font-size: 1.2rem;
      font-weight: 600;
    }
    .increment, .quantity {
      order: 3;
    }
    .quantity {
      display: inline-block;
      flex-basis: 60%;
      align-self: flex-end;
      font-size: 1.1rem;
    }
    .price {
      order: 4;
      margin-left: auto;
      align-self: flex-end;
      font-size: 1.3rem;
      font-weight: 600;
      color: v(theme-card-price);
    }
    .destroy {
      background: transparent;
      border: none;
      outline: none;
      order: 2;
      margin-left: auto;
      cursor: pointer;
      font-size: 1.1rem;
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

@media (min-width: 768px) {
  .item {
    &-content {
      justify-content: space-between;
      align-items: center;
      .title, .increment, .price, .destroy, .quantity {
        order: 1;
        align-self: initial;
      }
      .title {
        flex: 0 0 40%;
      }
      .quantity {
        flex: 0 0 auto;
      }
    }
  }
}
</style>
