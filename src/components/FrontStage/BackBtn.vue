<template>
  <div class="wrapper-btn">
    <div class="btn-back" @click.prevent="$emit('click-emit')">
      <div class="icon"><font-awesome-icon :icon="['fas', 'arrow-left']" /></div>
      <slot>Back</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackBtn',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
$wrapper-btn-sm: 38px;

.wrapper-btn {
  width: $wrapper-btn-sm * 2;
  height: $wrapper-btn-sm;
  position: relative;
  z-index: 400;
  &::after {
    content: '';
    clear: both;
  }
  .btn-back {
    position: absolute;
    top: 0;
    // width: $wrapper-btn-sm;
    height: $wrapper-btn-sm;
    border-radius: $wrapper-btn-sm - 10px;
    float: left;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    transition: width .3s ease-out;
    width: $wrapper-btn-sm * 3;
    // &:hover {
    //   width: $wrapper-btn-sm * 3;
    // }
    .icon {
      display: inline-block;
      width: $wrapper-btn-sm;
      height: $wrapper-btn-sm;
      border-radius: $wrapper-btn-sm - 10px;
      line-height: $wrapper-btn-sm;
      font-size: $wrapper-btn-sm / 2 - 3px;
      text-align: center;
    }
    span {
      font-size: $wrapper-btn-sm / 2 - 5px;
      font-weight: 400;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .wrapper-btn {
    .btn-back {
      width: $wrapper-btn-sm;
      &:hover {
        width: $wrapper-btn-sm * 3;
      }
    }
  }
}
</style>
