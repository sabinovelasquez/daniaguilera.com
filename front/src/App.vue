<template lang='pug'>
  router-view
</template>

<script>
export default {
  name: 'app',
  created: () => {
    console.log('running with env')
    console.log(process.env)
  }
}
</script>

<style lang='scss'>
  @import 'styles/colors.scss';
  @import '~bulma/bulma';
  @import 'styles/fonts.scss';
  body{
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Playfair Display', serif;
  }
</style>
