<template>
  <div class="tr vld-parent">
    <loading :active.sync="isLoading" color="#218DFE"
      :can-cancel="true" loader="dots"
      :is-full-page="false"></loading>
    <span class="td">{{ prod.category }}</span>
    <span class="td">{{ prod.title }}</span>
    <span class="td">{{ prod.origin_price | Currency | Dollar }}</span>
    <span class="td">{{ prod.price | Currency | Dollar }}</span>
    <span class="td">
      <toggle :prodId="prod.id.substr(0, 5)" :disabled="true"
      :checked="prod.enabled"/>
    </span>
    <span class="td">
      <button type="button" class="pure-button pure-button-info mr-1 button-small"
      @click.prevent="editHandler">
        <font-awesome-icon icon="marker"></font-awesome-icon>
      </button>
      <button type="button" class="pure-button pure-button-danger button-small"
      @click.prevent="delHandler">
        <font-awesome-icon icon="trash-alt"></font-awesome-icon>
      </button>
    </span>
    <Dialog ref="dialog" @dialog="confirm">刪除此產品?</Dialog>
  </div>
</template>

<script>
import ProductsAPI from 'assets/Backend_mixins/Products';

export default {
  name: 'ProductItem',
  mixins: [ProductsAPI],
  components: {
  },
  props: {
    prod: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      showModal: false,
    };
  },
  methods: {
    editHandler() {
      this.$emit('edit', this.prod.id);
    },
    // 刪除商品
    delHandler() {
      this.$refs.dialog.isVisible = true;
    },
    confirm() {
      this.destroyProduct(this.prod.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tr {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.td {
  flex-grow: 1;
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  color: #555;
}

.button-small {
  font-size: 85%;
}
</style>
