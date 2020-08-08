<template>
  <div :class="{'btn-group': isGroup, 'no-border': border}">
    <button type="button" class="btn" v-for="(btn, i) in btns" :key="i"
      :class="`btn${btn.outline ? '-outline' : ''}-${btn.class}`"
      @click.prevent="$emit('btn-emit', btn.action)"
    ><font-awesome-icon :icon="['fas', btn.icon]"
    v-if="btn.content === '' && btn.icon !== ''" />
    <span v-else>{{btn.content}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  props: {
    splite: {
      type: Boolean,
      default: false,
    },
    btns: {
      type: Array,
    },
    btnSize: {
      type: String,
      default: 'md',
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    btnLength() {
      return this.btns.length;
    },
    isGroup() {
      return this.btnLength > 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../assets/_sass/component/_btn.scss';

$colors: (
  default: #434a54,
  primary: #0073DE,
  secondary: #804EFD,
  info: #019EC8,
  success: #8cc152,
  error: #DD0002,
  warning: #f6bb42,
);

.btn {
  @include btn;
  border-width: 1px;
  font-size: 1.1rem;
}

.btn-group>.btn-group:not(:last-child)>.btn,
.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn-group:not(:first-child)>.btn,
.btn-group>.btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

@each $key, $val in $colors {
  .btn-#{$key} {
    border-color: darken($val, 5%);
    background: $val;
    color: #fff;
    &:hover {
      background: darken($val, 5%);
    }
  }
}

@each $key, $val in $colors {
  .btn-outline-#{$key} {
    border-color: $val;
    background: transparent;
    color: $val;
    &:hover {
      background: $val;
      color: #fff;
    }
  }
}

.no-border {
  button {
    border-color: transparent;
  }
}

</style>
