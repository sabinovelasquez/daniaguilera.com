<template lang='pug'>
  <div id='app'>
    <main-header></main-header>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'app',
  created: () => {
    console.log('running with env')
    console.log(process.env)
  },
  components: {
    'main-header': Header
  }
}
</script>
<style lang='scss'>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import 'styles/main.scss';
</style>
