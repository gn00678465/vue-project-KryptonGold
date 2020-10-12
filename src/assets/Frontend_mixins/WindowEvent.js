export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
    };
  },
  mounted() {
    const vm = this;
    window.addEventListener('scroll', vm.onScroll, true);
    window.addEventListener('resize', vm.onRisize, true);
  },
  methods: {
    onScroll(e) {
      this.$mutation.setScrollTop(e.target.scrollTop);
    },
    onRisize(e) {
      const { innerWidth, innerHeight } = e.target;
      this.screenWidth = innerWidth;
      this.screenHeight = innerHeight;
    },
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.$mutation.setClientWidth(val);
        this.timer = true;
        const vm = this;
        setTimeout(() => {
          vm.timer = false;
        }, 400);
      }
    },
    screenHeight(val) {
      if (!this.timer) {
        this.screenHeight = val;
        this.$mutation.setClientHeight(val);
        this.timer = true;
        const vm = this;
        setTimeout(() => {
          vm.timer = false;
        }, 400);
      }
    },
  },
};
