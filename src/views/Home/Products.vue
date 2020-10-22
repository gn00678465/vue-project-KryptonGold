<template>
  <div class="products vld-parent" :style="rootStyle">
    <loading :active.sync="isLoading"
      :is-full-page="true">
      <LoadEffect slot="default"/>
      </loading>
    <img class="banner" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PLKhk6JeCtmopqGlcl7jphiYmfpXreT4aMUWjwNzF8prekNolukphssTKiRrLt2FGbCAhu5MJZ6plErksVT8ETngzFIOJEWk2hoI3m7dFAyxQWw1nWh43aidPsRcOt91.jpg"/>
    <div class="container my-3">
      <div class="row">
        <div class="col-lg-3">
          <CategoryList :list="categoryList" v-bind="$attrs"/>
        </div>
        <div class="col-lg-9 mt-3 mt-md-0">
          <section>
            <div class="row">
              <div class="col-xl-4 col-md-6 col-12" :data-index="i"
                v-for="(prod, i) in paginationProducts[page - 1]"
                :key="`${prod.id.substring(0, 5)}_${i}`">
                <ProdCard :data="prod" />
              </div>
            </div>
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
import CategoryList from 'components/FrontStage/CategoryList.vue';
import FrontProductAPI from 'assets/Frontend_mixins/Product';

export default {
  name: 'Products',
  components: { CategoryList },
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
    rootStyle() {
      return {
        '--nav-height': `${this.$attrs.navHeight}px`,
      };
    },
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
.products {
  padding-top: var(--nav-height);
}
.banner {
  display: block;
  height: 300px;
  object-fit: cover;
  width: 100%;
}

@media screen and (min-width: 768px){
  .banner {
    height: 400px;
  }
}

@media screen and (min-width: 992px){
  .banner {
    height: 500px;
  }
}
</style>
