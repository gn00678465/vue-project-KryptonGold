<template>
  <nav class="nav-bg nav-light">
    <div class="container navbar">
      <a href="#" class="navbar__brand">navbar - Logo</a>
      <button type="button" class="navbar__toggle" @click="showMenu">
        <icon class="nav-icon" iconName="menu" />
      </button>
      <div class="navbar__collapse" :class="{show: isShow}">
        <div class="nav__logo">
          nav - Logo
        </div>
        <ul class="nav__menu">
          <li class="nav__item">
            <icon class="nav-icon" iconName="home" />
            <span class="nav__link">首頁</span>
          </li>
          <li class="nav__item">
            <icon class="nav-icon" iconName="boxes" />
            <span class="nav__link">所有產品</span>
          </li>
          <li class="nav__item">
            <icon class="nav-icon" iconName="info" />
            <span class="nav__link">關於我們</span>
          </li>
          <li class="nav__item">
            <icon class="nav-icon" iconName="contact_mail" />
            <span class="nav__link">聯繫我們</span>
          </li>
        </ul>
        <div class="nav__content">
          <a href="#" class=""><icon class="nav-icon" iconName="user" /></a>
          <a href="#" class="cart"><icon class="nav-icon" iconName="cart" />0</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showMenu() {
      this.isShow = !this.isShow;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
$title-size: 1.5rem;
$light-actived: #f44336;
$light-hover: #F7F7F7;
$light-text: #3c4858;

@mixin toggle() {
  padding: .15rem .75rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem;
  cursor: pointer;
  z-index: 999;
};

.nav-light {
  * {
    color: $light-text;
  }
  .nav__item {
    &:hover {
      background: $light-hover;
    }
    &.active {
      background: #f44336;
      color: #fff;
    }
  }
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
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: $title-size;
    line-height: inherit;
    white-space: nowrap;
  }
  &__toggle {
    @include toggle;
  }
  // collapse
  &__collapse {
    flex-grow: 1;
    flex-basis: 100%;
    align-items: center;
    display: block;
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
    }
    &__close {
      @include toggle;
    }
    &__menu {
      flex-grow: 1;
      flex-basis: 100%;
      align-items: center;
      width: 100%;
      display: block;
    }
    &__item {
      padding: .5rem 1rem;
      // display: inline-block;
      // width: 100%;
      // height: auto;
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: .5rem;
      margin-bottom: .5rem;
      border-radius: 5px;
      cursor: pointer;
    }
    &__link {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
    &__content {
      padding: .5rem 1rem;
      * {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        display: flex;
        align-items: center;
        font-size: 1.4rem;
      }
      .nav-icon {
        width: 1.4rem;
        height: 1.4rem;
      }
      .cart {
        border: 1px solid #f44336;
        padding: .25rem .325rem;
        border-radius: 5px;
      }
    }
  }
}
.nav-bg {
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .navbar {
    &__toggle, .nav__logo {
      display: none;
    }
    &__collapse {
      position: initial;
      background: transparent;
      flex-basis: 100%;
      display: flex;
      padding: 0;
      transform: initial;
      .nav {
        &__menu {
          display: flex;
        }
        &__item {
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
