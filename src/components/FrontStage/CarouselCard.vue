<template>
  <div class="CarouselCard">
    <img
      class="CarouselCard__img"
      :src="data.imageUrl[0]"
    >
    <h3 class="title">{{ data.title }}</h3>
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
  border-radius: 0.25rem;
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
  }
  .title {
    padding: .5rem 0;
    background: v(secondary);
    width: 100%;
    height: 40px;
    margin-top: -20px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
