<template lang='pug'>
.detail
  p {{msg}}

</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'If any.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../styles/detail.scss';
</style>
