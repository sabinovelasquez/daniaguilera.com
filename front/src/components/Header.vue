<template lang='pug'>
  header(v-sticky='{zIndex: 99, stickyTop: 1}')
    nav.container
      ul
        li
          a(href='#') Link
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
