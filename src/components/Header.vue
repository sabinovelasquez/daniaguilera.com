<template lang='pug'>
  header.container(v-sticky='{zIndex: 99, stickyTop: 1}')
    nav
      ul
        li
          a(href='#') Link
</template>
<style lang='scss'>
</style>

<script>
import VueSticky from 'vue-sticky'
export default {
  name: 'Header',
  directives: {
    'sticky': VueSticky,
  }
}
</script>