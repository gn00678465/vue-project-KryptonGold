<template>
  <div class="card">
    <h2 class="title">{{data.zh}}</h2>
    <h3>{{data.en}}</h3>
    <p class="description">{{data.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'TipCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import './style/_tipcard.scss';

.card {
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2px;
    color: rgb(6, 6, 71);
  }
  .description {
    font-size: 1rem;
    margin: 2rem auto 2rem auto;
    text-align: left;
    font-weight: 400;
    line-height: 1.2;
    color: hsl(229, 6%, 66%);
  }
}
</style>
