export default {
  methods: {
    GetCartList(page = 1, paged = 10) {
      this.isLoading = true;
      return this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping?page=${page}&paged=${paged}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$mutation.setCartsArray(res.data.data);
          }
          return res.data;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    CreateCart(product, quantity = 1) {
      this.addCarting = true;
      this.$http.post(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping`, { product, quantity })
        .then((res) => {
          if (res.status === 200) {
            this.addCarting = false;
            this.$bus.$emit('get-cart');
          }
        })
        .catch((err) => {
          this.addCarting = false;
          this.$toast.error(err.response.data.errors[0]);
        });
    },
    EditCart(product, quantity) {
      this.isLoading = true;
      this.$http.patch(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping`, { product, quantity })
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$bus.$emit('get-cart');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    DestroyCart(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$bus.$emit('get-cart');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    DestroyAllCart() {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.$bus.$emit('get-cart');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    GetOrderList() {
      return this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/orders`)
        .then((res) => {
          if (res.status === 200) {
            this.$mutation.getOrderID(res.data.data[0].id);
          }
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
    CreateOrder(detial) {
      return this.$http.post(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/orders`, detial)
        .then((res) => {
          if (res.status === 200) {
            this.$mutation.setOrderID(res.data.data.id);
            this.$bus.$emit('get-cart');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    ShowOrder(id) {
      this.isLoading = true;
      return this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/orders/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
          }
          return res.data;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    SetOrderPaid(id) {
      this.isSpin = true;
      return this.$http.post(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/orders/${id}/paying`)
        .then((res) => {
          if (res.status === 200) {
            this.isSpin = false;
          }
          return res;
        })
        .catch((err) => {
          this.isSpin = false;
          this.$toast.error(err.response.data.message);
        });
    },
    SearchCoupon(code) {
      return this.$http.post(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/coupon/search`, { code })
        .then((res) => res.data)
        .catch((err) => {
          this.$toast.error(err.response.data.message);
          this.isSearch = false;
        });
    },
  },
};
