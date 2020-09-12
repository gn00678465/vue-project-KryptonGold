<template>
  <ul class="menu mb-sm-2" ref="menu">
    <LI v-for="(menu, i) in menus" :key="i" :menu="menu" />
  </ul>
</template>

<script>
import LI from './LI.vue';

export default {
  name: 'UL',
  components: {
    LI,
  },
  props: {
    list: {
      type: Array,
    },
  },
  mounted() {
    // console.log(this.$root);
    // this.$nextTick(() => {
    //   console.log(this.$refs.menu.getBoundingClientRect());
    // });
  },
  data() {
    return {
      menus: [
        {
          label: '所有品項',
        },
        {
          label: '分類',
          children: [],
        },
      ],
    };
  },
  methods: {
    setData() {
      const index = this.menus.findIndex((menu) => menu.label === '分類');
      this.menus[index].children = [...this.list];
    },
  },
  watch: {
    list: {
      immediate: true,
      handler() {
        this.setData();
      },
    },
  },
};
</script>

<style lang="scss">
@mixin item($y:3, $x:4) {
  position: relative;
  display: block;
  padding: $y * .25rem $x * .25rem;
}
.menu {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: .25rem;
  width: 100%;
  background: v(info);
  > .item {
    position: relative;
  }
  .link {
    @include item;
    display: flex;
  }
  .icon {
    cursor: pointer;
    margin-left: auto;
  }
}

.subMenu {
  max-height: 0;
  width: 100%;
  transition: max-height 0.3s;
  overflow: hidden;
  background-color: v(secondary);
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
  .link {
    @include item(3, 6);
  }
}

.link {
  color: #fff;
}
.link:not([data-category="menu"]) {
  &:hover {
    background-color: rgba(white, .1);
  }
  .select {
    display: inline-block;
    @include mark(#{v(hightlight)}, 40%);
  }
}

@keyframes marking {
  0% {
    background-image: linear-gradient(#{v(hightlight)});
    background-position: 0 100%;
    background-size: 0% 40%;
  }
  100% {
    @include mark(#{v(hightlight)}, 40%);
  }
}

.item.show {
  .icon {
    transform: rotate(180deg);
  }
  .subMenu {
    max-height: 99em;
  }
}

@media (min-width: 992px) {
  .icon {
    display: none;
  }
  .item {
    .subMenu {
      max-height: 99em;
    }
  }
}
</style>
