<template>
  <ValidationObserver class="navbarLogin" tag="form" v-slot="{ invalid }" @submit.prevent="submit">
    <InputField label="信箱" :attrs="inputSet" v-model="login.email"/>
    <InputField label="密碼" :attrs="inputSet" v-model="login.password"/>
    <button type="submit" class="btn btn-login" :disabled='invalid'>登入</button>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'NavbarLogin',
  components: {},
  data() {
    return {
      inputSet: {
        信箱: {
          rules: 'required|email',
          placeholder: '請輸入信箱',
          type: 'email',
        },
        密碼: {
          rules: 'required',
          placeholder: '請輸入密碼',
          type: 'password',
        },
      },
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submit() {},
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.navbarLogin {
  max-width: 300px;
  height: 100%;
  padding: 10px;
  width: 100%;
  .btn {
    @include btn;
    cursor: pointer;
    width: 100%;
    &:disabled {
      cursor: auto;
      opacity: 0.65;
    }
    &-login {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    &-login {
      background-color: darken(#007bff, 5%);
      background-color: darken(#007bff, 5%);
    }
  }
}
</style>
