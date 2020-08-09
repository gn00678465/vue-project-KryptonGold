<template>
  <div class="tr vld-parent">
    <loading :active.sync="isLoading" color="#218DFE"
      :can-cancel="true" loader="dots"
      :is-full-page="false"></loading>
    <span class="td">{{coupon.title}}</span>
    <span class="td">{{coupon.code}}</span>
    <span class="td">{{coupon.percent | Percent}}</span>
    <span class="td">{{coupon.deadline.datetime}}</span>
    <span class="td">
      <toggle :prodId="coupon.id.substr(0, 5)" :disabled="true"
      :checked="coupon.enabled"/>
    </span>
    <span class="td">
      <BtnGroup :btns="btns" @btn-emit="BtnClick" :border="true" btnSize="md"/>
    </span>
    <Modal ref="modal" @modalEmit="edit"/>
    <Dialog ref="dialog" @dialog="confirm">刪除此優惠卷?</Dialog>
  </div>
</template>

<script>
// import Modal from 'components/_CouponModal.vue';
import CouponAPI from 'assets/Backend_mixins/Coupons';

export default {
  name: 'CouponItem',
  mixins: [CouponAPI],
  components: {
    Modal: () => import('components/_CouponModal.vue'),
  },
  props: {
    coupon: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      btns: [
        {
          class: 'info',
          outline: true,
          content: '',
          icon: 'marker',
          action: 'edit',
        },
        {
          class: 'error',
          outline: true,
          content: '',
          icon: 'trash-alt',
          action: 'del',
        },
      ],
    };
  },
  methods: {
    BtnClick(action) {
      this[`${action}Handler`]();
    },
    editHandler() {
      this.$refs.modal.ModalShow = true;
      this.$refs.modal.ModalTitle = '編輯優惠卷';
      this.$refs.modal.inputTemp = { ...this.coupon };
      const [date, time] = this.coupon.deadline.datetime.split(' ');
      this.$refs.modal.due_date = date;
      this.$refs.modal.due_time = time;
    },
    edit(data) {
      this.updateCoupon(data);
    },
    // 刪除優惠卷
    delHandler() {
      this.$refs.dialog.isVisible = true;
    },
    confirm() {
      this.destroyCoupon(this.coupon.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tr {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.td {
  flex-grow: 1;
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  color: #555;
}
</style>
