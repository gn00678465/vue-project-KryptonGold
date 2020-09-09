<template>
  <div class="CarouselCard">
    <img
      class="CarouselCard__img"
      :src="data.imageUrl[0]"
    >
    <div class="CarouselCard__details">
      <h3 class="title">{{ data.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselCard',
  components: {},
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.CarouselCard {
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  outline: none;
  position: relative;
  // content
  .CarouselCard{
    // img
    &__img {
      height: 100%;
      width: 100%;
      transform: translateY(-2rem);
      transition: all .3s;
    }
    // details
    &__details {
      width: 100%;
      z-index: 1;
      margin-top: -2rem;
    }
  }
  .title {
    margin-bottom: 0;
    align-items: center;
    text-align: center;
    padding: .5rem 0;
    background: v(secondary);
    width: 100%;
    text-align: center;
    color: v(light);
  }
  &:hover {
    .CarouselCard__img {
      transform: translateY(-2.2rem) scale(1.1);
    }
  }
}
</style>
