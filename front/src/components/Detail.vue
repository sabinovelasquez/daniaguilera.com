<template lang='pug'>
el-row.detail
  el-col.desc(:xs='24', :sm='12')
    p(v-html='description')
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
  methods: {
    getComment: (photoId) => {
      Vue.http.get(`${flickrAPIURL}?method=flickr.photos.getInfo&api_key=${flickrAPIId}&photo_id=${photoId}&format=json&nojsoncallback=1`).then(response => {
        this.description = response.body.photo.description._content
        console.log(this.description)
      }, error => {
        console.error(error)
      })
    }
  },
  mounted () {
    // https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=29e3db18fa4d09bf4dacf370cca8f4ba&photo_id=40621230491&format=json&nojsoncallback=1
    this.$http.get(`${flickrAPIURL}?method=flickr.photosets.getPhotos&api_key=${flickrAPIId}&photoset_id=${this.$route.params.id}&extras=${extras}&format=json&nojsoncallback=1`).then(response => {
      this.items = response.body.photoset.photo
      this.getComment(this.items[0].id)
    }, error => {
      console.error(error)
    })
  }
}
</script>

<style scoped lang='scss'>
@import '../styles/detail.scss';
</style>
