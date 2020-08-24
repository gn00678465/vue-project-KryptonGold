<template>
  <div class="popup" :class="{'is-visible': isVisible}">
    <div class="popup-container">
      <p><slot>Are you sure you want to delete this element?</slot></p>
      <ul class="popup-buttons">
        <li><a href="#0" @click.prevent="clickHandler(true)">確定</a></li>
        <li><a href="#0" @click.prevent="clickHandler(false)">取消</a></li>
      </ul>
      <a href="#0" class="popup-close img-replace" @click.prevent="isVisible = false">Close</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    clickHandler(click) {
      if (click) {
        this.$emit('dialog');
      }
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-replace {
  /* replace text with an image */
  display: inline-block;
  overflow: hidden;
  text-indent: 100%;
  color: transparent;
  white-space: nowrap;
}

.popup {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(94, 110, 141, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s 0s, visibility 0s 0.3s;
  &.is-visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s 0s, visibility 0s 0s;
  }
  &-container {
  position: relative;
  margin: 6em auto;
  width: 90%;
  max-width: 400px;
  background: #FFF;
  border-radius: .25em .25em .4em .4em;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-40px);
  /* Force Hardware Acceleration in WebKit */
  transition-property: transform;
  transition-duration: 0.3s;
  }
  &-container p {
    padding: 2rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  &-buttons:after {
    content: "";
    display: table;
    clear: both;
  }
}

.popup-container .popup-buttons li {
  float: left;
  width: 50%;
  list-style: none;
}
.popup-container .popup-buttons a {
  display: block;
  height: 60px;
  line-height: 60px;
  text-transform: uppercase;
  color: #FFF;
  transition: background-color 0.2s;
}
.popup-container .popup-buttons li:first-child a {
  background: #fc7169;
  border-radius: 0 0 0 .25em;
}
.no-touch .popup-container .popup-buttons li:first-child a:hover {
  background-color: #fc8982;
}
.popup-container .popup-buttons li:last-child a {
  background: #b6bece;
  border-radius: 0 0 .25em 0;
}
.no-touch .popup-container .popup-buttons li:last-child a:hover {
  background-color: #c5ccd8;
}
.popup-container .popup-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
}
.popup-container .popup-close::before, .popup-container .popup-close::after {
  content: '';
  position: absolute;
  top: 12px;
  width: 14px;
  height: 3px;
  background-color: #8f9cb5;
}
.popup-container .popup-close::before {
  transform: rotate(45deg);
  left: 8px;
}
.popup-container .popup-close::after {
  transform: rotate(-45deg);
  right: 8px;
}
.is-visible .popup-container {
  transform: translateY(0);
}
@media only screen and (min-width: 1170px) {
  .popup-container {
    margin: 10em auto;
  }
}
</style>
