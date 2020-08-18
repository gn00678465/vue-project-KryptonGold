export default {
  mounted() {
    const vm = this;
    window.addEventListener('scroll', vm.onScroll, true);
  },
  methods: {
    onScroll(e) {
      if (e.target.scrollTop > 1) {
        this.$refs.navbar.classes['nav-bg'] = true;
      } else {
        this.$refs.navbar.classes['nav-bg'] = false;
      }
      // console.log(this.$parent.$refs.navbar.$el);
    },
  },
};
