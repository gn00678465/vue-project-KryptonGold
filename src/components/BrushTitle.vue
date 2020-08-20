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
  display: block;
  position: relative;
  height: 75px;
  margin-bottom: 1rem;
  .brush {
    top: 0;
    left: 0;
    position: absolute;
    width: auto;
    color: #000;
    transform: translate(0, -35px);
  }
  .title {
    position: absolute;
    top: 50%;
    left: 0;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    transform: translate(25px, -50%);
  }
}
</style>
