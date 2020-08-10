<template>
  <div class="about" :style="{'padding-top': mt + 'px'}">
    About
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
.about {
  height: 100%;
}
</style>
