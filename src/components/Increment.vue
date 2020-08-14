<template>
  <div class="increment">
    <button type="button" class="minus" :disabled="quantity === 1"
    @click.prevent="count(-1)"> - </button>
    <input type="text" name="" class="quantity" v-model.number="quantity">
    <button type="button" class="plus"
    @click.prevent="count(1)"> + </button>
  </div>
</template>

<script>
export default {
  name: 'Increment',
  components: {},
  props: {
  },
  data() {
    return {
      quantity: 1,
    };
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
    height: 40px;
    padding: 0;
    width: 40px;
    border-style: solid;
    border-color: #aaa;
    border-width: 1px;
    background: transparent;
    color: #333;
    outline: none;
    cursor: pointer;
    &:not(:disabled):hover {
      background: rgba(0,0,0,0.05);
      color: #333;
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
    height: 40px;
    border-width: 1px 0;
    width: 40px;
    border-style: solid;
    border-color: #ccc;
    padding: 6px 3px;
    background-color: #fff;
    border-radius: 0;
  }
}

@media (min-width: 992px) {
  .increment {
    .plus, .minus, input {
      height: 50px;
      width: 50px;
    }
  }
}
</style>
