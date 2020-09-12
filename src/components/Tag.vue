<template>
  <div class="tag" :style="setStyle">
    <slot name="tag">tag</slot>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    bgColor: {
      type: String,
      default: 'primary',
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    setStyle() {
      return {
        '--tag-bg': `var(--${this.bgColor})`,
        '--tag-color': this.color,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tag {
  display: inline-block;
  background: var(--tag-bg);
  color: var(--tag-color);
  border-radius: 3px 0 0 3px;
  line-height: 26px;
  padding: 0 10px 0 23px;
  position: relative;
  cursor: default;
  user-select: none;
  margin-right: 20px;
  font-size: 1rem;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    height: 6px;
    left: 10px;
    width: 6px;
    top: 10px;
  }
  &::after {
    border-bottom: 13px solid transparent;
    border-left: 10px solid var(--tag-bg);
    border-top: 13px solid transparent;
    right: -10px;
    top: 0;
  }
}
</style>
