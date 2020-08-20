<template>
  <div class="index">
    <Jumbotron />
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
