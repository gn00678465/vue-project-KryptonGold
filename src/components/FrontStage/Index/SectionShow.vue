<template>
  <section class="container">
    <Card :set="CardSet[0]">
      <template #title>現在滿千免運!!</template>
      <template #content>炎炎夏日就是要來杯沁涼啤酒才過癮!</template>
      <template #button>
        <button type="button" class="pure-button pure-button-outline-secondary"
          @click.prevent="goProducts">選購去</button>
      </template>
    </Card>
    <Card :set="CardSet[1]">
      <template #title>有青才敢大聲！</template>
      <template #content>上帝創造世界花了七天，台灣環島一週須要12天，賽德克票房四天破億，人會再一夜間長大，而這支啤酒必須在18天內喝完。</template>
      <template #button>
        <button type="button" class="pure-button pure-button-outline-light"
          @click.prevent="goProduct(CardSet[1].id)">選購去</button>
      </template>
    </Card>
    <Card :set="CardSet[2]">
      <template #title>是檸檬，我加了檸檬!!</template>
      <template #content>臺虎精釀的「臺式檸檬沙瓦Formosawa」將大量檸檬果汁加入這款新品，整體果汁含量高達12%，喝起來充滿檸檬清香與甜味。</template>
      <template #button>
        <button type="button" class="pure-button pure-button-outline-secondary"
          @click.prevent="goProduct(CardSet[2].id)">選購去</button>
      </template>
    </Card>
  </section>
</template>

<script>
import Card from './IndexCard.vue';

export default {
  name: 'SectionShow',
  components: {
    Card,
  },
  data() {
    return {
      CardSet: [
        {
          bgColor: '#ffffff',
          RWDColor: '#ffffff80',
          color: '#000',
          reverse: false,
          id: 'null',
          imgUrl: 'https://images.unsplash.com/photo-1509404969887-525aab7cc41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        },
        {
          bgColor: '#367110',
          RWDColor: '#36711080',
          color: '#FFF',
          reverse: true,
          id: 'kvEtBaFq40fIlGGIvCscqOpqU7QRsEFQAKnSi76PeEWwfx4tFoVrxEVYqPvDbeE1',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FXhg97dGU43fqkIVtBPkG9Uv0lK4ngr7uCIKiEqSnqG1QerQaBNyQ1cuaQEaQ03Fe60aX0TZLd32Hc082LF91FIQxT56zwkff1D2Fp856k46RFDwmnQoMs11cTIZQLrw.jpg',
        },
        {
          bgColor: '#e1db2e',
          RWDColor: '#e1db2e80',
          color: '#000',
          reverse: false,
          id: 'Qw2ubMp5sd7Q25NxjxenyTRQvJaLo0wiw2PE4sUfv6qnSk9SeLk31IuGJzdqYkES',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WJLR7vOE2JrQbalp1DURQyOlfg4CkJtRxRoKxvF42S9gef6wrE6LR8Fv4vEGfjDxoWedf5hs6LNWbXcwnokDmb0XmmXF7fAkI9RnzUANGF8FsiIiu4XRlwgn3uVvl5cm.jpg',
        },
      ],
    };
  },
  methods: {
    goProducts() {
      this.$router.push({ name: 'products' });
    },
    goProduct(id) {
      this.$router.push({ name: 'product', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
