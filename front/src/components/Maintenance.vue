<template lang='pug'>
el-row.maintenance
  .logo
    img(src='../assets/da-lettering.svg', alt='Dani Aguilera Lettering')
    .social
      a(href='https://www.facebook.com/Da.lettering/', target='_blank')
        icon(name='brands/facebook-f', scale='1.5')
      a(href='https://www.instagram.com/da_lettering', target='_blank')
        icon(name='brands/instagram', scale='1.5')
      a(href='mailto:da.lettering@gmail.com')
        icon(name='envelope', scale='1.5')
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import 'vue-awesome/icons/brands/facebook-f'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/envelope'
import Icon from 'vue-awesome/components/Icon'

Vue.use(VueResource)

export default {
  name: 'Soon',
  components: {
    Icon
  }
}
</script>

<style lang='scss'>
@import '../styles/maintenance.scss';
</style>
