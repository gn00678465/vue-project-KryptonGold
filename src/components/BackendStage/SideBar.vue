<template>
  <aside class="l-navbar" :class="`l-navbar-${navStyle}`" :style="{'width': `${navWidth}px`}">
    <nav class="nav">
      <div class="nav__logo" :class="{'no-toggler': !showToggler}">
        <div class="nav__toggler" v-if="showToggler">三</div>
        <div class="nav__title">Hi! 管理員!</div>
      </div>
      <ul class="nav__list">
        <router-link :to="home.path" class="nav__item" tag="li"
        active-class="actived" exact>
          <icon class="nav__icon" :iconName="home.icon" />
          <span class="nav__text">{{home.name}}</span>
        </router-link>
        <router-link :to="`${home.path}/${link.path}`" class="nav__item" tag="li"
        v-for="link in childs" :key="link.path" active-class="actived" exact>
          <icon class="nav__icon" :iconName="link.icon" />
          <span class="nav__text">{{link.name}}</span>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>

<script>

export default {
  name: 'SideBar',
  components: {},
  props: {
    showToggler: {
      type: Boolean,
      default: false,
    },
    home: {
      type: Object,
      required: true,
    },
    childs: {
      type: Array,
      required: true,
    },
    navStyle: {
      type: String,
      default: 'light',
    },
  },
  data() {
    return {
      fullWidth: false,
      navWidth: 240,
    };
  },
  methods: {},
  computed: {
  },
};
</script>

<style lang="scss" scoped>

// variable
$nav-width: 92px;
/*===== Colores =====*/
$white-text: #FFF;
// dark
$dark-hover: #0C5DF4;
$dark-bg: #12192C;
$dark-sub: #B6CEFC;
$dark-hr: rgba(255,255,255,0.7);
// light
$light-actived: #f44336;
$light-hover: #F7F7F7;
$light-bg: $white-text;
$light-sub: #B6CEFC;
$light-text: #3c4858;
$light-hr: rgba(180,180,180,.3);
/*===== Fuente y tipografia =====*/
$body-font: 'Poppins', sans-serif;
$normal-font-size: 1rem;
$small-font-size: .875rem;
$icon-size: 24px;
/*===== z index =====*/
$z-fixed: 100;

/*===== l NAV =====*/
.l-navbar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  // width: $nav-width;
  padding: 0 1.5rem 2rem 1.5rem;
  transition: .5s;
  z-index: $z-fixed;
}
/*===== NAV =====*/
.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  overflow: hidden;
  // logo
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem .75rem;
    white-space: nowrap;
    position: relative;
    &__logo.no-toggler {
      display: block;
      text-align: center;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
    }
  }
  &__toggler {
    cursor: pointer;
    flex-shrink: 0;
    margin-right: auto;
  }
  &__title {
    text-transform: uppercase;
    margin-left: 2rem;
  }
  // list
  &__list {
    margin-top: 1rem;
  }
  &__item {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    display: block;
    text-align: left;
    white-space: nowrap;
    padding: .75rem;
    line-height: 30px;
    border-radius: .5rem;
    margin-bottom: .5rem;
    transition: .3s;
    cursor: pointer;
  }
  &__icon {
    width: $icon-size;
    height: $icon-size;
    display: inline-block;
    font-size: 1.25rem;
    margin-right: 2rem;
    vertical-align: middle;
    visibility: visible;
  }
  &__text {
    display: inline-block;
    font-size: $normal-font-size;
  }
}

// style
.l-navbar-dark {
  background-color: $dark-bg;
  box-shadow: 0 16px 38px -12px rgba(0,0,0,.56),
  0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
  color: $white-text;
  .nav {
    &__logo {
      &::after {
        background-color: $dark-hr;
      }
    }
    &__title {
      color: $white-text;
    }
    &__item:hover, &__item.actived {
      background-color: $dark-hover;
      .nav__text, .nav__icon {
        color: $white-text;
      }
    }
    &__text {
      color: $white-text;
    }
  }
}

.l-navbar-light {
  background-color: $light-bg;
  box-shadow: 0 16px 38px -12px rgba(0,0,0,.56),
  0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
  color: $light-text;
  .nav {
    &__logo {
      &::after {
        background-color: $light-hr;
      }
    }
    &__title {
      color: $light-text;
    }
    &__item:hover {
      background-color: $light-hover;
      .nav__text, .nav__icon {
        color: $light-text;
      }
    }
    &__item.actived {
      background-color: $light-actived;
      .nav__text, .nav__icon {
        color: $white-text;
      }
    }
    &__text {
      color: $light-text;
    }
  }
}

</style>
