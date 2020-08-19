<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-10 col-lg-8">
        <div class="fin">
          <div class="fin-img">
            <img src="https://images.unsplash.com/photo-1532635231-f2f26d8ad143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
          </div>
          <div class="fin-content">
            <div class="icon"><icon iconName="order_confirmed" /></div>
            <div class="text">
              <span>訂單已完成，感謝你的購買。</span>
              <button type="button" class="btn">查看訂單</button>
              <button type="button" class="btn" @click.prevent="goProduct">繼續購物</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartFin',
  components: {},
  data() {
    return {};
  },
  methods: {
    goProduct() {
      this.$router.push('/products');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

.fin {
  margin: 1rem 0;
  &-img, &-content  {
    width: 100%;
  }
  &-img {
    display: none;
  }
  &-content {
    display: flex;
    flex-direction: column;
    .icon, .text {
      flex-basis: 50%;
      display: flex;
      align-items: center;
    }
    .icon {
      justify-content: center;
      color: v(theme-order-success);
    }
    .text {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      line-height: 5rem;
      font-size: 1.2rem;
      font-weight: 600;
      text-align: center;
      padding: 0.5rem 1rem;
      span {
        margin-bottom: auto;
      }
      .btn {
        @include btn;
        width: 100%;
      }
      button:first-of-type {
        margin-bottom: 0.5rem;
      }
      button:last-of-type {
        color: #fff;
        border: 1px solid v(theme-order-success);
        background: v(theme-order-success);
        &:hover {
          border: 1px solid v(theme-order-success);
          background: v(theme-order-success-hover);
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .fin {
    display: flex;
    &-img, &-content  {
      flex: 1 0 50%;
    }
    &-img {
      display: block;
    }
    &-content {
      height: auto;
    }
  }
}
</style>
