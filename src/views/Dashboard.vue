<template>
  <div class="container-fluid bg-color vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"></loading>
    <div class="row">
      <header class="header expander-left" style="margin-left: 240px">
        <p class="title">後台管理系統</p>
        <a class="btn btn-logout" @click.prevent="logout">
          <icon class="btn-icon" iconName="exit" />
          <span>登出</span>
        </a>
      </header>
      <SideBar ref="sidbar" :home="home" :childs="childs" />
      <router-view style="margin-left: 240px; margin-top: 70px"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from 'components/SideBar.vue';
import auth from 'assets/Backend_mixins/Auth';

export default {
  name: 'Dashboard',
  mixins: [auth],
  components: { SideBar },
  data() {
    return {
      home: {
        name: '首頁',
        path: '/admin',
        icon: 'dashboard',
      },
      childs: [
        {
          name: '產品列表',
          path: 'products',
          icon: 'boxes',
        },
        {
          name: '優惠卷',
          path: 'coupons',
          icon: 'percent',
        },
        {
          name: '訂單列表',
          path: 'orders',
          icon: 'creditCard',
        },
        {
          name: '檔案管理',
          path: 'storage',
          icon: 'storage',
        },
      ],
      token: '',
      isLoading: false,
    };
  },
  created() {
    this.token = this.getToken();
    this.tokenCheck();
  },
};
</script>

<style lang="scss" scoped>
.bg-color {
  background: #F7F7F7;
  height: 100%;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 1rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    margin: 0;
    position: relative;
    color: inherit;
    font-size: 1.125rem;
    font-weight: 600;
  }
  .btn {
    @include btn;
    background: transparent;
    &-logout {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .btn-icon {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
}
</style>
