<template lang='pug'>
  el-container#app
    el-header(height='150px')
      main-header
    el-main
      router-view
    el-footer
      main-footer
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  created: () => {
    console.log('running with env')
    console.log(process.env)
  },
  components: {
    'main-header': Header,
    'main-footer': Footer
  }
}
</script>

<style lang='scss'>
@import 'styles/fonts.scss';
body{
  margin:0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
h1, h2, h3, h4,h5, h6{
  font-family: 'Playfair Display', serif;
}
[v-cloak] {
  display: none;
}
</style>
