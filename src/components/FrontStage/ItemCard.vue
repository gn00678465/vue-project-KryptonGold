<template>
  <div class="ItemCard">
    <img :src="url" alt="" class="ItemCard__img">
    <div class="ItemCard__content">
      <h4 class="ItemCard__title">Test Card</h4>
      <div class="ItemCard__description">Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Aut quis eum
        distinctio provident, perferendis asperiores blanditiis</div>
      <footer class="ItemCard__footer">
        <div class="ItemCard__price">$123456</div>
        <button type="button" class="btn btn-cart">加入購物車</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  components: {},
  data() {
    return {
      url: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xDlnhD6WfhFj3bmwrzSWQVqYGJrTegdXwRQpSIDZqYKkrzDwGWCrrFiuiwrfn3W5B8sL0nlB2Y6GRmmIS57LxLmDXGwVHI0xYk7KjxqZNiJ6hfUbUrya0GjA17S2uEBH.png',
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
// reset
h1,
h2,
h3,
h4,
h5 {
  line-height: 1;
  margin: 0 0 0.7em;
}

.ItemCard {
  background: #fff;
  flex: 2 0 250px;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: rgba(45,45,45,0.03) 0 2px 2px,
    rgba(49,49,49,0.03) 0 4px 4px,
    rgba(42,42,42,0.03) 0 8px 8px,
    rgba(32,32,32,0.03) 0 16px 16px,
    rgba(49,49,49,0.03) 0 32px 32px,
    rgba(35,35,35,0.03) 0 64px 64px;
    transform: translate(0, -4px);
  }
  &__content {
    margin: 0.5rem;
    margin-bottom: 1rem;
  }
  &__img {
    width: 100%;
    display: flex;
  }
  &__title {
    height: 2em;
  }
  &__description {
    line-height: 1;
    height: 4em;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 4em;
  }
  .btn {
    @include btn;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    &-cart {
      color: #fff;
      background: #e67e22;
    }
  }
}
</style>
