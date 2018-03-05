<template lang='pug'>
nav.nav
  el-row
    el-col(:span='8')
      ul
        li
          router-link(to='/') Home
        li
          router-link(to='/detail') Detalle
    el-col.align-center.logo(:span='8')
      img(src='../assets/da-lettering.svg', alt='Dani Aguilera Lettering')
    el-col(:span='8')
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
