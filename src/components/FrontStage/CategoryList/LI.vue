<template>
  <li class="item" :class="{show: hasChildren && isShow}">
    <!-- Object -->
    <a class="link" href="#" :data-category="dataset"
      @click.prevent="selectHandler">{{ menu.label || menu }}
      <font-awesome-icon v-if="hasChildren" class="icon" icon="chevron-up"/>
    </a>
    <ul class="subMenu" v-if="hasChildren">
      <LI v-for="(child, index) in menu.children" :key="index" :menu="child" v-on="$listeners"/>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'LI',
  components: {},
  props: {
    menu: {
      required: true,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    selectHandler(e) {
      const { category } = e.target.dataset;
      if (this.hasChildren) {
        this.showMenu();
      } else {
        this.$emit('update:filter', category);
      }
    },
    showMenu() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    hasChildren() {
      return !!(this.menu.children && this.menu.children.length);
    },
    dataset() {
      return this.hasChildren ? 'menu' : this.menu.label || this.menu;
    },
  },
};
</script>
