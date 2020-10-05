export default {
  methods: {
    // token 寫入 cookie
    redirection(data) {
      const { token, expired } = data;
      const sExpired = new Date(expired * 1000);
      document.cookie = `HEXtoken=${token};path=/;expires=${sExpired}`;
    },
    // 取出 cookie 內的 token
    getToken() {
      return document.cookie.replace(/(?:(?:^|.*;\s*)HEXtoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    },
    // 登入系統
    // use in login.vue
    login(form) {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_PATH}auth/login`, form)
        .then((res) => {
          if (res.status === 200) {
            this.redirection(res.data);
            this.$router.replace('/admin');
            this.$toast.success(res.data.message);
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
          this.isLoading = false;
        });
    },
    // 確認 Token 狀態
    // use in Dashboard.vue
    tokenCheck() {
      this.$http.post(`${process.env.VUE_APP_PATH}auth/check`, { api_token: this.token })
        .then((res) => {
          if (res.status === 200) this.$http.defaults.headers.common.Authorization = `Bearer ${this.getToken()}`;
        })
        .catch((err) => {
          this.$router.replace('/login');
          this.$toast.error(err.response.data.message);
        });
    },
    // 登出系統
    // use in Dashboard.vue
    logout() {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_PATH}auth/logout`, { api_token: this.token })
        .then((res) => {
          if (res.status === 200) {
            this.token = '';
            this.redirection(res.data);
            this.$router.replace('/login');
            this.$toast.success(res.data.message);
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
