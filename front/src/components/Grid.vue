<template lang='pug'>
el-main
  el-row.loading(v-if='!items')
    i.el-icon-loading
  .grid
    el-row.masonry-container(:gutter='20', v-masonry='true', transition-duration='0.12s', item-selector='.item')
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', v-for='item in items', :key='item.id')
        .content
          img.responsive(v-bind:src='item.display_src')
</template>

<style lang='scss'>
@import '../styles/grid.scss';
</style>

<script>
import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueMasonryPlugin)
export default {
  name: 'Grid',
  data () {
    return {
      title: '',
      items: null
    }
  },
  mounted () {
    this.$http.get('https://www.instagram.com/da_lettering/?__a=1').then(response => {
      this.items = response.body.user.media.nodes
      this.$redrawVueMasonry()
    }, error => {
      console.error(error)
    })
  }
}

</script>
