<template>
  <nav class="nav-light nav-fixed" :class="navClass" :style="escaped">
    <div class="container navbar" ref="nav">
      <router-link to="/" class="navbar__brand"><slot>Logo</slot></router-link>
      <button type="button" class="navbar__mobile-cart" @click="goToCart">
        <icon class="nav-icon" iconName="cart" />
        <span class="badge" v-if="cartLength">{{ cartLength }}</span>
      </button>
      <button type="button" class="navbar__toggle" @click.stop="showMenu">
        <icon class="nav-icon" iconName="menu" />
      </button>
      <div class="navbar__collapse" :class="{show: isShow}" @click.stop="showMenu">
        <div class="nav__logo">
          <slot>Logo</slot>
        </div>
        <ul class="nav__menu">
          <router-link to="/" tag="li" class="nav__item" exact-active-class="active">
            <span class="nav__link">首頁</span>
          </router-link>
          <router-link to="/products" tag="li" class="nav__item" exact-active-class="active">
            <span class="nav__link">所有產品</span>
          </router-link>
          <router-link to="/tips" tag="li" class="nav__item" exact-active-class="active">
            <span class="nav__link">豆知識</span>
          </router-link>
          <li class="nav__cart" @click.prevent="goToCart" :class="{disabled: cartDisable}">
            <icon class="nav-icon" iconName="cart" />
            <span class="badge" v-if="cartLength">{{ cartLength }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'NavBar',
  mixins: [FrontCartAPI],
  data() {
    return {
      isShow: false,
      cartLength: 0,
      escapeStyle: {
        'backdrop-filter': 'none',
      },
    };
  },
  created() {
    this.getCartLength();
    this.$bus.$on('get-cart', () => {
      this.getCartLength();
    });
  },
  methods: {
    showMenu() {
      if (this.$store.clientWidth < 768) {
        this.isShow = !this.isShow;
      }
    },
    goToCart() {
      if (this.$route.path === '/carts') return;
      this.$router.push('/carts');
    },
    getCartLength() {
      const vm = this;
      this.GetCartList()
        .then((data) => {
          vm.cartLength = data.meta.pagination.total;
        });
    },
  },
  computed: {
    navClass() {
      return (this.$store.ScrollTop > 1) ? 'nav-bg' : '';
    },
    escaped() {
      return (this.$store.clientWidth <= 768 && this.isShow && this.$store.ScrollTop > 1) ? this.escapeStyle : '';
    },
    cartDisable() {
      return this.$route.path === '/carts';
    },
  },
};
</script>

<style lang="scss" scoped>
$title-size: 1.7rem;
$logo-font: 'Kaushan Script';

@mixin toggle() {
  padding: .15rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem;
  cursor: pointer;
};

@mixin badge() {
  display: inline-block;
  padding: .25em .6em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background: v(danger);
  border-radius: 10rem;
  color: #fff;
};

.nav-light {
  color: v(secondary);
  .nav__item, .nav__cart {
    &:not(.disabled):not(.active):hover {
      background: rgba(#b65219, .5);
      color: #fff;
    }
    &.active {
      background: v(primary);
      color: #fff;
    }
  }
}

.nav-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
}

.nav-bg {
  background: rgba(245,245,247,0.72);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);;
}

.nav-icon {
  width: 1.8rem;
  height: 1.8rem;
}

.navbar {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: .15rem 1rem;
  transition: all 0.3s;
  &__brand {
    flex: 1 0 0;
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: $title-size;
    font-weight: 600;
    line-height: inherit;
    white-space: nowrap;
    font-family: $logo-font;
    color: v(dark);
  }
  &__mobile-cart {
    @include toggle;
    padding-right: 0.25rem;
    height: 100%;
    position: relative;
    &.active {
      .badge {
        display: none;
      }
    }
    &:not(.active) {
      .badge {
        position: absolute;
        top: 0;
        left: 15px;
        @include badge;
      }
    }
    &.disabled {
      cursor: auto;
    }
  }
  &__toggle {
    @include toggle;
    z-index: 999;
  }
  // collapse
  &__collapse {
    flex-grow: 1;
    flex-basis: 100%;
    padding: .5rem 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    transition: all 0.5s;
    transform: translateX(-100%);
    z-index: 500;
    display: flex;
    flex-direction: column;
    &.show {
      transform: translateX(0);
    }
  }
  .nav{
    &__logo {
      display: inline-block;
      font-size: $title-size;
      padding-top: .3125rem;
      padding-bottom: .3125rem;
      font-family: $logo-font;
    }
    &__close {
      @include toggle;
    }
    &__menu {
      align-items: center;
      width: 100%;
      display: block;
      order: 2;
    }
    &__item {
      padding: .5rem 1rem;
      display: flex;
      width: 100%;
      margin-top: .5rem;
      margin-bottom: .5rem;
      border-radius: 5px;
      cursor: pointer;
    }
    &__link {
      font-size: 1.2rem;
      font-weight: 700;
    }
    &__content {
      padding: .5rem 1rem;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
      order: 1;
      display: none;
    }
    &__cart {
      display: none;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .navbar {
    padding: 0.25rem 0;
    &__brand {
      flex: 0 0 0;
    }
    &__toggle, .nav__logo,
    &__mobile-cart {
      display: none;
    }
    &__collapse {
      position: initial;
      background: transparent;
      flex-basis: auto;
      display: flex;
      flex-direction: row;
      padding: 0;
      transform: initial;
    }
    .nav {
      &__menu {
        display: flex;
        order: 1;
        flex-grow: 1;
        flex-basis: 100%;
      }
      &__item {
        align-items: center;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        width: auto;
        margin-right: 0.5rem;
      }
      &__content {
        display: flex;
        flex: 1 0 0;
        order: 2;
      }
      &__cart {
        @include toggle;
        display: flex;
        align-items: center;
        order: 2;
        position: relative;
        margin-left: auto;
      }
      &__cart.active {
        .badge {
          display: none;
        }
      }
      &__cart:not(.active) {
        .badge {
          position: absolute;
          top: 0;
          left: 15px;
          @include badge;
        }
      }
      &__cart.disabled {
        cursor: auto;
      }
    }
  }
  .nav-bg {
    .navbar {
      padding: 0;
    }
  }
}

</style>
