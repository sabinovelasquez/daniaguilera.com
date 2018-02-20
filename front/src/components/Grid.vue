<template lang='pug'>
  .grid
    el-row.masonry-container(:gutter='20', v-masonry='true', transition-duration='0.12s', item-selector='.item')
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:300px') 1
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:450px') 2
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:230px') 3
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:150px') 4
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:320px') 5
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:190px') 6
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:440px') 7
      el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:390px') 8
</template>
<style lang='scss'>
@import '../styles/grid.scss';
.grid{
  margin:10px;
}
.item {
  border: 1px solid red;
  background-color: gray;
}
</style>

<script>
import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry'

Vue.use(VueMasonryPlugin)
export default {
  name: 'Grid'
}
</script>
