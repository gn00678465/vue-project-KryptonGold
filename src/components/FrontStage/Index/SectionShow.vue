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
    <Card :set="CardSet[1]" :reverse="true">
      <template #title>中秋月圓喝酒趣!!</template>
      <template #content>歡慶中秋節，所有商品 95 折優惠!</template>
      <template #button>
        <button type="button" class="pure-button pure-button-outline-light"
          @click.prevent="copyCode(CardSet[1].id)">複製優惠碼</button>
      </template>
    </Card>
    <!-- prod -->
    <Card v-for="(set, i) in ProdSets" :key="set.id" :set="set" :reverse="(i % 2) !== 0">
      <template #title>{{ ProdContent[i].title }}</template>
      <template #content>{{ ProdContent[i].content }}</template>
      <template #button>
        <button type="button" :class="set.btnClass"
          @click.prevent="goProduct(set.id)">選購去</button>
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
          id: 'null',
          imgUrl: 'https://images.unsplash.com/photo-1509404969887-525aab7cc41a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        },
        {
          bgColor: '#010e2a',
          RWDColor: '#010e2a80',
          color: '#FFF',
          id: 'moon1001',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/THSfe4eZCkgy20JmJ9YhTdxNbJCTxEGGM3ilwiilx3hnTBca3d1AV1p8Jp3TZPeXccnCGE5c6AlwUqtkiG5CrNbDkIj9CylGdJUuMB2DwYz7VapEbj9PaCIiZJjpvNSq.png',
        },
      ],
      ProdSets: [
        {
          bgColor: '#367110',
          RWDColor: '#36711080',
          btnClass: 'pure-button pure-button-outline-light',
          color: '#FFF',
          id: 'kvEtBaFq40fIlGGIvCscqOpqU7QRsEFQAKnSi76PeEWwfx4tFoVrxEVYqPvDbeE1',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FXhg97dGU43fqkIVtBPkG9Uv0lK4ngr7uCIKiEqSnqG1QerQaBNyQ1cuaQEaQ03Fe60aX0TZLd32Hc082LF91FIQxT56zwkff1D2Fp856k46RFDwmnQoMs11cTIZQLrw.jpg',
        },
        {
          bgColor: '#e1db2e',
          RWDColor: '#e1db2e80',
          btnClass: 'pure-button pure-button-outline-secondary',
          color: '#000',
          id: 'R1MqWITs63hZW5pdOLoVAeZxdGoKnFAxOK9yXk9MLEx7mj6M6zHEMYoPRB1daFyL',
          imgUrl: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WJLR7vOE2JrQbalp1DURQyOlfg4CkJtRxRoKxvF42S9gef6wrE6LR8Fv4vEGfjDxoWedf5hs6LNWbXcwnokDmb0XmmXF7fAkI9RnzUANGF8FsiIiu4XRlwgn3uVvl5cm.jpg',
        },
      ],
      ProdContent: [
        {
          title: '現在滿千免運!!',
          content: '炎炎夏日就是要來杯沁涼啤酒才過癮!',
        },
        {
          title: '是檸檬，我加了檸檬!!',
          content: '「臺式檸檬沙瓦Formosawa」將大量檸檬果汁加入這款新品，整體果汁含量高達12%，喝起來充滿檸檬清香與甜味。',
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
    copyCode(code) {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(code);
      this.$toast.success('已複製優惠碼');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
