<template>
  <div class="products vld-parent">
    <loading :active.sync="isLoading"
      :is-full-page="true">
      <LoadEffect slot="default"/>
      </loading>
    <div class="banner">
      <img class="slide" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PLKhk6JeCtmopqGlcl7jphiYmfpXreT4aMUWjwNzF8prekNolukphssTKiRrLt2FGbCAhu5MJZ6plErksVT8ETngzFIOJEWk2hoI3m7dFAyxQWw1nWh43aidPsRcOt91.jpg"/>
    </div>
    <div class="container my-3">
      <div class="row">
        <div class="col-lg-3">
          <Nav :list="categoryList" :filter.sync="filter" ref="nav"/>
        </div>
        <div class="col-lg-9 mt-3 mt-md-0">
          <section>
            <transition-group class="row" tag="div"
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave">
              <div class="col-xl-4 col-md-6 col-12" :data-index="i"
                v-for="(prod, i) in paginationProducts[page - 1]"
                :key="`${prod.id.substring(0, 5)}_${i}`">
                <ProdCard :data="prod" />
              </div>
            </transition-group>
            <pagination
              v-if="paginationProducts.length > 1"
              :total_pages="paginationProducts.length"
              :page.sync="page"
            />
        </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from 'components/FrontStage/CategoryList/UL.vue';
import FrontProductAPI from 'assets/Frontend_mixins/Product';
import Velocity from 'velocity-animate';

export default {
  name: 'Products',
  components: { Nav },
  mixins: [FrontProductAPI],
  data() {
    return {
      isLoading: false,
      page: 1,
      amount: 9,
      products: [],
      velocityDelay: 150,
    };
  },
  created() {
    this.GetProductList();
  },
  methods: {
    beforeEnter(el) {
      const card = el;
      card.style.opacity = 0;
      card.style.height = 0;
      card.style.width = 0;
      card.style.transformOrigin = 'top left';
    },
    enter(el, done) {
      const delay = el.dataset.index * this.velocityDelay;
      window.setTimeout(() => {
        Velocity(el, { scale: 0.4 }, { duration: 400 });
        Velocity(
          el,
          { opacity: 1, scale: 1, height: '100%' },
          { complete: done },
        );
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * (this.velocityDelay);
      window.setTimeout(() => {
        Velocity(el, { scale: 0 }, { duration: 300 });
        Velocity(el, { opacity: 0 }, { complete: done });
      }, delay);
    },
    dataHandler() {
      const newData = [];
      this.filterProduct.forEach((prod, i) => {
        if (i % this.amount === 0) newData.push([]);
        const page = parseInt(i / this.amount, 10);
        newData[page].push(prod);
      });
      return newData;
    },
    ScrollTo(position = 0) {
      this.$root.$el.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    },
  },
  computed: {
    paginationProducts() {
      return this.dataHandler();
    },
    categoryList() {
      const arr = [];
      this.products.forEach(((item) => arr.push(item.options.type)));
      const list = [];
      arr.forEach((val) => {
        if (list.indexOf(val) === -1) list.push(val);
      });
      return list;
    },
    filter() {
      return this.$store.filter;
    },
    filterProduct() {
      if (this.filter !== '所有品項') {
        return this.products.filter((item) => item.options.type === this.filter);
      }
      return this.products;
    },
    // sticky() {
    //   return this.$store.ScrollTop + this.NavHeight > this.NavData.top;
    // },
  },
  watch: {
    filter() {
      if (this.filter !== '所有品項') {
        this.page = 1;
      }
    },
    page() {
      this.ScrollTo();
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  .slide {
    display: block;
    height: 500px;
    object-fit: cover;
    width: 100%;
  }
}
</style>
