<template lang='pug'>
  section.hero.is-fullheight.is-primary.maintenance
    .hero-head
    .hero-body.has-text-centered
      .container
        img(src='../assets/da-lettering.svg', alt='Dani Aguilera Lettering', width='240px')
        .social
          .columns.is-mobile
            .column
              a.rrss(href='https://www.facebook.com/Da.lettering/')
                icon(name='brands/facebook-f', scale='1.5')
            .column
              a.rrss(href='https://www.instagram.com/da_lettering')
                icon(name='brands/instagram', scale='1.5')
            .column
              a.rrss(href='mailto:da.lettering@gmail.com')
                icon(name='envelope', scale='1.5')
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import 'vue-awesome/icons/brands/facebook-f'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/brands/pinterest'
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
