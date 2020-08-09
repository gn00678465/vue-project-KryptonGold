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
            <div class="title">檔案管理列表</div>
          </header>
          <main class="body">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <div v-scrollbar class="container-fluid" style="height: 650px">
                    <div class="row">
                      <div class="col-4" v-for="item in storageList" :key="item.id">
                        <ImgCard :path="item.path" :id="item.id"/>
                      </div>
                    </div>
                  </div>
                  <pagination :total_pages="total" :page.sync="page" />
                </div>
                <div class="col-4">
                  <loading :active.sync="isUplading"
                    :can-cancel="true"
                    :is-full-page="false">
                    <uploading slot="default"/>
                  </loading>
                  <file style="height: 100%" ref="file" @uploadSubmit="upload"/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StorageAPI from 'assets/Backend_mixins/Storage';
import file from 'components/InputUpload.vue';
import ImgCard from 'components/ImgCard.vue';

export default {
  mataInfo: {
    title: '-檔案管理',
  },
  name: 'Storage',
  components: {
    uploading: () => import('components/LoadingUpload.vue'),
    file,
    ImgCard,
  },
  mixins: [StorageAPI],
  data() {
    return {
      isLoading: false,
      isUplading: false,
      page: 1,
      total: 1,
      storageList: [],
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.getStorageList(this.page);
    },
    BtnClick(action, data) {
      this[`${action}Handler`](data);
    },
    newHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '新增檔案';
    },
    upload(formdata) {
      this.editStorage(formdata)
        .then(() => {
          this.$refs.file.src = '';
          this.getStorageList(this.page);
        });
    },
  },
  watch: {
    page() {
      this.getdata();
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
