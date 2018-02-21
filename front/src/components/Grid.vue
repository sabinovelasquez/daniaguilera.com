<template lang='pug'>
  el-main
    .grid
      el-row.masonry-container(:gutter='20', v-masonry='true', transition-duration='0.12s', item-selector='.item')
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:300px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:450px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:230px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:150px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:320px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:190px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:440px') 
          .content
        el-col.item(:xs='24', :sm='12', :md='6', :xl='3', v-masonry-tile='true', style='height:390px') 
          .content
</template>
<style lang='scss'>
@import '../styles/grid.scss';
.grid{
  margin:10px;
}
.item{
  padding: 10px 0 10px;
}
.content {
  height: 100%;
  background-color: #F3F3F3;
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
