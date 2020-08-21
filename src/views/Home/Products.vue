<template>
  <div class="products vld-parent">
    <loading :active.sync="isLoading"
      :is-full-page="true">
      <LoadEffect2 slot="default"/>
      </loading>
    <div class="banner">
      <img class="slide" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PLKhk6JeCtmopqGlcl7jphiYmfpXreT4aMUWjwNzF8prekNolukphssTKiRrLt2FGbCAhu5MJZ6plErksVT8ETngzFIOJEWk2hoI3m7dFAyxQWw1nWh43aidPsRcOt91.jpg"/>
    </div>
    <Nav :list="categoryList" :filter.sync="filter"/>
    <div class="container" @scroll="scrollHandler">
      <section>
        <BrushTitle>
          <span v-if="filter === 'all'">所有品項</span>
          <span v-else>{{filter}}</span>
        </BrushTitle>
        <div class="row">
          <div class="col-xl-3 col-md-4 col-sm-6"
            v-for="prod in paginationProducts[page - 1]" :key="prod.id">
            <ItemCard :data="prod" />
            </div>
        </div>
      </section>
    </div>
    <pagination
    v-if="paginationProducts.length > 1"
      :total_pages="paginationProducts.length"
      :page.sync="page"
    />
  </div>
</template>

<script>
import BrushTitle from 'components/BrushTitle.vue';
import Nav from 'components/FrontStage/ProductsNavbar.vue';
import FrontProductAPI from 'assets/Frontend_mixins/Product'; // mixins: [FrontProductAPI]

export default {
  name: 'Products',
  components: { BrushTitle, Nav },
  mixins: [FrontProductAPI],
  data() {
    return {
      isLoading: false,
      page: 1,
      amount: 12,
      products: [],
      filter: 'all',
    };
  },
  created() {
    this.GetProductList();
  },
  methods: {
    scrollHandler(e) {
      console(e);
    },
  },
  computed: {
    paginationProducts() {
      const newData = [];
      this.filterProduct.forEach((prod, i) => {
        if (i % this.amount === 0) newData.push([]);
        const page = parseInt(i / this.amount, 10);
        newData[page].push(prod);
      });
      return newData;
    },
    categoryList() {
      const arr = [];
      this.products.forEach(((item) => arr.push(item.category)));
      const list = [];
      arr.forEach((val) => {
        if (list.indexOf(val) === -1) list.push(val);
      });
      return list;
    },
    filterProduct() {
      if (this.filter === 'all') {
        return this.products;
      } return this.products.filter((item) => item.category === this.filter);
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
