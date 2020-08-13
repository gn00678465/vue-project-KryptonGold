<template>
  <div id="app">
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
  --info: #379BDE;
}

// body
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}

</style>
