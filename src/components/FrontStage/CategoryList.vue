<script>
export default {
  name: 'CategoryList',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      current: '所有品項',
      isShow: false,
    };
  },
  methods: {
    menuShow() {
      this.isShow = !this.isShow;
    },
    selectHandler(e) {
      e.preventDefault();
      const { category } = e.currentTarget.dataset;
      if (this.$store.filter === category || !category) return;
      if (this.isShow) {
        this.isShow = !this.isShow;
      }
      this.current = category;
      this.$mutation.setFilter(category);
    },
    classHandler(val) {
      let itemClass = '';
      if (val === this.current) {
        itemClass = 'select item';
      } else {
        itemClass = 'item';
      }
      return itemClass;
    },
  },
  computed: {
    lists() {
      const lists = [...this.list];
      lists.unshift('所有品項');
      return lists;
    },
    rootStyle() {
      return {
        '--nav-height': `${this.$attrs.navHeight + 15}px`,
      };
    },
  },
  render() {
    return (
      <ul class={`menu mb-sm-2 ${this.isShow ? 'show' : ''}`}>
        <span class="mobile" onClick={this.menuShow}>
          <font-awesome-icon class="icon" icon="chevron-up"/>
        </span>
      {
        this.lists.map((li) => <li class={this.classHandler(li)} key={li}>
          <a href="#" data-category={li} onClick={this.selectHandler} class="link">{li}</a>
        </li>)
      }
      </ul>
    );
  },
};
</script>

<style lang="scss" scoped>
@mixin item($y:3, $x:4) {
  position: relative;
  display: block;
  padding: $y * .25rem $x * .25rem;
}

.menu {
  --item-height: 42px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: .15rem;
  width: 100%;
  background: #fff;
  overflow: hidden;
  max-height: var(--item-height);
  transition: max-height .2s;
  .mobile {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: var(--item-height);
    cursor: pointer;
  }
  .icon {
    position: absolute;
    right: calc(var(--item-height) / 2);
    font-size: 20px;
    color: #fff;
    top: calc((var(--item-height) - 20px) / 2);
    transform: rotate(180deg);
    transition: transform .2s;
  }
  &.show {
    max-height: 999px;
    transition: max-height .2s;
    .icon {
      transform: rotate(360deg);
    }
  }
  .item {
    position: relative;
    transition: all .3s ease;
    order: 2;
  }
  .item:hover {
    background-color:rgba(204,214,224,0.4);
  }
  .link {
    @include item;
    color: v(secondary);
    transition: transform .3s ease;
  }
  .select {
    order: 1;
    .link {
      font-weight: 700;
      background: v(primary);
      color: #fff;
    }
  }
}

@media (min-width: 992px) {
  .menu {
    max-height: 999em;
    display: block;
    position: sticky;
    top: var(--nav-height);
    border: 1px solid #eee;
    .item {
      border-bottom: 1px solid #eee;
    }
    .item:first-of-type {
      border-bottom: 2px solid v(success);
    }
    .item:last-of-type {
      border-bottom: none;
    }
    .mobile {
      display: none;
    }
  }
}
</style>
