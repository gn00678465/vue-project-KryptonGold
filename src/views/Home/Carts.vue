<template>
  <div class="carts" :style="{'padding-top': mt + 'px'}">
    cart
  </div>
</template>

<script>
export default {
  name: 'Carts',
  components: {},
  data() {
    return {
      mt: 0,
    };
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
.carts {
}
</style>
