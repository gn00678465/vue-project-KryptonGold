<template>
  <div class="body" :style="{'padding-top': mt + 'px'}">
    <div class="carts">
      <Progressbar :steps="steps" :current.sync="current"/>
      <transition mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">
        <component :is="componentId" @goNext="goNext" @goBack="goBack"/>
      </transition>
    </div>
  </div>
</template>

<script>
import Progressbar from 'components/FrontStage/_CartProgressbar.vue';

export default {
  name: 'Carts',
  components: {
    Progressbar,
    list: () => import('components/FrontStage/_CartList.vue'),
    detail: () => import('components/FrontStage/_CartDetail.vue'),
    final: () => import('components/FrontStage/_CartFin.vue'),
  },
  data() {
    return {
      steps: [
        '購物車清單',
        '填寫資料',
        '訂單完成',
      ],
      mt: 0,
      componentId: '',
      current: 1,
      animation: 'test',
    };
  },
  mounted() {
    const vm = this;
    this.marginTop();
    this.stepHandler();
    window.addEventListener('scroll', vm.onScroll, true);
  },
  methods: {
    marginTop() {
      this.mt = this.$parent.$refs.navbar.navHeight;
    },
    stepHandler() {
      if (this.current === 1) this.componentId = 'list';
      else if (this.current === 2) this.componentId = 'detail';
      else if (this.current === 3) this.componentId = 'final';
    },
    onScroll(e) {
      if (e.target.scrollTop > 1) {
        this.$parent.$refs.navbar.classes['nav-bg'] = true;
      } else {
        this.$parent.$refs.navbar.classes['nav-bg'] = false;
      }
      // console.log(this.$parent.$refs.navbar.$el);
    },
    goNext() {
      this.current += 1;
    },
    goBack() {
      this.current -= 1;
    },
  },
  computed: {
  },
  watch: {
    current() {
      this.stepHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
div.body {
  flex: 1 0 auto;
}
.carts {
  margin-top: 1.5rem;
}

.container {
  height: 100%;
}
</style>
