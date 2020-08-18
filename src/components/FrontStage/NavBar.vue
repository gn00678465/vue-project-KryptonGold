<template>
  <nav class="nav-light nav-fixed" :class="classes" :style="{}">
    <div class="container navbar">
      <router-link to="/" class="navbar__brand"><slot>Logo</slot></router-link>
      <button type="button" class="navbar__mobile-cart" @click="goToCart">
        <icon class="nav-icon" iconName="cart" />
        <span class="badge">{{cartLength}}</span>
      </button>
      <button type="button" class="navbar__toggle" @click="showMenu">
        <icon class="nav-icon" iconName="menu" />
      </button>
      <div class="navbar__collapse" :class="{show: isShow}" @click="showMenu">
        <div class="nav__logo">
          <slot>Logo</slot>
        </div>
        <ul class="nav__menu">
          <router-link to="/" tag="li" class="nav__item" exact-active-class="active">
            <icon class="nav-icon" iconName="home" />
            <span class="nav__link">首頁</span>
          </router-link>
          <router-link to="/products" tag="li" class="nav__item" exact-active-class="active">
            <icon class="nav-icon" iconName="boxes" />
            <span class="nav__link">所有產品</span>
          </router-link>
          <router-link to="about" tag="li" class="nav__item" exact-active-class="active">
            <icon class="nav-icon" iconName="info" />
            <span class="nav__link">豆知識</span>
          </router-link>
          <router-link to="contactus" tag="li" class="nav__item" exact-active-class="active">
            <icon class="nav-icon" iconName="contact_mail" />
            <span class="nav__link">聯繫我們</span>
          </router-link>
        </ul>
        <!-- <div class="nav__content">
          <dropdown :icons="['cart']" :top="top"/>
        </div> -->
        <router-link to="/carts" tag="li" class="nav__cart">
          <icon class="nav-icon" iconName="cart" />
          <span class="badge">{{cartLength}}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import FrontCartAPI from 'assets/Frontend_mixins/Cart'; // mixins: [FrontCartAPI]
import { mutation } from 'assets/store';

export default {
  name: 'NavBar',
  mixins: [FrontCartAPI],
  components: {},
  data() {
    return {
      isShow: false,
      top: 0,
      navHeight: 0,
      dropdown: {},
      cartLength: 0,
      classes: {
        'nav-bg': false,
      },
    };
  },
  created() {
    this.getCartLength();
    this.$bus.$on('get-cart', () => {
      this.getCartLength();
    });
  },
  mounted() {
    window.addEventListener('resize', this.onResize());
  },
  destroyed() {
    window.addEventListener('resize', this.onResize());
  },
  methods: {
    showMenu() {
      if (window.innerWidth < 768) {
        this.isShow = !this.isShow;
      }
    },
    goToCart() {
      if (this.$route.path === '/carts') return;
      this.$router.push('/carts');
    },
    onResize() {
      if (window.innerWidth < 767) {
        const { height } = this.$el.querySelector('.navbar').getBoundingClientRect();
        // const height = this.$el.querySelector('.nav__content').clientHeight;
        this.top = height;
      } else if (window.innerWidth >= 768) {
        const { height } = this.$el.querySelector('.navbar').getBoundingClientRect();
        this.top = height;
      }
      this.navHeight = this.$el.querySelector('.navbar').getBoundingClientRect().height;
    },
    getCartLength() {
      const vm = this;
      this.GetCartList()
        .then((data) => {
          vm.cartLength = data.meta.pagination.total;
          mutation.setCartsArray(data.data);
        });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
$title-size: 1.5rem;
$light-hover: #eee;
$light-text: #3c4858;
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
  background: v(theme-primary);
  border-radius: 10rem;
  color: #fff;
};

.nav-light {
  color: $light-text;
  .nav__item, .nav__cart {
    &:hover {
      background: $light-hover;
    }
    &.active {
      background: v(theme-primary);
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
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);;
  backdrop-filter: saturate(180%) blur(20px);
}

.nav-icon {
  width: 1.8rem;
  height: 1.8rem;
}

.navbar {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  transition: all 0.5s;
  &__brand {
    flex: 1 0 0;
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: $title-size;
    line-height: inherit;
    white-space: nowrap;
    font-family: $logo-font;
    color: $light-text;
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
    // flex
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
      // flex-grow: 1;
      // flex-basis: 100%;
      align-items: center;
      width: 100%;
      display: block;
      order: 2;
    }
    &__item {
      padding: .5rem 1rem;
      // display: inline-block;
      // width: 100%;
      // height: auto;
      // align-items: center;
      display: flex;
      width: 100%;
      margin-top: .5rem;
      margin-bottom: .5rem;
      border-radius: 5px;
      cursor: pointer;
    }
    &__link {
      margin-left: 1rem;
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
      .nav-icon {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
    &__cart {
      display: none;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .navbar {
    &__brand {
      flex: 0 0 0;
    }
    &__toggle, .nav__logo, &__mobile-cart {
      display: none;
    }
    &__collapse {
      position: initial;
      background: transparent;
      flex-basis: 100%;
      display: flex;
      flex-direction: row;
      padding: 0;
      transform: initial;
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
        &__link {
          margin-left: 0.5rem;
        }
        &__content {
          display: flex;
          flex: 1 0 0;
          order: 2;
        }
        &__cart {
          @include toggle;
          display: inline-block;
          padding: 0.5rem 1rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          order: 2;
          position: relative;
          &.active {
            .badge {
              display: none;
            }
          }
          &:not(.active) {
            .badge {
              position: absolute;
              top: 5px;
              left: 30px;
              @include badge;
            }
          }
        }
      }
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .navbar {
    &__collapse {
      flex-basis: auto;
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {}

</style>
