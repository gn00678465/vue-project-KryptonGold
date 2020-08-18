<template>
  <div class="index">
    <Jumbotron />
    <section class="container-xl" v-for="i in 2" :key="i">
      <div class="row">
        <div class="col-sm-12 col-lg-6 col-xl-3" v-for="j in 4" :key="j">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Jumbotron from 'components/FrontStage/Jumbotron.vue';

export default {
  name: 'Index',
  components: { Jumbotron },
  data() {
    return {
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

.index {
  height: auto;
}

section {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
