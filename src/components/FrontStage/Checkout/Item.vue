<template>
  <div class="CartCard vld-parent">
    <loading :active.sync="isLoading"
      loader="dots"
      :is-full-page="false">
    </loading>
    <div class="CartCard__main">
      <div class="CartCard__img">
        <img :src="data.product.imageUrl[0]" alt="">
      </div>
      <div class="CartCard__content">
        <p class="CartCard__title">
          {{ data.product.title }}
        </p>
        <div class="CartCard__edit">
          <Increment :count.sync="quantity" :value="data.quantity" size="sm" styled="simple" >
            <template #plus>
              <font-awesome-icon icon="plus" />
            </template>
            <template #minus>
              <font-awesome-icon icon="minus" />
            </template>
          </Increment>
          <p class="CartCard__price">
            {{ data.product.price|Dollar|Currency }}
          </p>
        </div>
      </div>
      <font-awesome-icon @click.prevent="DelProduct" class="CartCard__trash" icon="trash-alt" />
    </div>
  </div>
</template>

<script>
import Increment from 'components/Increment.vue';
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'CartCard',
  mixins: [FrontCartAPI],
  components: {
    Increment,
  },
  props: {
    data: {
      type: Object,
      requested: true,
    },
  },
  data() {
    return {
      isLoading: false,
      quantity: this.data.quantity,
    };
  },
  methods: {
    DelProduct() {
      this.DestroyCart(this.data.product.id);
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
$card-space: 5px;

img {
  width: 100%;
  height: 100%;
}
.CartCard {
  display: flex;
  flex-direction: column;
  position:relative;
  overflow: hidden;
  padding: .75rem 1.5rem;
  background: #fff;
  border-radius: .5rem;
  max-height: 90px;
  height: 100%;
  transition: max-height .4s ease;
  margin: $card-space 0;
  &__main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
  }
  &__content {
    flex: 1 0 0;
    margin-left: -10px;
  }
}
.CartCard {
  &__img {
    flex: 0 0 90px;
    transform: translate(-20px, -25px);
  }
  &__title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: .5rem;
  }
  &__edit {
    display: flex;
    align-items: center;
  }
  &__price {
    font-size: 1.2rem;
    font-weight: 700;
    color: v(theme-card-price);
    &::before {
      content: '*';
      color: #000;
      font-size: 1rem;
      font-weight: normal;
    }
  }
  &__trash {
    cursor: pointer;
    color: v(danger);
  }
  &__trash:active {
    transform: scale(1.1);
  }
}
</style>
