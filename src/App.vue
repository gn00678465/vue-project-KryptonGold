<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<style lang="scss">

// reboot
*,
*::before,
*::after {
  box-sizing: border-box;
}
h1, h2, h3, tr, th, td, p{
  margin: 0;
  padding: 0;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
table { border-collapse: collapse; border-spacing: 0; }

// colors
:root {
  --theme-info: #379BDE;
  --theme-info-hover: #{darken(#379BDE, 10%)};
  --theme-primary: #f44336;
  --thtme-btn-cart: #e67e22;
  --theme-btn-cart-hover: #{darken(#e67e22, 10%)};
  --theme-card-title: #4c4c4c;
  --theme-card-subtitle: #a6a6a6;
  --theme-card-price: #ff3f40;
  --theme-order-success: #06A503;
  --theme-order-success-hover: #{darken(#06A503, 10%)};
}

// body
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

[v-cloak] {
  display: none;
}

#app {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}

</style>
