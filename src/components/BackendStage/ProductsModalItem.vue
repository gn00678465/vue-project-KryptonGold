<template>
  <validation-observer class="container-fluid" tag="form">
  <!-- nav -->
    <ul class="nav">
      <li class="nav-item" data-page="main">
        <a class="nav-link" href="#" :class="{active: showPage === 'main'}"
          @click="changeHandler($event)">必填項目</a>
      </li>
      <li class="nav-item" data-page="option">
        <a class="nav-link" href="#" :class="{active: showPage === 'option'}"
          @click="changeHandler($event)">選填項目</a>
      </li>
      <li class="nav-item" data-page="index">
        <a class="nav-link" href="#" :class="{active: showPage === 'index'}"
          @click="changeHandler($event)">首頁項目</a>
      </li>
    </ul>
  <!-- nav END -->
  <hr>
  <!-- Main -->
    <div v-if="showPage === 'main'" class="row">
      <div class="col-4">
        <validation-provider
          v-for="(img) in imgUrlLength" :key="img"
          tag="div"
          :rules="{required : img === 1}"
          class="form-group"
          v-slot="{ errors, classes }"
          >
          <label :for="`imgUrl[${img}]`">圖片網址：</label>
          <input class="form-control" :name="`圖片網址-${img}`" :id="`imgUrl[${img}]`"
          type="text" :class="classes"  v-model="inputTemp.imageUrl[img - 1]"/>
          <!-- 錯誤訊息 -->
          <span class="error">{{ errors[0] }}</span>
        </validation-provider>
        <div class="vld-parent">
          <loading :active.sync="isUplading"
            :can-cancel="true"
            :is-full-page="false">
            <uploading slot="default"/>
          </loading>
          <InputUpload ref="file" @uploadSubmit="upload"/>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-10"
          v-slot="{ errors, classes }"
          >
            <label for="title">標題：</label>
            <input class="form-control" name="標題" id="title"
            type="text" :class="classes"  v-model="inputTemp.title"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <div class="col-2">
            <span class="label toggle">是否啟用</span>
            <toggle prodId="isEnable" :checked="inputTemp.enabled"
            v-model="inputTemp.enabled"/>
          </div>
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-6"
          v-slot="{ errors, classes }"
          >
            <label for="category">分類：</label>
            <input class="form-control" name="分類" id="category"
            type="text" :class="classes"  v-model="inputTemp.category"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-6"
          v-slot="{ errors, classes }"
          >
            <label for="unit">單位：</label>
            <input class="form-control" name="單位" id="unit"
            type="text" :class="classes"  v-model="inputTemp.unit"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-6"
          v-slot="{ errors, classes }"
          >
            <label for="origin_price">原價：</label>
            <input class="form-control" name="原價" id="origin_price"
            type="number" :class="classes"  v-model="inputTemp.origin_price"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-6"
          v-slot="{ errors, classes }"
          >
            <label for="price">售價：</label>
            <input class="form-control" name="售價" id="price"
            type="number" :class="classes"  v-model="inputTemp.price"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-12"
          v-slot="{ errors, classes }"
          >
            <label for="content">商品敘述：</label>
            <textarea class="form-control" name="商品敘述" id="content" rows="3"
            type="text" :class="classes"  v-model="inputTemp.content"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
          tag="div"
          rules="required"
          class="form-group col-12"
          v-slot="{ errors, classes }"
          >
            <label for="description">商品說明：</label>
            <textarea class="form-control" name="商品說明" id="description"
            type="text" :class="classes"  v-model="inputTemp.description"/>
            <!-- 錯誤訊息 -->
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
      </div>
    </div>
  <!-- Main END -->
  <!-- option -->
    <div v-if="showPage === 'option'" class="row">
      <div class="form-group col-6">
        <label for="type">種類：</label>
        <input class="form-control" name="種類" id="type"
        type="text" v-model="inputTemp.options.type"/>
      </div>
      <div class="form-group col-6">
        <label for="brand">品牌：</label>
        <input class="form-control" name="品牌" id="brand"
        type="text" v-model="inputTemp.options.brand"/>
      </div>
      <div class="form-group col-4">
        <label for="country">國家：</label>
        <input class="form-control" name="國家" id="country"
        type="text" v-model="inputTemp.options.country"/>
      </div>
      <div class="form-group col-4">
        <label for="ml">容量：</label>
        <input class="form-control" name="容量" id="ml"
        type="number" v-model="inputTemp.options.ml"/>
      </div>
      <div class="form-group col-4">
        <label for="percent">濃度：</label>
        <input class="form-control" name="濃度" id="percent"
        type="number" v-model="inputTemp.options.percent"/>
      </div>
      <hr>
    </div>
  <!-- option END -->
  <!-- index -->
    <div v-if="showPage === 'index'" class="row">
      <div class="col-4">
        <div class="form-group" >
          <label for="ad_imgUrl">圖片網址：</label>
          <input class="form-control" name="ad_imgUrl" id="ad_imgUrl"
          type="text" v-model="inputTemp.options.ad.imageUrl"/>
        </div>
        <div class="vld-parent">
          <loading :active.sync="isUplading"
            :can-cancel="true"
            :is-full-page="false">
            <uploading slot="default"/>
          </loading>
          <InputUpload ref="file" @uploadSubmit="upload"/>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="form-group col-10">
            <label for="adTitle">標題：</label>
            <input class="form-control" name="標題" id="adTitle"
            type="text" v-model="inputTemp.options.ad.title"/>
          </div>
          <div class="form-group col-2">
            <label for="type">是否顯示：</label>
            <toggle prodId="adEnable" :checked="inputTemp.options.ad.show"
              v-model="inputTemp.options.ad.show"/>
          </div>
          <div class="form-group col-12">
            <label for="adContent">內容：</label>
            <textarea class="form-control" name="種類" id="type"
            type="text" v-model="inputTemp.options.ad.content"/>
          </div>
        </div>
      </div>
    </div>
  <!-- index END -->
  </validation-observer>
