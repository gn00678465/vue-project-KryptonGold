<template>
  <div class="load">
    <div class="spinner">
      <div class="bubble-1"></div>
      <div class="bubble-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading2',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.spinner {
    position: relative;
    width: 45px;
    height: 45px;
    margin: 0 auto;
}

.bubble-1,
.bubble-2 {
    position: absolute;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: v(theme-primary);
}

.bubble-2 {
    top: auto;
    bottom: 0;
}

.load .spinner {animation: loadingI 2s linear infinite;}
.load .bubble-1, .load .bubble-2 {animation: bounce 2s ease-in-out infinite;}
.load .bubble-2 {animation-delay: -1.0s;}

@keyframes loadingI {
    100% {transform: rotate(360deg);}
}

@keyframes bounce  {
  0%, 100% {transform: scale(0.0);}
  50% {transform: scale(1.0);}
}
</style>
