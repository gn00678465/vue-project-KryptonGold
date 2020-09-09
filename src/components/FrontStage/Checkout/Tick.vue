<template>
  <div class="finishTick">
    <svg width="400" height="400" viewbox="0 0 400 400" :class="{run: run}">
      <circle class="circle" cx="200" cy="200" fill="none" stroke-width="20"
        stroke="#68E534" r="190" stroke-linecap='round' transform="rotate(-90 200 200)" />
      <polyline class="tick" fill="none" stroke-width="24" stroke="#68E534"
        points="88,214 173,284 304,138" stroke-linecap='round' stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Tick',
  data() {
    return {
      run: false,
    };
  },
};
</script>

<style lang="scss" scoped>

$svg-width: 400;

.finishTick {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.circle {
  stroke-dasharray: 1194; // 190 * 2 * pi
  stroke-dashoffset: 1194;
}
.tick {
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
}

svg.run {
  .circle {
    animation: circle 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .tick {
    animation: tick 0.8s ease-out;
    animation-fill-mode: forwards;
    animation-delay: 0.95s;
  }
}

@keyframes circle {
  from {
    stroke-dashoffset: 1194;
  }
  to {
    stroke-dashoffset: 1194 * 2;
  }
}

@keyframes tick {
  from {
    stroke-dashoffset: 350;
    opacity: 0.5;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
