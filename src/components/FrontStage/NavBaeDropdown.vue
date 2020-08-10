<template>
  <div class="dropdown" :class="{open: isShow}">
    <button @click.prevent="dropdownHandler(!isShow)">
      <icon class="nav-icon" :iconName="icon"/>
    </button>
    <div class="dropdownMenu" :style="{top: top + 'px'}" @mouseleave="dropdownHandler(false)">
      <component :is="view"></component>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBaeDropdown',
  components: {
    cart: () => import('./_NavbarCart.vue'),
    user: () => import('./_NavbarLogin.vue'),
  },
  props: {
    icon: {
      type: String,
    },
    top: {
      type: Number,
    },
  },
  data() {
    return {
      isShow: false,
      view: this.icon,
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
  // position: relative;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  display: inline-block;
  align-items: center;
  button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
  .nav-icon {
    border-radius: 3px;
    padding: 5px;
    width: 2.1rem;
    height: 2.1rem;
  }
  &.open {
    .dropdownMenu {
      opacity: 1;
      display: flex;
    }
    .nav-icon {
      background: #f44336;
      color: #fff;
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
  right: 4%;
  border-top: 5px solid #f44336;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  opacity: 0;
}

@media (min-width: 768px) {}

@media (min-width: 992px) {}
</style>
