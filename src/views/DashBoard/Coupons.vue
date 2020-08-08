<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="dashboard">
          <header class="header">
            <div class="title">優惠卷管理列表</div>
            <BtnGroup class="newBtn" :btns="btn" @btnEmit="BtnClick"/>
          </header>
          <main class="body">
              <div class="table">
                <div class="table-head">
                  <div class="tr">
                    <span class="th">優惠卷名稱</span>
                    <span class="th">優惠碼</span>
                    <span class="th">折扣(%)</span>
                    <span class="th">是否啟用</span>
                    <span class="th"><font-awesome-icon class="icon" :icon="['fas', 'user-cog']" />
                    </span>
                  </div>
                </div>
                <div v-scrollbar class="table-body vld-parent">
                  <loading :active.sync="isLoading"
                    :can-cancel="true"
                    :is-full-page="false"></loading>
                  <item :prod="products[0]" @btnEmit="BtnClick"/>
                </div>
              </div>
            <pagination :total_pages="total" :page="page" />
          </main>
        </div>
      </div>
    </div>
    <Modal ref="modal" />
    <Dialog ref="dialog" @dialogEmit="DelProd">刪除此優惠卷?</Dialog>
  </div>
</template>

<script>
import item from 'components/_CouponItem.vue';

export default {
  name: 'Coupons',
  components: { item },
  data() {
    return {
      isLoading: false,
      page: 1,
      total: 5,
      products: [
        {
          id: 'fDlXGowjSmGCzGBzxXd6uJ5791dak9gNfaMegywIAfmMqez2V2qcoiSuLrxwyOWp',
          title: 'Abysswalker',
          category: 'T-Shirts',
          content: 'Its wearer, like Artorias himself, can traverse the Abyss.',
          imageUrl: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'],
          enabled: true,
          origin_price: 300,
          price: 200,
          unit: '單位',
        },
      ],
      btn: [{
        class: 'primary',
        outline: false,
        content: '新增優惠卷',
        icon: '',
        action: 'new',
        size: 'xl',
      }],
    };
  },
  methods: {
    BtnClick(action) {
      this[`${action}Handler`]();
    },
    newHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '新增優惠卷';
      this.$refs.modal.body = 'coupon';
    },
    editHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '編輯優惠卷';
      this.$refs.modal.body = 'coupon';
    },
    delHandler() {
      this.$refs.dialog.isVisible = true;
    },
    DelProd() {
      console.log('DelProd');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import './style/Dashboard.scss';

$basis: (20% 40% 12% 15% 15%);

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
