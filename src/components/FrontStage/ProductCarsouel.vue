<template>
  <swiper ref="carsouelSwiper" :options="swiperOption"
    @mouseenter.native="enterHandler" @mouseleave.native="leaveHandler">
    <swiper-slide v-for="prod in filterData" :key="prod.id" :data-id="prod.id">
      <card :data="prod"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import FrontProductAPI from 'assets/Frontend_mixins/Product';
import card from './CarouselCard.vue';

let vm = null;
export default {
  name: 'ProductCarsouel',
  mixins: [FrontProductAPI],
  components: {
    card,
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      products: [],
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          375: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 6,
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 8,
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 10,
          },
        },
        on: {
          tap() {
            const { id } = this.clickedSlide.dataset;
            vm.handleClickSlide(id);
          },
        },
      },
    };
  },
  created() {
    this.GetProductList();
    vm = this;
  },
  methods: {
    enterHandler() {
      this.swiper.autoplay.stop();
    },
    leaveHandler() {
      this.swiper.autoplay.start();
    },
    handleClickSlide(id) {
      this.$router.push({ path: `/product/${id}` });
    },
  },
  computed: {
    filterData() {
      if (this.id !== undefined) {
        return this.products.filter((prod) => prod.id !== this.id);
      }
      return this.products;
    },
    swiper() {
      return this.$refs.carsouelSwiper.$swiper;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
