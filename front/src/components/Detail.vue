<template lang='pug'>
el-row.detail
  el-col.desc(:xs='24', :sm='12')
    p.loading(v-if='!description')
      i.el-icon-loading
    p(v-html='description', style='white-space: pre;')
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
const extras = 'last_update,url_m,url_o'
Vue.use(VueResource)

export default {
  name: 'Detail',
  data () {
    return {
      items: null,
      description: null
    }
  },
  mounted () {
    const getComment = (photoId) => {
      Vue.http.get(`${flickrAPIURL}?method=flickr.photos.getInfo&api_key=${flickrAPIId}&photo_id=${photoId}&format=json&nojsoncallback=1`).then(response => {
        this.description = response.body.photo.description._content
      }, error => {
        console.error(error)
      })
    }
    this.$http.get(`${flickrAPIURL}?method=flickr.photosets.getPhotos&api_key=${flickrAPIId}&photoset_id=${this.$route.params.id}&extras=${extras}&format=json&nojsoncallback=1`).then(response => {
      this.items = response.body.photoset.photo
      this.description = getComment(this.items[0].id)
    }, error => {
      console.error(error)
    })
  }
}
</script>

<style scoped lang='scss'>
@import '../styles/detail.scss';
</style>
