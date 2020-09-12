export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
    };
  },
  mounted() {
    const vm = this;
    window.addEventListener('scroll', vm.onScroll, true);
    window.onresize = () => (() => {
      window.screenWidth = document.body.clientWidth;
      vm.screenWidth = window.screenWidth;
    })();
  },
  methods: {
    onScroll(e) {
      this.$mutation.setScrollTop(e.target.scrollTop);
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
  },
};
