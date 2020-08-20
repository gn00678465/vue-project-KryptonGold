<template>
  <div class="increment">
    <button type="button" class="minus" :disabled="quantity === 1"
    @click.prevent="count(-1)"> - </button>
    <input type="text" name="" class="quantity" v-model.number.lazy="quantity">
    <button type="button" class="plus"
    @click.prevent="count(1)"> + </button>
  </div>
</template>

<script>
export default {
  name: 'Increment',
  components: {},
  props: {
    data: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      quantity: this.data,
    };
  },
  mounted() {
    this.$emit('update:quantity', this.quantity * 1);
  },
  methods: {
    count(fix) {
      this.quantity += fix;
      if (this.quantity === 0) this.quantity = 1;
    },
  },
  watch: {
    quantity() {
      this.$emit('update:quantity', this.quantity * 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.increment {
  .plus, .minus {
    height: 30px;
    padding: 0;
    width: 30px;
    border-style: solid;
    border-color: #aaa;
    border-width: 1px;
    background: transparent;
    color: #333;
    outline: none;
    cursor: pointer;
    &:not(:disabled):hover {
      background: v(theme-order-success-hover);
      color: #fff;
    }
    &:disabled {
      cursor: auto;
    }
  }
  .plus {
    border-radius: 0 5px 5px 0;
  }
  .minus {
    border-radius: 5px 0 0 5px;
  }
  input {
    text-align: center;
    height: 30px;
    border-width: 1px 0;
    width: 30px;
    border-style: solid;
    border-color: #ccc;
    padding: 6px 3px;
    background-color: #fff;
    border-radius: 0;
  }
}

@media (min-width: 768px) {
  .increment {
    .plus, .minus, input {
      height: 40px;
      width: 40px;
    }
  }
}

@media (min-width: 992px) {
  .increment {
    .plus, .minus, input {
      height: 50px;
      width: 50px;
      font-size: 1.2rem;
    }
  }
}
</style>
