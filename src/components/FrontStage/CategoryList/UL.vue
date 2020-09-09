<template>
  <ul class="menu mb-sm-2">
    <LI v-for="(menu, i) in menus" :key="i" :menu="menu" v-on="$listeners"/>
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
  background-color: #fff;
}
.menu {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: .25rem;
  width: 100%;
  > .item {
    position: relative;
    border: 1px solid rgba(0,0,0,.125);
  }
  .link {
    @include item;
    display: flex;
    color: v(secondary);
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
  .link {
    @include item(3, 6);
    border-top: 1px solid #eee;
    background: rgba(0,0,0,.02);
  }
}

.subMenu .link {
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    opacity: 0;
    height: 80%;
    background: v(primary);
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
  }
  &:hover::before {
    opacity: 1;
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
</style>
