<template>
  <div class="container-fluid vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true" background-color="#555"
      :is-full-page="true">
        <LoadEffect slot="default"/>
      </loading>
    <div class="row">
      <div class="col">
        <div class="dashboard">
          <header class="header">
            <div class="title">產品管理列表</div>
            <button type="button" class="ml-4 pure-button pure-button-info"
              @click.prevent="newHandler">新增產品</button>
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
                <div class="table-body">
                  <item v-for="prod in products" :key="prod.id" :prod="prod"
                  @edit="editHandler"/>
                </div>
              </div>
            <pagination :total_pages="total" :page.sync="page" />
          </main>
        </div>
      </div>
    </div>
    <NewModal :show.sync="showModal" mod="XL" :title="modalTitle" @check="clickHandler">
      <ProductsOption ref="modalData"/>
    </NewModal>
  </div>
</template>

<script>
import item from 'components/BackendStage/_ProductItem.vue';
import ProductsAPI from 'assets/Backend_mixins/Products';

export default {
  name: 'Products',
  components: {
    item,
    NewModal: () => import('components/BackendStage/Modal.vue'),
    ProductsOption: () => import('components/BackendStage/ProductsModalItem.vue'),
  },
  mixins: [ProductsAPI],
  created() {
    this.getProductList(this.page);
  },
  data() {
    return {
      isLoading: false,
      page: 1,
      total: 1,
      products: [],
      showModal: false,
      modalTitle: '新增產品',
    };
  },
  methods: {
    newHandler() {
      this.modalTitle = '新增產品';
      this.showModal = true;
    },
    newProd() {
      const data = { ...this.$refs.modalData.inputTemp };
      this.createProduct(data);
    },
    editHandler(id) {
      const vm = this;
      this.modalTitle = '編輯產品';
      this.showProduct(id)
        .then((data) => {
          vm.showModal = true;
          vm.$refs.modalData.inputTemp = { ...data };
        });
    },
    updateProd() {
      const data = this.$refs.modalData.inputTemp;
      this.editProduct(data);
    },
    clickHandler() {
      if (this.modalTitle === '新增產品') {
        this.newProd();
      }
      if (this.modalTitle === '編輯產品') {
        this.updateProd();
      }
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
