<template lang='pug'>
  nav.nav
    ul
      li
        router-link(to='/') Home
      li
        router-link(to='/detail') Detalle
</template>

<style lang='scss'>
@import '../styles/header.scss';
</style>

<script>
import VueSticky from 'vue-sticky'
export default {
  name: 'Header',
  directives: {
    'sticky': VueSticky
  }
}
</script>
