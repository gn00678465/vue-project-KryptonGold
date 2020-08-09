import notify from '../_Notify';

export default {
  mixins: [notify],
  methods: {
    // 取得所有優惠券列表
    // use in Coupons.vue
    getCouponsList(page) {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}&paged=10`)
        .then((res) => {
          if (res.status === 200) {
            this.coupons = res.data.data;
            this.total = res.data.meta.pagination.total_pages;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
    // 新增優惠券
    // use in Coupons.vue
    createCoupon(data) {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon`, data)
        .then((res) => {
          if (res.status === 200) {
            this.successNotify('優惠券新增成功');
            this.getCouponsList();
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
    // 編輯優惠券
    // use in _CouponItem.vue
    updateCoupon(data) {
      this.isLoading = true;
      this.$http.patch(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${data.id}`, data)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.successNotify('編輯優惠券成功');
            this.$parent.getCouponsList();
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
    // 刪除優惠券
    // use in Coupons.vue
    destroyCoupon(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.successNotify('優惠卷刪除成功');
            this.$parent.getCouponsList();
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.errorNotify(err.response.data.message);
        });
    },
  },
};
