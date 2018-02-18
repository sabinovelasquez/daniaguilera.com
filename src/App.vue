<template lang='pug'>
  <div id='app'>
    <main-header></main-header>
    <main-grid></main-grid>
    <main-footer></main-footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'

export default {
  name: 'app',
  created: () => {
    console.log('running with env')
    console.log(process.env)
  },
  components: {
    'main-header': Header,
    'main-grid': Grid,
    'main-footer': Footer
  }
}
</script>
<style lang='scss'>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import 'styles/main.scss';
</style>
