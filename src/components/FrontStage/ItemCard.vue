<template>
  <div class="ItemCard">
    <img v-if="data" :src="data.imageUrl[0]" alt="" class="ItemCard__img">
    <div class="ItemCard__content">
      <h4 class="ItemCard__title">{{data.title}}</h4>
      <span class="ItemCard__tag">
        {{data.options.type}} | {{data.options.ml|ml}} | {{data.options.percent|percent}}
        </span>
      <div class="ItemCard__description">{{ data.content }}</div>
      <footer class="ItemCard__footer">
        <div class="ItemCard__price">{{data.price|Currency|Dollar}}
          <span>/ 1{{data.unit}}</span>
        </div>
        <button type="button" class="btn btn-info" @click.prevent="goToDetial">
          <font-awesome-icon :icon="['fas', 'info']" />
        </button>
        <button type="button" class="btn btn-cart" @click.prevent="addCart">
          <font-awesome-icon v-if="addCarting" icon="spinner" pulse />
          <font-awesome-icon v-else icon="cart-plus" />
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import FrontCartAPI from 'assets/Frontend_mixins/Cart'; // mixins: [FrontCartAPI]

export default {
  name: 'ItemCard',
  mixins: [FrontCartAPI],
  props: {
    data: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      addCarting: false,
    };
  },
  methods: {
    goToDetial() {
      this.$router.push(`product/${this.data.id}`);
    },
    addCart() {
      this.CreateCart(this.data.id);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
// reset
h1,
h2,
h3,
h4,
h5 {
  line-height: 1;
  margin: 0 0 0.7em;
}

.ItemCard {
  background: #fff;
  flex: 2 0 250px;
  transition: box-shadow 0.3s, transform 0.3s;
  overflow: hidden;
  margin-bottom: 1rem;
  &:hover {
    box-shadow: rgba(45,45,45,0.03) 0 2px 2px,
    rgba(49,49,49,0.03) 0 4px 4px,
    rgba(42,42,42,0.03) 0 8px 8px,
    rgba(32,32,32,0.03) 0 16px 16px,
    rgba(49,49,49,0.03) 0 32px 32px,
    rgba(35,35,35,0.03) 0 64px 64px;
    transform: translate(0, -4px);
  }
  &__content {
    padding: 0.5rem 1rem 1rem 1rem;
  }
  &__img {
    width: 100%;
    display: flex;
    transform: translateY(-40px);
  }
  &__title, &__tag, &__description {
    transform: translateY(-30px);
    margin-bottom: 1rem;
  }
  &__title {
    font-size: 1.3rem;
  }
  &__tag {
    display: inline-block;
    width: 100%;
    text-align: right;
    color: v(theme-card-subtitle);
  }
  &__description {
    line-height: 1.3;
    letter-spacing: 2px;
    font-size: 0.85rem;
    height: 4rem;
    text-indent: 2rem;
  }
  &__price {
    font-size: 2rem;
    color: v(theme-card-price);
    span {
      font-size: 1.2rem;
      color: v(theme-card-subtitle);
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn {
    @include btn;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    &-cart {
      color: #fff;
      background: v(thtme-btn-cart);
      &:hover {
        background: v(theme-btn-cart-hover);
      }
    }
    &-info {
      margin-left: auto;
      margin-right: 0.5rem;
      color: #fff;
      background: v(theme-info);
      &:hover {
        background: v(theme-info-hover);
      }
    }
  }
}
</style>
