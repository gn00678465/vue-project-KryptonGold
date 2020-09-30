<template>
  <div v-if="set" class="card" :class="{isReverse: reverse}" :style="styles">
    <div class="card-img">
      <img :src="set.imgUrl" alt="">
    </div>
      <div class="card-content">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <p class="content">
        <slot name="content"></slot>
      </p>
      <div class="button">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexCard',
  props: {
    set: {
      type: Object,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    styles() {
      return {
        '--bg-color': this.set.bgColor,
        '--rwd-color': this.set.RWDColor ? this.set.RWDColor : this.set.bgColor,
        '--color': this.set.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
}

.card {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  margin-top: 0.5rem;
  &:first-child {
    margin-top: 0;
  }
  .card-img, .card-content {
    flex: 0 0 100%;
    display: block;
  }
  .card-content {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: var(--rwd-color);
    color: var(--color);
    .title {
      display: block;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }
    .content {
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.5;
      margin: 1rem 0;
    }
  }
  &.isReverse {
    flex-direction: row-reverse;
  }
}

@media (min-width: 992px) {
  .card {
    .card-img, .card-content {
      flex: 0 0 50%;
      display: block;
    }
    .card-content {
      flex: 0 0 50%;
      position: initial;
      transform: initial;
      height: auto;
      background-color: var(--bg-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
