<template>
  <div class="carts">
    <Progressbar :steps="steps" :current.sync="current"/>
    <transition mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut">
      <component :is="componentId" @goNext="goNext" @goBack="goBack"/>
    </transition>
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
    order: () => import('components/FrontStage/_CartOrder.vue'),
    final: () => import('components/FrontStage/_CartFin.vue'),
  },
  data() {
    return {
      steps: [
        '購物車清單',
        '填寫資料',
        '確認訂單',
        '訂單完成',
      ],
      componentId: '',
      current: 1,
      animation: 'test',
    };
  },
  mounted() {
    this.stepHandler();
  },
  methods: {
    stepHandler() {
      switch (this.current) {
        case 1:
          this.componentId = 'list';
          break;
        case 2:
          this.componentId = 'detail';
          break;
        case 3:
          this.componentId = 'order';
          break;
        case 4:
          this.componentId = 'final';
          break;
        default:
          this.componentId = 'list';
          break;
      }
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
</style>
