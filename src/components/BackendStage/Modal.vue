<template>
  <div class="Modal-rootOverlay" v-show='show' @click.self='close'>
    <div class="Modal-Card" :class='[mod, position]'>
      <div v-if='title' class="title">{{ title }}</div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="actions">
        <slot name="actions">
          <button class="pure-button pure-button-success mr-1" @click='check'>確定</button>
          <button class="pure-button pure-button-danger" @click='close'>關閉</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    mod: String,
    title: String,
    position: {
      type: String,
      default: 'Y_center',
    },
  },
  watch: {
    show(isShow) {
      document.body.style.cssText = (isShow) ? 'height:100vh;overflow:hidden;' : '';
    },
  },
  methods: {
    check() {
      this.$emit('check');
      this.close();
    },
    close() {
      this.$emit('update:show', false);
      document.body.style = '';
    },
  },
};
</script>

<style lang="scss" scoped>
$bg: #f1f1f1;

.Modal-rootOverlay {
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  cursor: pointer;
  background: rgba(68,68,68,0.7);
  overflow: hidden;
  overflow-y: overlay;
}
.Modal-Card {
  cursor: auto;
  background: #fff;
  .title {
    font-size: 1.4rem;
    line-height: 1.3;
    padding: 0.75rem 1.5rem;
    background: v(info);
    color: #fff;
  }
  .body {
    border-top: 1px solid $bg;
    border-bottom: 1px solid $bg;
    padding: 1rem 1.5rem;
    p {
      margin-bottom: 0;
    }
  }
  .actions {
    text-align: right;
    padding: 0.75rem 1.5rem 1.2rem;
  }
}
.Modal-Card.XL {
  max-width: 1080px;
  margin: auto;
}
.Modal-Card.SM {
  max-width: 460px;
}
.Modal-Card.toCenter {
  margin: auto;
}
.Y_center {
  margin: 10% auto auto;
  border-radius: 0.2em;
  width: 90%;
  max-width: 780px;
  transform: scale(0.5);
  opacity: 0;
  animation: Y_center 0.2s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
.lModal {
  padding: 1em;
  max-width: 400px;
  align-self: start;
  min-height: 100%;
  animation: translateX 0.2s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  margin-right: auto;
  transform: translateX(-100%);
}
.rModal {
  padding: 1em;
  max-width: 400px;
  align-self: start;
  min-height: 100%;
  animation: translateX 0.2s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  margin-left: auto;
  transform: translateX(100%);
}

@keyframes Y_center {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes translateX {
  to {
    transform: translateX(0);
  }
}
</style>
