<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-6 col-lg-4">
          <div class="tick"><Tick ref="tick" /></div>
          <h4 class="h4">付款已完成</h4>
          <p class="content">
            感謝你的購買!!
          </p>
          <button type="button" class="pure-button pure-button-primary w-100"
          @click.prevent="goProducts">
            返回購物
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tick from './Tick.vue';

export default {
  name: 'FinPage',
  components: {
    Tick,
  },
  data() {
    return {
      delay: 400,
    };
  },
  mounted() {
    this.startTick();
  },
  methods: {
    startTick() {
      window.setTimeout(() => {
        this.$refs.tick.run = true;
      }, this.delay);
    },
    goProducts() {
      this.$router.push({ name: 'products' });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
[class*="col-"] {
  margin-bottom: -6rem;
}
.tick {
  transform: translateY(-15%) scale(.4);
}
.h4 {
  font-size: 1.3rem;
  font-weight: 700;
  transform: translateY(-10rem);
  text-align: center;
}
.content {
  line-height: 1.5;
  text-align: center;
  transform: translateY(-10rem);
}
.pure-button {
  transform: translateY(-8rem);
}
</style>
