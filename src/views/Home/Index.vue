<template>
  <div class="index">
    <Jumbotron />
    <SectionSort />
    <SectionShow />
    <section class="container mb-2">
      <h4 class="h4">人氣推薦</h4>
      <Carsouel/>
    </section>
  </div>
</template>

<script>
import Jumbotron from 'components/FrontStage/Index/Jumbotron.vue';
import SectionShow from 'components/FrontStage/Index/SectionShow.vue';
import SectionSort from 'components/FrontStage/Index/SectionSort.vue';

export default {
  name: 'Index',
  components: {
    Jumbotron,
    SectionShow,
    SectionSort,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.h4 {
  font-size: 1.5rem;
}

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
