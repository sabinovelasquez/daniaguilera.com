<template lang='pug'>
el-main
  el-row.loading(v-if='!items')
    i.el-icon-loading
  .grid
    el-row.masonry-container(:gutter='20', v-masonry='true', transition-duration='0.12s', item-selector='.item')
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', v-for='item in items', :key='item.id')
        .content
          .hover
            h2.title {{item.title._content}}
          img.responsive(v-bind:src='item.primary_photo_extras.url_m')
</template>

<style lang='scss'>
@import '../styles/grid.scss';
</style>

<script>
import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry'
import VueResource from 'vue-resource'
const flickrAPIURL = 'https://api.flickr.com/services/rest/'
const flickrAPIId = '126002e4a8a2ff46f1288402eb3387df'
const flickrAPIUserId = '135003973@N07'

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
    this.$http.get(`${flickrAPIURL}?method=flickr.photosets.getList&api_key=${flickrAPIId}&user_id=${flickrAPIUserId}&primary_photo_extras=url_m&per_page=900&format=json&nojsoncallback=1`).then(response => {
      this.items = response.body.photosets.photoset
      console.log(this.items)
      this.$redrawVueMasonry()
    }, error => {
      console.error(error)
    })
  }
}

</script>
