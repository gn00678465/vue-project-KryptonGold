export default {
  methods: {
    // 取得所有商品列表
    // use in Products.vue
    getProductList(page) {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}&paged=10`)
        .then((res) => {
          if (res.status === 200) {
            this.products = res.data.data;
            this.total = res.data.meta.pagination.total_pages;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    // 取得單一商品細節
    showProduct(id) {
      this.isLoading = true;
      return this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
          }
          return res.data.data;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    // 新增商品資訊
    // use in Products.vue
    createProduct(data) {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/admin/ec/product`, data)
        .then((res) => {
          if (res.status === 200) {
            this.getProductList();
            this.$toast.success('商品新增成功');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    // 更新商品資訊
    // use in Products.vue
    editProduct(data) {
      this.isLoading = true;
      this.$http.patch(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/admin/ec/product/${data.id}`, data)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$parent.getProductList(this.page);
            this.$toast.success(`${data.title} 編輯成功`);
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    // 刪除商品
    // use in Products.vue
    destroyProduct(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$parent.getProductList();
            this.$toast.success('商品刪除成功');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
  },
};
