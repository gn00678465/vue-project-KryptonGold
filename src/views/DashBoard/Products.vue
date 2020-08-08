<template>
  <div class="container-fluid vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true" background-color="#555"
      :is-full-page="true">
        <load slot="default"/>
      </loading>
    <div class="row">
      <div class="col">
        <div class="dashboard">
          <header class="header">
            <div class="title">產品管理列表</div>
            <BtnGroup class="newBtn" :btns="btn" @btn-emit="BtnClick"/>
          </header>
          <main class="body">
              <div class="table">
                <div class="table-head">
                  <div class="tr">
                    <span class="th">分類</span>
                    <span class="th">產品名稱</span>
                    <span class="th">原價</span>
                    <span class="th">售價</span>
                    <span class="th">是否啟用</span>
                    <span class="th"><font-awesome-icon class="icon" :icon="['fas', 'user-cog']" />
                    </span>
                  </div>
                </div>
                <div v-scrollbar class="table-body">
                  <item v-for="prod in products" :key="prod.id" :prod="prod"
                  @btn-emit="BtnClick"/>
                </div>
              </div>
            <pagination :total_pages="total" :page.sync="page" />
          </main>
        </div>
      </div>
    </div>
    <Modal ref="modal" size="xl" @dataEmit="newProd"/>
  </div>
</template>

<script>
import item from 'components/_ProductItem.vue';
import load from 'components/Loading.vue';
import Modal from 'components/_ProductModal.vue';
import ProductsAPI from 'assets/Backend_mixins/Products';

export default {
  name: 'Products',
  components: { item, load, Modal },
  mixins: [ProductsAPI],
  created() {
    this.getProductList();
  },
  data() {
    return {
      isLoading: false,
      page: 1,
      total: 1,
      products: [],
      btn: [{
        class: 'primary',
        outline: false,
        content: '新增產品',
        icon: '',
        action: 'new',
        size: 'xl',
      }],
    };
  },
  methods: {
    BtnClick(action, data) {
      this[`${action}Handler`](data);
    },
    newHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '新增產品';
      this.$refs.modal.body = 'Product';
    },
    newProd(data) {
      this.createProduct(data);
    },
  },
  watch: {
    page() {
      this.getProductList(this.page);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/Dashboard.scss';

$basis: (15% 40% 12% 12% 15% 15%);

.table {
  @for $i from 1 through length($basis) {
    &-head, &-body {
      ::v-deep span:nth-of-type(#{$i}) {
      flex-basis: nth($basis, $i);
      }
    }
  }
}
</style>
