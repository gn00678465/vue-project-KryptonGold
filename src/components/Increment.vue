<template>
  <div class="increment" :class="[classis, rwdClassis]">
    <button type="button" :disabled="isAnimating || isZero"
      @click.prevent='subtract'><slot name="minus">-</slot></button>
    <span v-if="!isTypeing" :class="{before: isBefore, after: isAfter}"
      :data-before="countBefore" :data-after="countAfter" @click.prevent="onChange">
      {{countCurrent}}
    </span>
    <input v-else type="number" :value="count"
      @keypress="keypress" @keyup.enter="enterHandler" @keyup.esc="escHandler">
    <button type="button" :disabled="isAnimating"
      @click.prevent='add'><slot name="plus">+</slot></button>
  </div>
</template>

<script>
export default {
  name: 'Increment',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: 'sm',
    },
    styled: {
      type: String,
      default: 'light',
    },
    rwd: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      count: this.value,
      isBefore: false,
      isAfter: false,
      isTypeing: false,
      classis: [`increment-${this.size}`, `increment-${this.styled}`],
      rwdClassis: {
        'increment-rwd-xs': this.rwd,
      },
    };
  },
  methods: {
    subtract() {
      this.isBefore = true;
      setTimeout(() => {
        this.count -= 1;
        this.isBefore = false;
      }, 200);
    },
    add() {
      this.isAfter = true;
      setTimeout(() => {
        this.count += 1;
        this.isAfter = false;
      }, 200);
    },
    onChange() {
      this.isTypeing = true;
    },
    keypress(e) {
      if (e.key === '+' || e.key === 'e' || e.key === '-') e.preventDefault();
    },
    enterHandler(e) {
      this.count = e.target.value.trim() * 1;
      this.isTypeing = false;
    },
    escHandler() {
      this.isTypeing = false;
    },
    emitHandler() {
      this.$emit('update:count', this.count);
    },
  },
  computed: {
    isAnimating() {
      return this.isBefore || this.isAfter;
    },
    isZero() {
      return this.countBefore === 0;
    },
    countBefore() {
      return this.count - 1 < 10 ? `0${this.count - 1}` : this.count - 1;
    },
    countAfter() {
      return this.count + 1 < 10 ? `0${this.count + 1}` : this.count + 1;
    },
    countCurrent() {
      return this.count < 10 ? `0${this.count}` : this.count;
    },
  },
  watch: {
    count: {
      immediate: false,
      handler() {
        this.emitHandler();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$size: (
  'sm': 24px,
  'md': 32px,
  'lg': 56px
);

.increment {
  display: flex;
  overflow: hidden;
  position: relative;
  box-sizing: content-box;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
  }
  span {
    display: block;
    text-align: center;
    cursor: pointer;
    &::before {
      display: block;
      content: attr(data-before);
    }
    &::after {
      display: block;
      content: attr(data-after);
    }
  }
  input {
    width: 100%;
    position: relative;
    z-index: 10;
    text-align: center;
    border: none;
    outline: none;
  }
  button {
    display: block;
    border: 0;
    background: none;
    margin: 0;
    padding: 0;
    outline: none;
    user-select: none;
    position: relative;
    z-index: 50;
    &:not(:disabled) {
      cursor: pointer;
    }
  }
  &-dark {
    background: #000000;
    &::before {
      background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    }
    &::after {
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.9) 100%);
    }
    span {
      color: #fff;
    }
    button {
      color: #fff;
    }
  }
  &-light {
    background: #eee;
    // box-shadow: -8px -8px 10px -8px rgba(255,255,255,1), 8px 8px 10px -8px rgba(0,0,0,.3);
    &::before {
      background: linear-gradient(180deg, rgba(238, 238, 238, .9) 0%, rgba(0,0,0,0) 100%);
    }
    &::after {
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(238,238,238,.9) 100%);
    }
    span {
      color: #666;
      &::before {
        color: #999;
      }
      &::after {
        color: #999;
      }
    }
    button {
      border-radius: 50%;
      color: #999;
      background: linear-gradient(135deg, rgba(230, 230, 230, 1) 0%, rgba(246, 246, 246, 1) 100%);
      box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0,0,0,.3);
      &:not(:disabled):active {
      box-shadow: inset -4px -4px 10px -8px rgba(255,255,255,1),
      inset 4px 4px 10px -8px rgba(0,0,0,.3);
      }
    }
  }
  &-simple {
    border-radius: 2px !important;
    box-shadow: 0 0 6px -4px rgba(0,0,0,0.7);
    &::before {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
    }
    &::after {
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,.9) 100%);
    }
    span {
      color: #ec467c;
      &::before {
        color: #F4F4F5;
      }
      &::after {
        color: #F4F4F5;
      }
    }
    button {
      &:first-child {
        border-right: 3px solid #eee;
      }
      &:last-child {
        border-left: 3px solid #eee;
      }
    }
  }
}

@each $key, $val in $size {
  .increment-#{$key} {
    width: 5 * $val;
    height: 1 * $val;
    border-radius: .2 * $val;
    padding: 0.3 * $val 0;
    &::before {
      height: 0.3 * $val;
    }
    &::after {
      height: 0.3 * $val;
    }
    span {
      flex: 1 1 5 * $val;
      line-height: 1 * $val;
      font-size: 1 * $val;
      transform: translateY(-1 * $val);
      &.before {
        transform: translateY(0 * $val);
        transition: transform .2s ease-in;
      }
      &.after {
        transform: translateY(-2 * $val);
        transition: transform .2s ease-in;
      }
    }
    input {
      flex: 1 1 5 * $val;
      font-size: 0.7 * $val;
      margin: 0 0.25 * $val;
      border-radius: 0.2 * $val;
    }
    button {
      height: 1 * $val;
      width: 1 * $val;
      flex: 0 0 1 * $val;
      line-height: 1 * $val;
      font-size: 0.6 * $val;
      &:first-child {
        margin-left: 0.2 * $val;
      }
      &:last-child {
        margin-right: 0.2 * $val;
      }
    }
  }
}

@media (max-width: 374px) {
  .increment-rwd-xs {
    padding: 0;
    &::before {
      content: unset;
    }
    &::after {
      content: initial;
    }
  }
}
</style>
