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
  //- ul.left
  //-   li
  //-     router-link(to='/') Home
  //- ul.center
  //-   li
  //-     img(src='../assets/da-lettering.svg', alt='Dani Aguilera Lettering')
  //- ul.right
  //-   li
  //-     router-link(to='/detail') Detalle
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
