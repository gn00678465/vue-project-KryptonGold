<template>
  <li class="item" :class="{show: hasChildren && isShow}">
    <!-- Object -->
    <a class="link" href="#" @click.prevent="selectHandler" :data-category="dataset">
      <p :class="{select: classes}">
        {{ menu.label || menu }}
      </p>
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
      const { category } = e.currentTarget.dataset;
      if (this.hasChildren) {
        this.showMenu();
      } else {
        this.$mutation.setFilter(category);
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
    classes() {
      return this.dataset === this.$store.filter;
    },
  },
};
</script>
