<template>
  <div class="container vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect slot="default"/>
      </loading>
    <div>
      <BackBtn @click-emit="goBack">繼續購物</BackBtn>
    </div>
    <div class="product" v-if="product">
      <div class="product__photo">
        <img :src="product.imageUrl[1]">
        <div class="photo__main">
          <img :src="product.imageUrl[0]" alt="">
        </div>
      </div>
      <div class="product__info">
        <div class="product__content" ref="content">
          <p class="title">{{ product.title }}( 1 {{ product.unit }})</p>
          <p class="subtext">
            {{ product.options.type }} /
            {{ product.options.ml|ml }} /
            {{ product.options.percent|percent }}
          </p>
          <div class="product__price">
            <p class="origin"
              v-if="product.origin_price !== product.price">{{ product.origin_price|Dollar }}元</p>
            <p class="discount">{{ product.price|Dollar }}元</p>
          </div>
          <div class="active">
            <Increment :count.sync="quantity" :size="setSize" styled="dark" :key="setSize">
              <template #plus>
                <font-awesome-icon icon="plus" />
              </template>
              <template #minus>
                <font-awesome-icon icon="minus" />
              </template>
            </Increment>
            <button type="button" class="pure-button pure-button-primary" :disabled="addCarting"
              @click.prevent="addCart">
              <font-awesome-icon v-if="addCarting" icon="spinner" pulse />
              加入購物車
            </button>
          </div>
          <hr>
          <div class="description">
            <p class="description__title">介紹：</p>
            <p class="description__content">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="" v-if="product">
      <h4 class="h4">詳細資訊</h4>
      <ul class="information">
        <li class="item">
          <font-awesome-icon :icon="['fas', 'beer']" />
          <p class="item__title">種類：</p>
          <p class="item__content">{{ product.options.type }}</p>
        </li>
        <li class="item">
          <font-awesome-icon :icon="['fas', 'flag']" />
          <p class="item__title">品牌：</p>
          <p class="item__content">{{ product.options.brand }}</p>
        </li>
        <li class="item">
          <font-awesome-icon :icon="['fas', 'globe']" />
          <p class="item__title">國家：</p>
          <p class="item__content">{{ product.options.country }}</p>
        </li>
        <li class="item">
          <font-awesome-icon :icon="['fas', 'prescription-bottle']" />
          <p class="item__title">容量：</p>
          <p class="item__content">{{ product.options.ml|ml }}</p>
        </li>
        <li class="item">
          <font-awesome-icon :icon="['fas', 'percent']" />
          <p class="item__title">濃度：</p>
          <p class="item__content">{{ product.options.percent|percent }}</p>
        </li>
      </ul>
    </section>
    <Carsouel :id="id" class="mb-3" v-if="product">
      <template #h4>其他人也看了</template>
    </Carsouel>
  </div>
</template>

<script>
import Increment from 'components/Increment.vue';
import BackBtn from 'components/FrontStage/BackBtn.vue';
import FrontProductAPI from 'assets/Frontend_mixins/Product';
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'Product',
  mixins: [FrontProductAPI, FrontCartAPI],
  components: { Increment, BackBtn },
  props: ['id'],
  data() {
    return {
      isLoading: false,
      addCarting: false,
      product: '',
      quantity: 1,
    };
  },
  created() {
    this.GetProductDetial(this.id);
  },
  methods: {
    goBack() {
      window.history.back();
    },
    addCart() {
      this.CreateCart(this.product.id, this.quantity);
    },
    goTop() {
      if (this.$store.ScrollTop > 100) {
        this.$root.$el.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
  },
  computed: {
    setSize() {
      if (this.screenWidth <= 768) return 'sm';
      return 'md';
    },
  },
  watch: {
    id() {
      this.goTop();
      this.GetProductDetial(this.id);
    },
  },
};
</script>

<style lang="scss" scoped src="./style/Product.scss">
</style>
