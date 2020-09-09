<template>
  <div class="mt-4">
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="tip.en" v-for="tip in slider"
          :style="{backgroundImage: `url(${tip.img})`}">
          <div class="swiper-slide-content">
            <h4 class="timeline-title">{{ tip.en }}<br/>{{ tip.zh }}</h4>
            <p class="timeline-text">{{ tip.description }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
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
  mounted() {
  },
};
</script>

<style lang="scss" src="./style/Tips.scss">
</style>
