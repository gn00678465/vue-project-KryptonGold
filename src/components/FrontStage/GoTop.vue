<template>
  <transition name="fade">
    <div v-if="showButton" class="arrow-top bounce" @click.prevent="test">
      <font-awesome-icon icon="chevron-up"/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GoTop',
  components: {},
  data() {
    return {};
  },
  methods: {
    test() {
      this.$root.$el.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  computed: {
    showButton() {
      return this.$store.ScrollTop > 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-top {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 500;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(230, 230, 230, 1) 0%, rgba(246, 246, 246, 1) 100%);
  box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0,0,0,.5);
  &::before {
    background: linear-gradient(180deg, rgba(238, 238, 238, .9) 0%, rgba(0,0,0,0) 100%);
  }
  &::after {
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(238,238,238,.9) 100%);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.bounce {
  animation: bounce infinite 1.5s;
  transform-origin: center bottom;
}

@keyframes bounce {
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -20px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -10px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
</style>
