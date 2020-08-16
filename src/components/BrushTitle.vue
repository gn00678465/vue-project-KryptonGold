<template>
  <div class="brush-title">
    <icon class="brush" iconName="brush"></icon>
    <span class="title"><slot>Title</slot></span>
  </div>
</template>

<script>
export default {
  name: 'BrushTitle',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.brush-title {
  position: relative;
  .brush {
    width: auto;
    height: 75px;
    color: #000;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 0;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    transform: translate(50%, -50%);
  }
}
</style>
