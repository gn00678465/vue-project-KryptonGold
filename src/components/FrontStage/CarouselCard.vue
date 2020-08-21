<template>
  <div class="CarouselCard" @click.prevent="goToProduct">
    <div class="CarouselCard__details">
      <div class="CarouselCard__title">
        <h3>{{data.title}}</h3>
      </div>
      <div class="CarouselCard__description">
        <p>{{data.content}}</p>
      </div>
    </div>
    <img
      class="CarouselCard__img"
      :src="data.imageUrl[0]"
    >
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
    goToProduct() {
      this.$router.push(`/product/${this.data.id}`);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.CarouselCard {
  // root
  // background: rgb(33, 33, 33);
  border: 1px solid rgba(33, 33, 33, 0.5);
  border-radius: 0.3rem;
  // box-shadow: 1px 1px 10px 1px rgba(33, 33, 33, 0.75);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  outline: none;
  position: relative;
  transform: scale(1);
  transition: transform 0.25s ease-in-out;
  margin: 0 .25rem;
  // content
  .CarouselCard{
    // img
    &__img {
      height: 100%;
      width: 100%;
      transform: translateY(-2rem);
    }
    // details
    &__details {
      backface-visibility: hidden;
      background: rgba(33, 33, 33, 0.7);
      display: flex;
      flex-direction: column;
      height: 100%;
      position: absolute;
      top: calc(100% - 48px);
      width: 100%;
      z-index: 1;
      transition: top 0.5s ease-in-out;
    }
    // title area
    &__title {
      align-items: center;
      display: flex;
      min-height: 48px;
      justify-content: space-between;
      width: 100%;
      padding: 0.5rem;
    }
    // card title
    &__title h3 {
      width: 100%;
      text-align: center;
      color: rgb(215, 215, 215);
      // font-family: 'Coda', sans-serif;
      text-shadow: 1px 1px 1rem rgb(33, 33, 33);
    }
  }
}
</style>