</template>

<script>
import InputUpload from 'components/BackendStage/InputUpload.vue';
import StorageAPI from 'assets/Backend_mixins/Storage';

export default {
  name: 'ProductsModalItem',
  components: {
    InputUpload,
    uploading: () => import('components/BackendStage/LoadingUpload.vue'),
  },
  mixins: [StorageAPI],
  data() {
    return {
      isUplading: false,
      showPage: 'main',
      inputTemp: {
        imageUrl: [],
        options: {
          ad: {},
        },
      },
    };
  },
  mounted() {
    this.showPage = 'main';
    this.$set(this.inputTemp, 'imageUrl', []);
    this.$set(this.inputTemp, 'options', {});
    this.$set(this.inputTemp.options, 'ad', {});
  },
  beforeDestroy() {
    this.inputTemp = {};
  },
  methods: {
    changeHandler(e) {
      this.showPage = e.currentTarget.parentNode.dataset.page;
    },
    upload(formdata) {
      let temp = '';
      if (this.showPage === 'main') {
        temp = 'imageUrl';
      } else {
        temp = 'ad.imageUrl';
      }
      this.editStorage(formdata)
        .then((path) => {
          this.$refs.file.src = '';
          this.inputTemp[temp].push(path);
        });
    },
  },
  computed: {
    imgUrlLength() {
      if (this.inputTemp.imageUrl.length === 0) {
        return 1;
      }
      return this.inputTemp.imageUrl.length <= 4
        && this.inputTemp.imageUrl.length !== 0 ? this.inputTemp.imageUrl.length : 4;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 0.25em;
  margin-bottom: 0.25rem;
  &-item {
    flex: 1 1 auto;
    text-align: center;
    margin-left: 0.5em;
  }
  &-item:first-child {
    margin-left: 0;
  }
  &-link {
    display: block;
    padding: .5rem 1rem;
    border-radius: .25rem;
    text-decoration: none;
  }
  &-link.active {
    color: #fff;
    background: v(primary);
  }
}
.form-group {
  margin-bottom: 0.5rem;
  label {
    display: inline-block;
    margin-bottom: 0.25rem;
  }
  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &.is-valid {
      border-color: #28a745;
      padding-right: calc(1.5em + .75rem);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right calc(.375em + .1875rem) center;
      background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }
    &.is-invalid {
      border-color: #dc3545;
      padding-right: calc(1.5em + .75rem);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right calc(.375em + .1875rem) center;
      background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }
  }
  .error {
    color: #dc3545;
  }
}

@media (min-width: 768px) {
  .form-group {
    label {
      display: inline-block;
      margin-bottom: .5rem;
    }
    .error {
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
}
</style>
