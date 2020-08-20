<template>
  <div class="index">
    <Jumbotron />
    <section class="container">
      <Card :url="imgUrl[0]">
        <div class="card-content card1">
          <h2>炎炎夏日就是要來杯沁涼啤酒才過癮!</h2>
          <p>現在滿千免運!!</p>
          <button type="button" class="btn bnt-product" @click.prevent="goProducts">選購去</button>
        </div>
      </Card>
      <Card :reverse="true" :url="imgUrl[1]" bgColor="#367113">
        <div class="card-content card2">
          <h2>有青才敢大聲！</h2>
          <p>上帝創造世界花了七天，台灣環島一週須要12天，賽德克票房四天破億，人會再一夜間長大，而這支啤酒必須在18天內喝完。</p>
          <button type="button" class="btn bnt-product" @click.prevent="goProduct">選購去</button>
        </div>
      </Card>
    </section>
  </div>
</template>

<script>
import Jumbotron from 'components/FrontStage/Jumbotron.vue';
import Card from 'components/FrontStage/IndexCard.vue';

export default {
  name: 'Index',
  components: { Jumbotron, Card },
  data() {
    return {
      imgUrl: [
        'https://images.unsplash.com/photo-1509404969887-525aab7cc41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FXhg97dGU43fqkIVtBPkG9Uv0lK4ngr7uCIKiEqSnqG1QerQaBNyQ1cuaQEaQ03Fe60aX0TZLd32Hc082LF91FIQxT56zwkff1D2Fp856k46RFDwmnQoMs11cTIZQLrw.jpg',
      ],
    };
  },
  methods: {
    goProducts() {
      this.$router.push('/products');
    },
    goProduct() {
      this.$router.push('/product/kvEtBaFq40fIlGGIvCscqOpqU7QRsEFQAKnSi76PeEWwfx4tFoVrxEVYqPvDbeE1');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/indexCard.scss';

@media (min-width: 768px) {
  .index {
    padding-top: 0px;
  }
}

@media (min-width: 992px) {
  .index {
    padding-top: 0px;
  }
}
</style>
