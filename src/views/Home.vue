<template>
  <div class="home">
    <Navbar ref="navbar">Confidant</Navbar>
    <router-view></router-view>
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
<style lang="scss" scoped>
@import './Home/style/font.css';

.home {
  background: #F7F7F7;
  min-height: 100%;
  display: flex;flex-direction: column;
}
</style>
