<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
      :is-full-page="false"
      background-color="transparent">
      <LoadEffect slot="default"/>
    </loading>
    <p class="title">人氣推薦</p>
    <carousel
    class="carousel"
      :perPage="5"
      :paginationEnabled="false"
      :autoplay="true"
      :autoplayHoverPause="true"
      :autoplayTimeout="5000"
      :perPageCustom="[[375, 1] ,[480, 2], [768, 3], [992, 4], [1200, 5]]"
    >
      <slide v-for="prod in RandomProducts" :key="prod.id">
        <Card :data="prod"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import FrontProductAPI from 'assets/Frontend_mixins/Product'; // mixins: [FrontProductAPI]
import { Carousel, Slide } from 'vue-carousel';
import Card from './CarouselCard.vue';

export default {
  components: {
    Carousel,
    Slide,
    Card,
  },
  mixins: [FrontProductAPI],
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.GetProductList();
  },
  methods: {
    sort(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    shuffle(array) {
      const newArr = [];
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [array[j], array[i]];
      }
      return newArr;
    },
  },
  computed: {
    RandomProducts() {
      return this.sort(this.products).slice(0, 8);
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  margin: 0.5rem 0;
}

.title {
  font-weight: 700;
  font-size: 2rem;
}
</style>
