<template>
  <div class="home" ref="home">
    <Navbar ref="navbar">Confidant</Navbar>
    <router-view class="stky-body"></router-view>
    <Footer/>
    <GoTop />
  </div>
</template>

<script>
import Navbar from 'components/FrontStage/NavBar.vue';
import Footer from 'components/FrontStage/Footer.vue';
import GoTop from 'components/FrontStage/GoTop.vue';
import WindowEvent from 'assets/Frontend_mixins/WindowEvent';

export default {
  name: 'Home',
  mixins: [WindowEvent],
  components: {
    Navbar,
    Footer,
    GoTop,
  },
};
</script>
<style lang="scss">
@import './Home/style/font.css';

.home {
  background: #F7F7F7;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Microsoft JhengHei', 'Noto Sans TC', sans-serif;
}

.stky-body {
  flex: 1 0 auto;
}
</style>
