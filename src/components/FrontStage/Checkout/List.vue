<template>
  <div>
    <h4 class="h4">
      <p class="mask text-bold">購物車清單</p>
      <font-awesome-icon icon="chevron-up" class="mobile-arrow" @click.prevent="isShow = !isShow"
      :class="{rotate: isShow}" />
    </h4>
      <transition name="fade">
        <div class="items" v-show="!isShow">
          <Item v-for="(data) in CartDatas" :key="data.product.id" :data="data"/>
        </div>
      </transition>
  </div>
</template>

<script>
import Item from 'components/FrontStage/Checkout/Item.vue';

export default {
  name: 'List',
  components: {
    Item,
  },
  data() {
    return {
      isShow: false,
      index: null,
    };
  },
  methods: {
    updatedHandler(index, value) {
      if (value && this.index !== index) {
        this.index = index;
      }
      if (!value && this.index === index) {
        this.index = null;
      }
    },
    goProducts() {
      this.$router.push({ name: 'products' });
    },
  },
  computed: {
    CartDatas() {
      return this.$store.cartList;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap';

.h4 {
  cursor: pointer;
}

.mask {
  display: inline-block;
  @include mark(#{v(hightlight)}, 40%);
}

.items {
  max-height: 99em;
  transition: all .5s;
}

.mobile-arrow {
  float: right;
  transition: transform .4s ease;
  margin-right: 1rem;
  &.rotate {
    transform: rotate(180deg);
    transition: transform .4s ease;
  }
  &::after {
    clear: both;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (min-width: 768px) {
  .h4 {
    cursor: auto;
  }
  .mobile-arrow {
    display: none;
  }
  .items {
    display: block !important;
    height: 100%;
  }
}
</style>
