import { mutation } from 'assets/Store';

export default {
  mounted() {
    const vm = this;
    window.addEventListener('scroll', vm.onScroll, true);
  },
  methods: {
    onScroll(e) {
      mutation.setScrollTop(e.target.scrollTop);
    },
  },
};
