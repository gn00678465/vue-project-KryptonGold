<template>
  <div class="container my-3 sortSwiper">
    <swiper ref="sortSwiper" :options="swiperOptions">
    <swiper-slide v-for="slide in slides" :key="slide.data" :class="noSwiping">
      <div class="sort" :style="{'backgroundImage': `url(${slide.imgUrl})`}">
        <div class="content">
          <p class="test">{{ slide.content }}</p>
          <button type="button" class="pure-button pure-button-outline-light"
          :data-sort="slide.data" @click.prevent="goProducts($event)">查看所有{{ slide.data }}</button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>
</template>

<script>

export default {
  name: 'SectionSort',
  components: {
  },
  data() {
    return {
      slides: [
        {
          data: '愛爾啤酒',
          content: '慢慢啜飲愛爾啤酒的厚實濃郁',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/wTlAHfRVwaA0H9xXlkUYATpgxkiW8IKYen8zEyORgkLKP8SBgRXTmopUSwe4f5V6RuMVYJVO4ZZB71E66EhA195M9UAXEIbIHJy3ctG6fr3abMT7yhSAOqhRroQnDjuA.jpg',
        },
        {
          data: '拉格啤酒',
          content: '爽快吞下拉格啤酒的清新',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/A0BRdPce3puOuSLVw0UAfhiwZZfpxLqJBqxApJKfK7tn9S6mJaX2cNAYtgoKvGHrV7tEmt18RfR2ZrmnSlqlKEDEnh3hwFdzVHhC4QPQoQSZhDNN2jtV6dvacqYU48gj.jpg',
        },
        {
          data: '白啤酒',
          content: '喜愛白啤酒的你',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/jijz6O4Y4bXRZAG1DVHQvb1zlAZxIGs1J1E2Te3w8ZKNkVGDNPontNSeOqINTnt8L62wR0OmJTtdkrZc6rQzIJZuH5NpHfZiZEXX0bZSvk6viorllr4R04oqFdxqgEXg.jpg',
        },
      ],
      swiperOptions: {
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
        noSwiping: true,
        noSwipingClass: 'stop-swiping',
      },
    };
  },
  methods: {
    goProducts(e) {
      const { sort } = e.currentTarget.dataset;
      this.$mutation.setFilter(sort);
      this.$router.push({ name: 'products' });
    },
  },
  computed: {
    // swiper() {
    //   return this.$refs.sortSwiper.$swiper;
    // },
    noSwiping() {
      return this.$store.clientWidth > 992 ? 'stop-swiping' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 3px;
    background: rgba(black, 0.3);
  }
}
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  .test {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
}

.sortSwiper {
  --swiper-theme-color: #fff;
  --swiper-navigation-size: 25px;
  position: relative;
  .swiper-button-prev {
    outline: none;
    left: 30px;
  }
  .swiper-button-next {
    outline: none;
    right: 30px;
  }
}

@media (min-width: 992px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
