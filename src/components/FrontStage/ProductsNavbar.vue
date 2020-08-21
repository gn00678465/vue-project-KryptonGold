<template>
  <nav class="navbar">
    <div class="container nav">
      <span class="item" data-category="all" :class="{active: category === 'all'}"
        @click.prevent="selectHandler($event)">所有酒類</span>
        <span class="item mobile-show" @click.prevent="showMenu">分類
          <span v-if="isShow">⮝</span>
          <span v-else>⮟</span>
        </span>
        <ul class="list" :class="{show: isShow}">
          <li class="item"
            v-for="(link, i) in list" :key="i"
            :data-category="link" :class="{active: category === link}"
            @click.prevent="selectHandler($event)">
            {{link}}
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ProductsNavbar',
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      isShow: false,
      category: 'all',
    };
  },
  methods: {
    selectHandler(e) {
      this.category = e.target.dataset.category;
      this.$emit('update:filter', this.category);
    },
    showMenu() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  margin-bottom: 0.5rem;
}
.item {
  line-height: 40px;
  display: block;
  font-size: 1.1rem;
  padding: 0 0.15rem;
  cursor: pointer;
  &.active {
    font-weight: 600;
  }
}
ul.list {
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s ease;
  &.show {
    transition: max-height .3s ease;
    max-height: 10em;
  }
  .item {
    margin-left: 1rem;
  }
}

@media (min-width: 768px) {
  .item {
    display: inline-block;
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }
  .mobile-show {
    display: none;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  ul.list {
    max-height: unset;
    display: flex;
    margin-left: 2rem;
  }
}
</style>
