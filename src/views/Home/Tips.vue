<template>
  <div class="container tips">
    <BrushTitle>
      <template>啤酒的分類</template>
    </BrushTitle>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4" v-for="tip in tips" :key="tip.en">
        <card :data="tip"/>
      </div>
    </div>
  </div>
</template>

<script>
import BrushTitle from 'components/BrushTitle.vue';
import tips from 'assets/_tips.json';
import card from 'components/FrontStage/TipCard.vue';

export default {
  name: 'Tips',
  components: { card, BrushTitle },
  data() {
    return {
      tips,
    };
  },
  mounted() {
  },
  methods: {
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
