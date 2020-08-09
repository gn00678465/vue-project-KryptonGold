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
            <div class="title">優惠卷管理列表</div>
            <BtnGroup class="newBtn" :btns="btn" @btn-emit="BtnClick"/>
          </header>
          <main class="body">
              <div class="table">
                <div class="table-head">
                  <div class="tr">
                    <span class="th">優惠卷名稱</span>
                    <span class="th">優惠碼</span>
                    <span class="th">折扣(%)</span>
                    <span class="th">到期日</span>
                    <span class="th">是否啟用</span>
                    <span class="th"><font-awesome-icon class="icon" :icon="['fas', 'user-cog']" />
                    </span>
                  </div>
                </div>
                <div v-scrollbar class="table-body">
                  <item v-for="coupon in coupons" :key="coupon.id" :coupon="coupon"/>
                </div>
              </div>
            <pagination :total_pages="total" :page.sync="page" />
          </main>
        </div>
      </div>
    </div>
    <Modal ref="modal" @modalEmit="newCoupon"/>
  </div>
</template>

<script>
import item from 'components/_CouponItem.vue';
import CouponAPI from 'assets/Backend_mixins/Coupons';

export default {
  name: 'Coupons',
  mixins: [CouponAPI],
  components: {
    item,
    Modal: () => import('components/_CouponModal.vue'),
  },
  data() {
    return {
      isLoading: false,
      page: 1,
      total: 1,
      coupons: [],
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
  created() {
    this.getCouponsList(this.page);
  },
  methods: {
    BtnClick(action) {
      this[`${action}Handler`]();
    },
    newHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '新增優惠卷';
    },
    newCoupon(data) {
      this.createCoupon(data);
    },
  },
  watch: {
    page() {
      this.getCouponsList(this.page);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/Dashboard.scss';

$basis: (15% 40% 10% 20% 15% 15%);

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
