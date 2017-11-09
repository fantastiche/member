<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" type="text/scss">
  @import './common/sass/reset.scss';

  body {
    background-color: #fbf9fe;
  }
</style>
