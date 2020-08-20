<template>
  <div class="card" :style="{'flex-direction': reverse ? 'row-reverse' : 'row'}">
    <div class="card-img">
      <img :src="url" alt="">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IndexCard',
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  methods: {},
  computed: {},
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
  margin-top: 1rem;
  margin-bottom: 1rem;
  .card-img, .card-content {
    flex: 0 0 100%;
    max-width: 500px;
    max-height: 500px;
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
    *:first-child {
      display: block;
      text-align: center;
      font-size: 2.2rem;
      font-weight: 700;
    }
    *:nth-child(2) {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 600;
      margin: 1rem 0;
    }
  }
}

@media (min-width: 992px) {
  .card {
    .card-img, .card-content {
      margin: 0 15px;
    }
    .card-content {
      position: initial;
      transform: initial;
      width: auto;
      height: auto;
    }
  }
}
</style>
