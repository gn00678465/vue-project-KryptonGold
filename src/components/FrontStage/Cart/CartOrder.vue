<template>
  <div class="container vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect slot="default"/>
      </loading>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-10 col-lg-8">
        <div class="order">
          <div class="order-img">
            <img src="https://images.unsplash.com/photo-1565993711537-f1625a043349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
          </div>
          <div class="order-content">
            <div class="product">
              <div class="title">訂單資訊</div>
              <ul class="content">
                <li class="item" v-for="prod in products" :key="prod.product.id">
                  <span>{{ prod.product.title }}</span>
                  <span>{{ prod.quantity }} {{ prod.product.unit }}</span>
                </li>
              </ul>
              <div class="footer"><span>總共：</span>{{ amount|Currency|Dollar }}</div>
            </div>
            <div class="user">
              <div class="title">訂購人資料</div>
              <ul class="content">
                <li class="item"><span>姓名：</span><span>{{ user.name }}</span></li>
                <li class="item"><span>信箱：</span><span>{{ user.email }}</span></li>
                <li class="item"><span>電話：</span><span>{{ user.tel }}</span></li>
                <li class="item"><span>地址：</span><span>{{ user.address }}</span></li>
              </ul>
              <div class="footer">
                <button class="btn btn-next" type="button" @click.prevent="setPaid">
                  <font-awesome-icon v-if="isSpin" icon="spinner" pulse /> 確認付款</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from 'assets/Store';
import FrontCartAPI from 'assets/Frontend_mixins/Cart';

export default {
  name: 'CartOrder',
  mixins: [FrontCartAPI],
  components: {},
  data() {
    return {
      isSpin: false,
      products: [],
      user: {},
      amount: 0,
    };
  },
  created() {
    const vm = this;
    this.ShowOrder(this.getID)
      .then((data) => {
        vm.products = data.data.products;
        vm.user = data.data.user;
        vm.amount = data.data.amount;
      });
  },
  methods: {
    setPaid() {
      const vm = this;
      this.SetOrderPaid(this.getID)
        .then(() => vm.$emit('goNext'));
    },
  },
  computed: {
    getID() {
      return store.orderID;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style/_cart.scss';

img {
  width: 100%;
  height: 100%;
}

.order {
  position: relative;
  margin: 1rem 0;
  &-img, &-content  {
    flex: 1;
    flex-wrap: nowrap;
    width: 100%;
  }
  &-content {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.5);
    backdrop-filter: saturate(120%) blur(5px);
    display: flex;
    flex-direction: column;
    height: 100%;
    .product, .user {
      flex-basis: 50%;
      display: flex;
      flex-flow: column nowrap;
      .title {
        padding: 20px;
        display: block;
        width: 100%;
        text-align: left;
        font-size: 1.5rem;
        font-weight: 900;
      }
      .content {
        flex: 1 0 0;
        padding: 0 20px;
        .item {
          display: block;
          width: 100%;
          font-size: 1.1rem;
          line-height: 1.3;
        }
      }
      .footer {
        padding: 20px;
        .btn {
          margin: 0;
        }
      }
    }
    .product {
      border-bottom: 1px solid #f2f2f2;
      .content {
        .item {
          span:last-child {
            float: right;
          }
          &:after {
            content: '';
            clear: both;
          }
        }
      }
      .footer {
        width: 100%;
        text-align: right;
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
  }
}

// @media (min-width: 576px) {
//   .order {
//     display: flex;
//     &-img, &-content {
//       flex: 0 0 50%;
//     }
//     &-content {
//       position: relative;
//     }
//   }
// }

@media (min-width: 768px) {
  .order {
    display: flex;
    &-img, &-content {
      flex: 0 0 50%;
    }
    &-content {
      position: relative;
      height: auto;
      background: #fff;
      backdrop-filter: none;
      .product, .user {
        .content {
          .item {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}

</style>
