<template>
  <div class="tr vld-parent">
    <loading :active.sync="isLoading" color="#218DFE"
      :can-cancel="true" loader="dots"
      :is-full-page="false"></loading>
    <span class="td">{{order.created.datetime}}</span>
    <span class="td">
      <ul>
        <li v-for="(prod, i) in order.products" :key="i">
          {{`${prod.product.title} 數量：${prod.quantity} ${prod.product.unit}`}}
        </li>
      </ul>
    </span>
    <span class="td">{{order.payment}}</span>
    <span class="td">{{order.amount | Dollar | Currency}}</span>
    <span class="td">
      <toggle :prodId="order.id.substr(0, 5)" @input="edit"
      :checked="order.paid"/>
    </span>
    <Dialog ref="dialog" @dialog="confirm">變更付款狀態為 {{paid(!order.paid)}}?</Dialog>
  </div>
</template>

<script>
// import Modal from 'components/_CouponModal.vue';
import OrderAPI from 'assets/Backend_mixins/Orders';

export default {
  name: 'OrderItem',
  mixins: [OrderAPI],
  components: {
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    paid(status) {
      return status ? '已付款' : '未付款';
    },
    confirm() {},
    edit() {
      if (this.order.paid) {
        this.SetOrderUnpaid(this.order.id).then(() => {
          this.$toast.success(`已變更付款狀態為${this.paid(this.order.id)}`);
        });
      } else {
        this.SetOrderPaid(this.order.id).then(() => {
          this.$toast.success(`已變更付款狀態為${this.paid(this.order.id)}`);
        });
      }
    },
  },
  computed: {
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
ul {
  display: block;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  li {
    display: block;
    width: 60%;
    text-align: left;
    margin-top: .15rem;
    margin-bottom: .15rem;
  }
}
</style>
