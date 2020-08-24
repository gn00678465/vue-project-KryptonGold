export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
    };
  },
  mounted() {
    const vm = this;
    window.onresize = () => (() => {
      window.screenWidth = document.body.clientWidth;
      vm.screenWidth = window.screenWidth;
    })();
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        const vm = this;
        setTimeout(() => {
          // vm.init();
          vm.timer = false;
        }, 400);
      }
    },
  },
};
