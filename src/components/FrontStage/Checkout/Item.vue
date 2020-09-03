<template>
  <div class="CartCard" :class="{show: isShow}">
    <div class="CartCard__main">
      <div class="CartCard__img">
        <img :src="data.product.imageUrl[0]" alt="">
      </div>
      <div class="CartCard__content">
        <p class="CartCard__title">
          {{ data.product.title }}
        </p>
        <p class="CartCard__price">
          <AnimatedIngeter class="price" :value="calcPrice" />
        </p>
      </div>
      <div class="CartCard__arrow" @click.prevent="isShow = !isShow">
        <font-awesome-icon icon="chevron-up" class="arrow" :class="{rotate: isShow}" />
      </div>
    </div>
    <div class="CartCard__detial">
    </div>
    <div class="CartCard__footer">
      <font-awesome-icon icon="trash-alt" />
      <Increment :count.sync="quantity" size="sm" styled="simple" >
        <template #plus>
          <font-awesome-icon icon="plus" />
        </template>
        <template #minus>
          <font-awesome-icon icon="minus" />
        </template>
      </Increment>
    </div>
  </div>
</template>

<script>
import Increment from 'components/Increment.vue';

export default {
  name: 'CartCard',
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
      isShow: false,
      quantity: 1,
    };
  },
  methods: {},
  computed: {
    calcPrice() {
      return this.data.product.price * this.data.quantity;
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
  overflow: hidden;
  padding: .75rem 1.5rem;
  background: #fff;
  border-radius: .5rem;
  max-height: 90px;
  transition: max-height .8s ease;
  margin: $card-space 0;
  &.show {
    max-height: 99em;
    transition: max-height 1.6s ease;
  }
  &__main,
  &__detial,
  &__footer {
    width: 100%;
    display: flex;
  }
  &__main,
  &__footer {
    flex-flow: row nowrap;
  }
  &__footer {
    padding: 10px 10px 0 10px;
    border-top: 2px solid #eee;
    justify-content: space-between;
    align-items: center;
    margin-top: -10px;
  }
}
.CartCard {
  &__content {
    flex: 1 0 0;
    margin-left: -10px;
  }
  &__arrow {
    flex: 0 1 0;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  &__detial {
    display: inline-block;
    width: 100%;
  }
}
.CartCard {
  &__img {
    flex: 0 0 90px;
    transform: translate(-20px, -25px);
  }
  &__title {
    font-size: 1.3rem;
    font-weight: 700;
  }
  &__price {
    margin-top: 0.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: v(theme-card-price);
  }
}

.arrow {
  transition: transform .8s ease;
  transition-delay: .3s;
  user-select: none;
  &.rotate {
    transform: rotate(180deg);
    transition: transform .4s ease;
  }
}
</style>
