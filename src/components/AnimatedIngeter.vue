<template>
  <span>{{ tweeningValue|Currency|Dollar }} <slot></slot></span>
</template>

<script>
import TWEEN from 'tween.js';

export default {
  name: 'AnimatedIngeter',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tweeningValue: 0,
    };
  },
  mounted() {
    this.tween(0, this.value);
  },
  methods: {
    tween(startValue, endValue) {
      const vm = this;
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function set() {
          vm.tweeningValue = this.tweeningValue.toFixed(0);
        }).start();
      this.animate();
    },
    animate() {
      if (TWEEN.update()) {
        requestAnimationFrame(this.animate);
      }
    },
  },
  watch: {
    value(newValue, oldValue) {
      this.tween(oldValue, newValue);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
