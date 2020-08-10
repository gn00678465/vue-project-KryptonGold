<template>
  <div class="home">
    <Navbar ref="navbar">KryptonGold</Navbar>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from 'components/FrontStage/NavBar.vue';
import Footer from 'components/FrontStage/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
  created() {
  },
  methods: {
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
