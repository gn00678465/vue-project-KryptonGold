<template>
  <div class="tips" :style="rootStyle">
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
import WindowEvent from 'assets/Frontend_mixins/WindowEvent';
import setting from './Tips/option';

export default {
  mixins: [WindowEvent],
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
    swiperHeight() {
      const vm = this;
      this.swiperOption.height = this.screenHeight - this.$attrs.fooHeight - this.$attrs.navHeight;
      this.$nextTick(() => {
        vm.tipsSwiper.update();
      });
    },
  },
  computed: {
    rootStyle() {
      return {
        '--nav-height': `${this.$attrs.navHeight}px`,
        '--foo-height': `${this.$attrs.fooHeight}px`,
      };
    },
  },
  mounted() {
    this.swiperHeight();
  },
  watch: {
    screenHeight() {
      this.swiperHeight();
    },
  },
};
</script>

<style lang="scss" src="./style/Tips.scss">
</style>
