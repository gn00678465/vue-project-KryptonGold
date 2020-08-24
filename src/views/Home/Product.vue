<template>
  <div class="container vld-parent">
    <loading :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true">
      <LoadEffect2 slot="default"/>
      </loading>
    <div>
      <BackBtn @click-emit="goBack">繼續購物</BackBtn>
    </div>
    <div class="product" v-if="product">
      <div class="product__photo">
        <img :src="product.imageUrl[1]">
        <div class="photo-main">
          <img :src="product.imageUrl[0]" alt="">
        </div>
      </div>
      <div class="product__info">
        <div class="product-content" ref="content">
          <div class="title">{{product.title}}( 1 {{product.unit}})</div>
          <div class="subtext">
            {{product.options.type}} |
            {{product.options.ml|ml}} |
            {{product.options.percent|percent}}
          </div>
          <div class="price">
            <span>{{product.origin_price|Dollar}}元</span>
            <span>{{product.price|Dollar}}元</span>
          </div>
          <div class="active">
            <Increment :count.sync="quantity" :size="setSize" styled="dark" :key="setSize">
              <template v-slot:plus>
                <font-awesome-icon icon="plus" />
              </template>
              <template v-slot:minus>
                <font-awesome-icon icon="minus" />
              </template>
            </Increment>
            <button type="button" class="btn btn-cart"
              @click.prevent="addCart">
              <font-awesome-icon v-if="addCarting" icon="spinner" pulse />
              加入購物車
            </button>
          </div>
          <hr>
          <div class="description">
            <span>介紹：</span>
            <p>{{product.description}}</p>
            <span>資訊：</span>
            <ul class="information">
              <li class="item"><font-awesome-icon :icon="['fas', 'beer']" /><span>種類：</span>
                <span>{{product.options.type}}</span>
              </li>
              <li class="item"><font-awesome-icon :icon="['fas', 'flag']" /><span>品牌：</span>
                <span>{{product.options.brand}}</span>
              </li>
              <li class="item"><font-awesome-icon :icon="['fas', 'globe']" /><span>國家：</span>
                <span>{{product.options.country}}</span>
              </li>
              <li class="item"><font-awesome-icon :icon="['fas', 'prescription-bottle']" />
                <span>容量：</span>
                <span>{{product.options.ml|ml}}</span>
              </li>
              <li class="item"><font-awesome-icon :icon="['fas', 'percent']" /><span>濃度：</span>
                <span>{{product.options.percent|percent}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Increment from 'components/Increment.vue';
import BackBtn from 'components/FrontStage/BackBtn.vue';
import FrontProductAPI from 'assets/Frontend_mixins/Product'; // mixins: [FrontProductAPI]
import FrontCartAPI from 'assets/Frontend_mixins/Cart'; // mixins: [FrontCartAPI]
import Resize from 'assets/Frontend_mixins/Resize';

export default {
  name: 'Product',
  mixins: [FrontProductAPI, FrontCartAPI, Resize],
  components: { Increment, BackBtn },
  data() {
    return {
      isLoading: false,
      addCarting: false,
      product: '',
      quantity: 1,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.GetProductDetial(id);
  },
  methods: {
    goBack() {
      window.history.back();
    },
    addCart() {
      this.CreateCart(this.product.id, this.quantity);
    },
  },
  computed: {
    setSize() {
      if (this.screenWidth <= 768) return 'sm';
      return 'md';
    },
  },
};
</script>

<style lang="scss" scoped>
/* ----- Variables ----- */
$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;

img {
  max-width: 100%;
}

.btn {
  @include btn;
}

.product {
  margin-top: 1rem;
  display: flex;
  flex-flow: column nowrap;
  &__photo {
    width: 100%;
    height: 100%;
    position: relative;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    > img {
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
    }
    .photo-main {
      position: absolute;
      width: 90%;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      > img {
        filter: drop-shadow(1px 1px 3px #a6a6a6);
      }
    }
  }
  &__info {
    position: relative;
    width: 100%;
    .product-content {
      border-radius: 30px 30px 15px 15px;
      padding: 1rem 1.5rem;
      width: 100%;
      transform: translateY(-2rem);
      box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
      background: #FFF;
      z-index: 5;
    }
    .title, .subtext, .price, .active {
      display: block;
      width: 100%;
      margin-bottom: 0.5rem;
    }
    .title {
      text-align: center;
      margin-bottom: 0.1rem;
      color: #4c4c4c;
      font-size: 1.7rem;
      font-weight: 900;
    }
    .subtext {
      font-size: 1rem;
      color: $color-secondary;
      font-weight: 500;
    }
    .price {
      span {
        &:first-child {
          font-size: 1.3rem;
          text-decoration: line-through;
          color: $color-secondary;
          margin-right: 0.5rem;
        }
        &:last-child {
          padding-left: 0.15rem;
          font-size: 2rem;
          color: $color-highlight;
        }
      }
    }
    .active {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 0.5rem;
    }
    hr {
      width: 100%;
      border-top: 1px solid $color-secondary;
      margin: 1rem 0;
    }
    .description {
      > span {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        display: block;
      }
      p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
        text-indent: 2rem;
        word-break: break-all;
      }
      ul.information {
        li.item {
          display: inline-block;
          width: 100%;
          font-size: 1rem;
          text-align: left;
          margin-bottom: 0.5rem;
          color: #6b6b6b;
          span:nth-of-type(1) {
            color: #000;
            margin-left: 0.5rem;
          }
          span:nth-of-type(2) {
            margin-left: 0.75rem;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .product {
    &__info {
      .title {
        font-size: 2rem;
      }
      .subtext {
        font-size: 1.3rem;
      }
      .price {
        span {
          &:first-child {
            font-size: 1.5rem;
          }
          &:last-child {
            font-size: 2.3rem;
          }
        }
      }
      .description {
        > span {
          font-size: 1.5rem;
        }
        > p {
          font-size: 1.1rem;
          text-indent: 2.2rem;
        }
        ul.information {
          li.item {
            font-size: 1.1rem;
            width: 50%;
          }
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .container {
    display: flex;
    // align-items: center;
    flex-flow: column nowrap;
  }
  .product {
    flex-flow: row nowrap;
    background: #fff;
    padding: 2.5rem 0;
    border-radius: 6px;
    box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
    &__photo {
      > img {
        transform: translateX(-2.5rem);
        border-radius: 6px;
      }
      .photo-main {
        width: 90%;
        transform: translate(calc(-50% - 2.5rem), -50%);
      }
    }
    &__info {
      min-height: 100% !important;
      .product-content {
        display: flex;
        flex-flow: column nowrap;
        position: initial;
        box-shadow: initial;
        background: transparent;
        transform: initial;
        height: 100%;
        justify-content: space-between;
      }
      .title {
        font-size: 2.3rem;
        text-align: left;
        margin-bottom: 1rem;
      }
      .subtext {
        font-size: 1.5rem;
      }
      .price {
        span {
          &:first-child {
            font-size: 1.8rem;
          }
          &:last-child {
            font-size: 2.5rem;
          }
        }
      }
      .active {
        order: 3;
        .btn {
          margin-right: 2rem;
          padding: 0.5rem 0.75rem;
          font-size: 1.3rem;
        }
      }
      .description {
        order: 2;
        > span {
          font-size: 1.8rem;
        }
        > p {
          font-size: 1.3rem;
          text-indent: 2.6rem;
          margin-bottom: 0.8rem;
        }
        ul.information {
          margin-bottom: 0.8rem;
          li.item {
            font-size: 1.3rem;
            width: 50%;
          }
        }
      }
    }
  }
}
</style>
