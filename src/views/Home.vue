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
import WindowEvent from 'assets/Frontend_mixins/WindowEvent';

export default {
  name: 'Home',
  mixins: [WindowEvent],
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss">
@import './Home/style/font.css';

.home {
  --paddingTop: 62px;
  background: #F7F7F7;
  min-height: 100%;
  display: flex;flex-direction: column;
  font-family: 'Microsoft JhengHei', 'Noto Sans TC', sans-serif;
}

.stky-body {
  flex: 1 0 auto;
  padding-top: 50px;
}

@media (min-width: 768px) {
  .stky-body {
    padding-top: 64px;
  }
}
</style>
