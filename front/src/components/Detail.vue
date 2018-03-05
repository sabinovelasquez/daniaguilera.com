<template lang='pug'>
el-row.detail
  el-col.desc(:xs='24', :sm='12')
    p id: {{this.$route.params.id}}
  el-col(:xs='24', :sm='12')
    .photoset(v-for='item in items', :key='item.id')
      .content
        img.cover(v-bind:src='item.url_o')
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

const flickrAPIURL = 'https://api.flickr.com/services/rest/'
const flickrAPIId = '126002e4a8a2ff46f1288402eb3387df'
const extras = 'machine_tags,url_m,url_o'
Vue.use(VueResource)

export default {
  name: 'Detail',
  data () {
    return {
      items: null
    }
  },
  mounted () {
    this.$http.get(`${flickrAPIURL}?method=flickr.photosets.getPhotos&api_key=${flickrAPIId}&photoset_id=${this.$route.params.id}&extras=${extras}&format=json&nojsoncallback=1`).then(response => {
      this.items = response.body.photoset.photo
    }, error => {
      console.error(error)
    })
  }
}
</script>

<style scoped lang='scss'>
@import '../styles/detail.scss';
</style>
