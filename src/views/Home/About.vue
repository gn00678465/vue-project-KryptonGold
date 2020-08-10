<template>
  <div class="container" :style="{'padding-top': mt + 'px'}">
    <div class="about">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
.container {
  flex: 1 0 auto;
}
.about {
  margin-top: 1.5rem;
}
</style>
