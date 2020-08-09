export default {
  methods: {
    // 取得所有訂單列表
    // use in Orders.vue
    getOrderList(page) {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}&paged=10`)
        .then((res) => {
          this.OrderList = res.data.data;
          this.total = res.data.meta.pagination.total_pages;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
          this.isLoading = false;
        });
    },
    // 設定指定訂單為已付款。
    // use in _OrderItem.vue
    SetOrderPaid(id) {
      this.isLoading = true;
      return this.$http.patch(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}/paid`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
          this.isLoading = false;
        });
    },
    // 設定指定訂單為尚未付款。
    // use in _OrderItem.vue
    SetOrderUnpaid(id) {
      this.isLoading = true;
      return this.$http.patch(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}/unpaid`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
          this.isLoading = false;
        });
    },
  },
};
