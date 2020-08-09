export default {
  methods: {
    // 取得所有檔案列表
    // use in Storage.vue
    getStorageList(page) {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/storage?page=${page}&paged=9`)
        .then((res) => {
          this.storageList = res.data.data;
          this.total = res.data.meta.pagination.total_pages;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
          this.isLoading = false;
        });
    },
    // 更新指定檔案
    // use in _StorageModal.vue
    editStorage(file) {
      this.isUplading = true;
      return this.$http.post(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/storage`, file, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => {
          if (res.status === 200) {
            this.$toast.success('檔案更新成功');
            this.isUplading = false;
          }
          const { path } = res.data.data;
          return path;
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
    // 刪除指定檔案
    destroyStorage(id) {
      this.isLoading = true;
      return this.$http.delete(`${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/storage/${id}`)
        .then((res) => {
          if (res.status === 200) {
            this.$toast.success('檔案刪除成功');
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
  },
};
