<template>
  <div class="home">
    <Navbar/>
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
