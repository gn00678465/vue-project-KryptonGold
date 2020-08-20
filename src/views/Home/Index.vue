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
.index {
  padding-top: 0;
}
</style>
