<template>
  <div class="vld-parent" :style="{'padding-top': mt + 'px'}">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect2 slot="default"/>
      </loading>
    <div class="banner">
      <img class="slide" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PLKhk6JeCtmopqGlcl7jphiYmfpXreT4aMUWjwNzF8prekNolukphssTKiRrLt2FGbCAhu5MJZ6plErksVT8ETngzFIOJEWk2hoI3m7dFAyxQWw1nWh43aidPsRcOt91.jpg"/>
    </div>
    <div class="container products">
      <section>
        <BrushTitle>啤酒</BrushTitle>
        <div class="row">
          <div class="col-xl-3 col-md-4 col-sm-6" v-for="prod in products" :key="prod.id">
            <ItemCard :data="prod" />
            </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BrushTitle from 'components/BrushTitle.vue';
import FrontProductAPI from 'assets/Frontend_mixins/Product'; // mixins: [FrontProductAPI]

export default {
  name: 'Products',
  components: { BrushTitle },
  mixins: [FrontProductAPI],
  data() {
    return {
      mt: 0,
      isLoading: false,
      products: [],
    };
  },
  created() {
    this.GetProductList(1);
  },
  mounted() {
    this.marginTop();
  },
  methods: {
    marginTop() {
      this.mt = this.$parent.$refs.navbar.navHeight;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 0.15rem;
  .slide {
    display: block;
    height: 500px;
    object-fit: cover;
    width: 100%;
  }
}

.products {
  padding-top: 0.5rem;
  flex: 1 0 auto;
}
</style>
