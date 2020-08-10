<template>
  <div class="home">
    <Navbar ref="navbar">KryptonGold</Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from 'components/FrontStage/NavBar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
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
}
</style>
