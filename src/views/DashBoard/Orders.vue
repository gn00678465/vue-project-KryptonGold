<template>
  <div class="container-fluid vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="false"></loading>
    <div class="row">
      <div class="col">
        <div class="dashboard">
          <header class="header">
            <div class="title">訂單列表</div>
          </header>
          <main class="body">
              <div class="table">
                <div class="table-head">
                  <div class="tr">
                    <span class="th">下單時間</span>
                    <span class="th">購買款項</span>
                    <span class="th">付款方式</span>
                    <span class="th">應付金額</span>
                    <span class="th">是否付款</span>
                  </div>
                </div>
                <div v-scrollbar class="table-body">
                  <Item v-for="order in OrderList" :key="order.id" :order="order"/>
                </div>
              </div>
            <pagination :total_pages="total" :page.sync="page" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderAPI from 'assets/Backend_mixins/Orders';
import Item from 'components/_OrderItem.vue';

export default {
  mataInfo: {
    title: '-訂單管理',
  },
  name: 'Orders',
  mixins: [OrderAPI],
  components: { Item },
  data() {
    return {
      isLoading: false,
      page: 1,
      total: 1,
      OrderList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.getOrderList(this.page);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import './style/Dashboard.scss';

$basis: (15% 40% 12% 15% 15%);

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
