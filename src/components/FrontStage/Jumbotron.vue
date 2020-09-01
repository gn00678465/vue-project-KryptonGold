<template>
  <div class="jumbotron">
    <img class="slide" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SDoPfqZGNHS4Ucvuzph02opaqnOfcXi9CQrpCwzrM6S189RZcAk1jLKttOOuXmvH0xtz5GudbOFcsq7Py3qq18fxY7N2R8hrBIkhSxY15if6ydxHTDzk3nqo5iVpLSU5.jpg"/>
    <transition enter-active-class="animate__animated animate__fadeInDown">
      <div class="content" v-if="show">
        <p class="h1">酒逢知己千杯少</p>
        <h2 class="subtitle">是兄弟就一起喝</h2>
        <hr>
        <button type="button" class="btn btn-light" @click.prevent="goProduct">產品列表</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  components: {},
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    goProduct() {
      this.$router.push('/products');
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.slide {
  display: block;
  height: 400px;
  object-fit: cover;
  width: 100%;
}

.jumbotron {
  position: relative;
  .content {
    width: 100%;
    position: absolute;
    bottom: 5%;;
    text-align: center;
  }
  .h1 {
    font-size: 30px;
    font-weight: 900;
    color: white;
  }
  .subtitle {
    font-size: 20px;
    margin-top: 0.25rem;
    color: white;
  }
  hr {
    width: 100px;
    margin: 15px auto;
    border: 2.5px solid #fff;
  }
}

@media (min-width: 768px) {
  .slide {
    height: 600px;
  }
  .jumbotron {
    .h1 {
      font-size: 50px;
    }
    .subtitle {
    font-size: 30px;
    }
    hr {
      margin: 20px auto;
      border: 3px solid #fff;
    }
    .btn {
      font-size: 1.2rem;
    }
  }
}

@media (min-width: 992px) {
  .slide {
    height: 800px;
  }
  .jumbotron {
    .h1 {
      font-size: 75px;
    }
    .subtitle {
    font-size: 50px;
    }
    hr {
      margin: 30px auto;
      border: 3.5px solid #fff;
    }
    .btn {
      font-size: 1.5rem;
    }
  }
}
</style>
