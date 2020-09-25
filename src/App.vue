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
  --primary: #BC8848;
  // --primary: #b65219;
  --secondary: #4c4c4c;
  --success: #06A503;
  --info: #379BDE;
  --warning: #C38A00;
  --danger: #f44336;
  --light: #eee;
  --dark: #26272b;
  --hightlight: #69f0ae;
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

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

#app {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}

</style>
