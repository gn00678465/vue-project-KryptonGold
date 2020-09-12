<template>
  <div class="my-4 tips">
    <div v-swiper:tipsSwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="tip.en" v-for="tip in slider"
          :style="{backgroundImage: `url(${tip.img})`}">
          <div class="swiper-slide-content">
            <h4 class="content-title">{{ tip.en }}<br/>{{ tip.zh }}</h4>
            <p class="content-text">{{ tip.description }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { tips } from 'assets/Tips';
import setting from './Tips/option';

export default {
  data() {
    return {
      slider: tips(),
      swiperOption: setting,
    };
  },
  methods: {
    goNext() {
      this.tipsSwiper.slideNext();
    },
    goPrev() {
      this.tipsSwiper.slidePrev();
    },
  },
};
</script>

<style lang="scss" src="./style/Tips.scss">
</style>
