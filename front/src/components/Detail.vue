<template lang='pug'>
.detail
  p {{msg}}

</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'API: https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=a19c9cb205c47bd896d25d53598a1057&photoset_id=72157677454619445&user_id=135003973%40N07&per_page=900&format=json&nojsoncallback=1'
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../styles/detail.scss';
</style>
