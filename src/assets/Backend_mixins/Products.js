import notify from '../_Notify';

export default {
  mixins: [notify],
  methods: {
    // 取得所有商品列表
    // use in Products.vue
    getProductList(page) {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}&paged=10`)
        .then((res) => {
          if (res.status === 200) {
            this.products = res.data.data;
            this.total = res.data.meta.pagination.total_pages;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
    // 新增商品資訊
    // use in Products.vue
    createProduct(data) {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product`, data)
        .then((res) => {
          if (res.status === 200) {
            this.getProductList();
            this.successNotify('商品新增成功');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
    // 更新商品資訊
    // use in Products.vue
    editProduct(data) {
      this.isLoading = true;
      this.$http.patch(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${data.id}`, data)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$parent.getProductList();
            this.successNotify(`${data.title} 編輯成功`);
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
    // 刪除商品
    // use in Products.vue
    destroyProduct(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$parent.getProductList();
            this.successNotify('商品刪除成功');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
  },
};
