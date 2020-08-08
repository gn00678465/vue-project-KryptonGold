<template>
  <div class="tr vld-parent">
    <loading :active.sync="isLoading" color="#218DFE"
      :can-cancel="true" loader="dots"
      :is-full-page="false"></loading>
    <span class="td">{{prod.category}}</span>
    <span class="td">{{prod.title}}</span>
    <span class="td">{{prod.origin_price | Currency | Dollar}}</span>
    <span class="td">{{prod.price | Currency | Dollar}}</span>
    <span class="td">
      <toggle :prodId="prod.id.substr(0, 5)" :disabled="true"
      :checked="prod.enabled"/>
    </span>
    <span class="td">
      <BtnGroup :btns="btns" @btn-emit="btnClick" :border="true" btnSize="md"/>
    </span>
    <Dialog ref="dialog" @dialog-emit="confirm">刪除此產品?</Dialog>
    <Modal ref="modal" size="xl" @dataEmit="updateProd"/>
  </div>
</template>

<script>
import ProductsAPI from 'assets/Backend_mixins/Products';
import Modal from 'components/_ProductModal.vue';

export default {
  name: 'ProductItem',
  mixins: [ProductsAPI],
  components: { Modal },
  props: {
    prod: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      btns: [
        {
          class: 'info',
          outline: true,
          content: '',
          icon: 'marker',
          action: 'edit',
        },
        {
          class: 'error',
          outline: true,
          content: '',
          icon: 'trash-alt',
          action: 'del',
        },
      ],
    };
  },
  methods: {
    btnClick(action) {
      this[`${action}Handler`]();
    },
    editHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '編輯產品';
      this.$refs.modal.body = 'Product';
      this.$refs.modal.inputTemp = this.prod;
    },
    updateProd(data) {
      this.editProduct(data);
    },
    // 刪除商品
    delHandler() {
      this.$refs.dialog.isVisible = true;
    },
    confirm(check) {
      if (check) {
        this.destroyProduct(this.prod.id);
      }
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
</style>
