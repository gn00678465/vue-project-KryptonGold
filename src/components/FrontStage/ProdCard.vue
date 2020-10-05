<template>
  <div class="ItemCard" @click.prevent="goToDetial" :class="{disabled: addCarting}">
    <div class="ItemCard__img">
      <img v-if="data" :src="data.imageUrl[0]" alt="" class="ItemCard__img">
    </div>
    <div class="ItemCard__content">
      <h4 class="ItemCard__title">{{ data.title }}</h4>
      <div class="ItemCard__tag">
        <Tag bgColor="info"><template #tag>{{ data.options.type }}</template></Tag>
        <Tag bgColor="info"><template #tag>{{ data.options.ml|ml }}</template></Tag>
      </div>
      <p class="ItemCard__description">{{ ellipsisContent }}</p>
      <footer class="ItemCard__footer">
        <p class="ItemCard__price">{{ data.price|Currency|Dollar }}</p>
        <p class="ItemCard__unit">/ {{ data.unit }}</p>
        <button type="button" class="pure-button pure-button-outline-primary"
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
import Tag from 'components/Tag.vue';
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'ItemCard',
  mixins: [FrontCartAPI],
  components: {
    Tag,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      lens: 30,
      addCarting: false,
    };
  },
  methods: {
    goToDetial() {
      if (this.addCarting) return;
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
    tagData() {
      return [this.data.options.type, `${this.data.options.ml}ml`];
    },
  },
};
</script>

<style lang="scss" scoped src="./style/ProdCard.scss">
</style>
