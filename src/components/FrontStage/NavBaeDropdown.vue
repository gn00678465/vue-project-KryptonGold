<template>
  <div class="dropdown" :class="{open: isShow}" @click.prevent="dropdownHandler(!isShow)">
    <icon class="nav-icon" iconName="cart" />
    <div class="dropdownMenu">
      <component :is="view"></component>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBaeDropdown',
  components: {
    NavbarCart: () => import('./_NavbarCart.vue'),
  },
  data() {
    return {
      isShow: false,
      view: 'NavbarCart',
    };
  },
  mounted() {
  },
  methods: {
    dropdownHandler(fix) {
      this.isShow = fix;
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  display: inline-block;
  align-items: center;
  cursor: pointer;
  .nav-icon {
    width: 1.8rem;
    height: 1.8rem;
  }
  &.open {
    .dropdownMenu {
      opacity: 1;
      display: flex;
    }
  }
}

.dropdownMenu {
  height: auto;
  position: absolute;
  background: white;
  box-shadow: 0 50px 100pxrgba(50,50,93,.1),
  0 15px 35px rgba(50,50,93,.15),
  0 5px 15px rgba(0,0,0,.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: none;
  justify-content: center;
  top: 0;
  right: 0;
  top: 50px;
  border-top: 5px solid #f44336;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  opacity: 0;
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {}
</style>
