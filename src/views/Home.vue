<template>
  <div class="home">
    <Navbar>KryptonGold</Navbar>
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
  methods: {},
};
</script>
<style lang="scss" scoped>
@import './Home/style/font.css';

</style>
