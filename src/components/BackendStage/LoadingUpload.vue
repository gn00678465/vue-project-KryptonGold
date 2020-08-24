<template>
  <div class="cloud">
  <div class="anim-block">
    <div class="arrow-container  cloud-play"><i class="icono-arrow1-up"></i></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoadingUpload',
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.cloud {
  position: relative;
  display: block;
  width: 3em;
  height: 3em;
  margin: 2em auto;
  color: #ddd;
  background: #fff;
  border-width: 0.25em;
  border-style: solid;
  border-radius: 50% 50% 0 0;
  font-size: 300%;
  opacity: 0.8;
}

.cloud:before,
.cloud:after {
  content: "";
  position: absolute;
  bottom: -0.25em;
  background: inherit;
  border-width: 0.25em;
  border-style: solid;
}

.cloud:before {
  left: 80%;
  width: 60%;
  height: 60%;
  border-left: none;
  border-radius: 50% 50% 50% 0;
}

.cloud:after {
  right: 80%;
  width: 80%;
  height: 80%;
  border-right: none;
  border-radius: 50% 50% 0;
}

.anim-block {
  overflow: hidden;
  position: relative;
  display: block;
  width: 75%;
  height: 80%;
  margin: 0.5em auto;
  padding: 0 0 0 16px;
}

.anim-block:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  z-index: 10;
}

.anim-block:after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12px;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  z-index: 10;
}

.arrow-container {
  position: absolute;
  top: 0;
  left: 20px;
  width: 40px;
  height: 40px;
}

[class*="icono"] {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #666;
  box-sizing: border-box;
}

[class*="icono"]:after,
[class*="icono"]:before {
  content: "";
  box-sizing: border-box;
}

[class*="icono-arrow1"] {
  width: 26px;
  height: 26px;
  border-width: 6px 6px 0 0;
  border-style: solid;
  margin: -16px 0 0 7px;
}

[class*="icono-arrow1"]:before {
  right: 0;
  top: -6px;
  position: absolute;
  height: 8px;
  box-shadow: inset 0 0 0 32px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 28px;
  -webkit-transform-origin: right top;
  transform-origin: right top;
}

[class*="icono-arrow1"][class*="-left"] {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

[class*="icono-arrow1"][class*="-left"][class*="-up"] {
  -webkit-transform: none;
  transform: none;
}

[class*="icono-arrow1"][class*="-left"][class*="-down"] {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

[class*="icono-arrow1"][class*="-right"] {
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

[class*="icono-arrow1"][class*="-right"][class*="-up"] {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

[class*="icono-arrow1"][class*="-right"][class*="-down"] {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

[class*="icono-arrow1"][class*="-up"] {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

[class*="icono-arrow1"][class*="-down"] {
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.cloud-play {
  animation: cloudAnim 1s linear infinite forwards;
}

@keyframes cloudAnim {
  0% {
    transform: translateY(250%) scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: translateY(-100%) scale(1, 1);
  }
}
</style>
