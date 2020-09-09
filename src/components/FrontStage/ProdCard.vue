<template>
  <div class="ItemCard" @click.prevent="goToDetial">
    <div class="ItemCard__img">
      <img v-if="data" :src="data.imageUrl[0]" alt="" class="ItemCard__img">
    </div>
    <div class="ItemCard__content">
      <h4 class="ItemCard__title">{{ data.title }}</h4>
      <p class="ItemCard__tag">
        {{ data.options.type }} | {{ data.options.ml|ml }} | {{ data.options.percent|percent }}
      </p>
      <p class="ItemCard__description">{{ ellipsisContent }}</p>
      <footer class="ItemCard__footer">
        <p class="ItemCard__price">{{ data.price|Currency|Dollar }}</p>
        <p class="ItemCard__unit">/ {{ data.unit }}</p>
        <button type="button" class="pure-button pure-button-primary w-100 mt-2"
          @click.prevent.stop="addCart" :disabled="addCarting">
          <font-awesome-icon v-if="addCarting" icon="spinner" pulse />
          <font-awesome-icon v-else icon="cart-plus" />
          <p class="add__cart">加入購物車</p>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

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
      lens: 50,
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
  computed: {
    ellipsisContent() {
      const str = this.data.content;
      return str.length > this.lens ? `${str.substr(0, (this.lens - 1))} …` : str;
    },
  },
};
</script>

<style lang="scss" scoped src="./style/ProdCard.scss">
</style>
