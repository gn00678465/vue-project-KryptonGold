export default {
  methods: {
    GetProductList() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/products?paged=100`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.products = res.data.data;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
    GetProductDetial(id) {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
            this.product = res.data.data;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
  },
};
