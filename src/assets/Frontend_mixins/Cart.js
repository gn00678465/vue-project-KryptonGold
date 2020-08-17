export default {
  methods: {
    GetCartList(page = 1) {
      this.isLoading = true;
      return this.$http.get(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping?page=${page}&paged=10`)
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
    CreateCart(product, quantity = 1) {
      this.addCarting = true;
      this.$http.post(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`, { product, quantity })
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
    DestroyCart(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.response.data.message);
        });
    },
  },
};
