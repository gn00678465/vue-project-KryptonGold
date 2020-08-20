<template>
  <div class="home">
    <Navbar ref="navbar">Confidant</Navbar>
    <router-view class="stky-body"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from 'components/FrontStage/NavBar.vue';
import Footer from 'components/FrontStage/Footer.vue';
import NavBg from 'assets/Frontend_mixins/Nav'; // mixins: [NavBg]

export default {
  name: 'Home',
  mixins: [NavBg],
  components: {
    Navbar,
    Footer,
  },
  mounted() {
  },
  created() {
  },
};
</script>
<style lang="scss">
@import './Home/style/font.css';

.home {
  background: #F7F7F7;
  min-height: 100%;
  display: flex;flex-direction: column;
  font-family: 'Microsoft JhengHei', 'Noto Sans TC', sans-serif;
}

.stky-body {
  padding-top: 50px;
  flex: 1 0 auto;
}
.products, .index {
  padding-top: 0;
}

.btn {
  @include btn;
}

@media (min-width: 768px) {
  .stky-body {
    padding-top: 115px;
  }
}

@media (min-width: 992px) {
  .stky-body {
    padding-top: 75px;
  }
}
</style>
