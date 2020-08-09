<template>
  <div class="content">
    <div class="content-overlay"></div>
    <img class="content-image" :src="path">
    <div class="content-details fadeIn-bottom">
      <button type="button" class="btn btn-info">複製連結</button>
      <button type="button" class="btn btn-error" @click.prevent="delHandler">刪除圖片</button>
    </div>
    <Dialog ref="dialog" @dialog="confirm">刪除此檔案?</Dialog>
  </div>
</template>

<script>
import StorageAPI from 'assets/Backend_mixins/Storage';

export default {
  name: 'ImgCard',
  mixins: [StorageAPI],
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    delHandler() {
      this.$refs.dialog.isVisible = true;
    },
    confirm() {
      this.destroyStorage(this.$attrs.id)
        .then(() => {
          this.$parent.getdata();
        });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
$colors: (
  default: #434a54,
  primary: #0073DE,
  secondary: #804EFD,
  info: #019EC8,
  success: #8cc152,
  error: #DD0002,
  warning: #f6bb42,
);

.content {
  border-radius: 10px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 0.75rem;
  .content-overlay {
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: all 0.4s ease-in-out 0s;
  }
  &:hover .content-overlay{
    opacity: 1;
  }
  .content-image{
    max-width: 100%;
  }
  .content-details{
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out 0s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &:hover .content-details{
    top: 50%;
    left: 50%;
    opacity: 1;
  }
  .btn {
    @include btn;
    &:first-child {
      margin-bottom: 1rem;
    }
  }
}

.fadeIn-bottom{
  top: 80%;
}

@each $key, $val in $colors {
  .btn-#{$key} {
    border-color: darken($val, 5%);
    background: $val;
    color: #fff;
    &:hover {
      background: darken($val, 5%);
    }
  }
}
</style>
