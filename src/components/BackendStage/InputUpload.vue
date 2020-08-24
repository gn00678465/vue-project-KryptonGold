<template>
  <form @submit.prevent="submit">
    <div class="form-input" >
      <label for="file">
        <span class="select" v-if="src === ''">選擇圖片</span>
        <div class="preview" v-else>
          <img id="file-preview" v-if="src !== ''" :src="src">
        </div>
      </label>
      <input type="file" id="file" name="圖片" accept="image/*" @change="preview">
    </div>
    <button type="submit" :disabled="validate">上傳圖片</button>
  </form>
</template>

<script>
export default {
  name: 'InputUpload',
  mixins: [],
  data() {
    return {
      src: '',
      validate: true,
    };
  },
  methods: {
    preview(e) {
      if (e.target.files[0] === undefined) return;
      const { size } = e.target.files[0];
      const maxSize = 2 * 1024 * 1024;
      if (size > maxSize) {
        const msg = '檔案大於 2 MB，請重新選擇!';
        this.$toast.error(msg);
      } else {
        this.validate = false;
        this.src = URL.createObjectURL(e.target.files[0]);
        // this.formData(e.target.files[0]);
      }
    },
    getFileNameExtension(name) {
      return /[.]/.exec(name) ? /[^.]+$/.exec(name)[0] : undefined;
    },
    formData(data) {
      const formData = new FormData();
      formData.append('file', data);
      return formData;
    },
    submit() {
      const formdata = new FormData();
      formdata.append('file', this.$el.querySelector('input[type="file"]').files[0]);
      this.$emit('uploadSubmit', formdata);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  width: 100%;
  height: calc(100% - 50px);
  padding: 1.5rem;
  background: #fff;
  border: 2px dashed #555;
  border-radius: 5px;
  input {
    display: none;
  }
  label {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .select {
      flex: 1 0 0;
      height: 50px;
      display: block;
      width: 100%;
      line-height: 50px;
      text-align: center;
      background: #f8f9fa;
      color: #343a40ff;
      font-size: 1.2rem;
      text-transform: Uppercase;
      font-weight: 600;
      border-radius: 10px;
    }
  }
  #file-preview {
    width: 100%;
    margin-top: 10px;
  }
  + button {
    margin-top: 0.5rem;
    display: inline-block;
    outline: none;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 12px 0;
    background: #007bff;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    &:disabled {
      font-weight: 300;
      opacity: 0.65;
      cursor: auto;
    }
  }
}
</style>
