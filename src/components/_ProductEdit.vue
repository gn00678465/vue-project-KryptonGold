<template>
  <ValidationObserver tag="form" @submit="onSubmit">
    <div class="row">
      <div class="col-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <InputField label="圖片網址" :attrs="inputSet"
              v-model="inputTemp.imageUrl[0]"/>
            </div>
            <div class="col-12" v-for="i in imgUrlLength" :key="i">
              <InputField label="圖片網址" :attrs="inputSet"
              v-model="inputTemp.imageUrl[i]"/>
            </div>
            <hr>
            <div class="col-12">
              <InputUpload ref="file"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="container">
          <div class="row">
            <div class="col-10">
              <InputField label="標題" :attrs="inputSet"
              v-model="inputTemp.title"/>
            </div>
            <div class="col-2">
              <span class="label toggle">是否啟用</span>
              <toggle :prodId="'isEnable'" :checked="inputTemp.enabled"
              v-model="inputTemp.enabled"/>
            </div>
            <div class="col-6">
              <InputField label="分類" :attrs="inputSet"
              v-model="inputTemp.category"/>
            </div>
            <div class="col-6">
              <InputField label="單位" :attrs="inputSet"
              v-model="inputTemp.unit"/>
            </div>
            <div class="col-6">
              <InputField label="原價" :attrs="inputSet"
              v-model.number="inputTemp.origin_price"/>
            </div>
            <div class="col-6">
              <InputField label="售價" :attrs="inputSet"
              v-model.number="inputTemp.price"/>
            </div>
            <hr>
            <div class="col-12">
              <InputField type="textarea" label="產品描述" :attrs="inputSet"
              v-model="inputTemp.content"/>
            </div>
            <div class="col-12">
              <!-- <span class="label">商品說明：</span> -->
              <!-- <vue-editor v-model="inputTemp.description" /> -->
              <InputField type="textarea" label="產品說明" :attrs="inputSet"
              v-model="inputTemp.description"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import InputUpload from 'components/InputUpload.vue';

export default {
  name: 'ProductEdit',
  components: { InputUpload },
  created() {
    this.inputTemp = this.$attrs.inputTemp;
  },
  data() {
    return {
      inputTemp: {},
      inputSet: {
        標題: {
          rules: 'required',
          placeholder: '請輸入標題',
          type: 'text',
        },
        分類: {
          rules: 'required',
          placeholder: '請輸入分類',
          type: 'text',
        },
        單位: {
          rules: 'required',
          placeholder: '請輸入單位',
          type: 'text',
        },
        原價: {
          rules: 'required',
          placeholder: '請輸入原價',
          type: 'number',
        },
        售價: {
          rules: 'required',
          placeholder: '請輸入售價',
          type: 'number',
        },
        產品描述: {
          rules: 'required',
          placeholder: '請輸入產品描述',
          type: 'textarea',
        },
        產品說明: {
          rules: 'required',
          placeholder: '請輸入產品說明',
          type: 'textarea',
        },
        圖片網址: {
          rules: 'required',
          placeholder: '請輸入圖片網址',
          type: 'text',
        },
      },
    };
  },
  computed: {
    imgUrlLength() {
      return this.inputTemp.imageUrl.length <= 3 ? this.inputTemp.imageUrl.length : 3;
    },
  },
  watch: {
    inputTemp() {
      this.$emit('update:inputTemp', this.inputTemp);
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.toggle {
  margin-bottom: 1rem;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
  width: 100%;
}
</style>
