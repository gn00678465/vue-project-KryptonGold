<template>
  <transition name="modal" v-if="ModalShow">
    <div class="modal">
      <div class="modal__container" :class="`modal__wrapper-${size}`">
        <!-- header -->
        <header class="modal__header">
          <slot name="header">
            {{ ModalTitle }}
          </slot>
          <div class="times" @click.prevent="closeModal">&times;</div>
        </header>
        <!-- body -->
        <div class="modal__body">
          <!-- inputs -->
            <ValidationObserver class="container-fluid" tag="form" ref="form">
              <div class="row">
                <div class="col-4">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <InputField label="圖片網址" :attrs="inputSet"
                        v-model="inputTemp.imageUrl[0]"/>
                      </div>
                      <div class="col-12" v-for="i in imgUrlLength" :key="i">
                        <InputField label="圖片網址(option)" :attrs="inputSet"
                        v-model="inputTemp.imageUrl[i]"/>
                      </div>
                      <hr>
                      <div class="col-12 vld-parent">
                        <loading :active.sync="isUplading"
                          :can-cancel="true"
                          :is-full-page="false">
                          <uploading slot="default"/>
                        </loading>
                        <InputUpload ref="file" @uploadSubmit="upload"/>
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
        </div>
        <!-- footer -->
        <div class="modal__footer">
          <BtnGroup class="mr-3" :btns="btnCheck" @btn-emit="validate"/>
          <BtnGroup :btns="cancleBtn" @btn-emit="closeModal"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import InputUpload from 'components/InputUpload.vue';
import StorageAPI from 'assets/Backend_mixins/Storage';

export default {
  name: 'ProductModal',
  components: {
    InputUpload,
    uploading: () => import('components/LoadingUpload.vue'),
  },
  mixins: [StorageAPI],
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
  data() {
    return {
      ModalShow: false,
      ModalTitle: '',
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
        '圖片網址(option)': {
          rules: '',
          placeholder: '請輸入圖片網址',
          type: 'text',
        },
      },
      btnCheck: [
        {
          class: 'primary',
          outline: true,
          content: '確定',
          icon: '',
          action: 'checked',
        },
      ],
      cancleBtn: [
        {
          class: 'error',
          outline: true,
          content: '取消',
          icon: '',
          action: 'cancle',
        },
      ],
      isUplading: false,
      inputTemp: {
        imageUrl: [],
      },
    };
  },
  methods: {
    closeModal() {
      this.ModalShow = false;
      this.clearInput();
    },
    clearInput() {
      this.inputTemp = {};
      this.$set(this.inputTemp, 'imageUrl', []);
    },
    validate() {
      this.$refs.form.validate()
        .then((success) => {
          if (success) {
            this.$emit('dataEmit', this.inputTemp);
            this.closeModal();
          }
        });
    },
    upload(formdata) {
      this.editStorage(formdata)
        .then((path) => {
          this.$refs.file.src = '';
          this.inputTemp.imageUrl.push(path);
        });
    },
  },
  computed: {
    imgUrlLength() {
      return this.inputTemp.imageUrl.length <= 3 ? this.inputTemp.imageUrl.length : 3;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  .modal {
    &__container {
      width: 100%;
      height: auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.8s ease;
    }
    &__header {
      padding: 1.2rem;
      font-size: 1.8rem;
      border-bottom: 1px solid #dee2e6;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      .times {
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
      }
    }
    &__body {
      padding: 1rem;
    }
    &__footer {
      padding: 1rem;
      border-top: 1px solid #dee2e6;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
    }
  }
}

.mr-3 {
  margin-right: 1.5rem;
}

.toggle {
  margin-bottom: 1rem;
}

// size
.modal__wrapper {
  &-sm {
    max-width: 300px;
  }
  &-md {
    max-width: 500px;
  }
  &-lg {
    max-width: 800px;
  }
  &-xl {
    max-width: 1140px;
  }
}

// animate
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter-active .modal__container {
  animation: bounceInDown .7s forwards;
}
.modal-leave-active .modal__container {
  animation: bounceOutUp .7s forwards;
}
// enter
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
// leave
@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}

</style>
