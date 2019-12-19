<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
      name: "tabBarItem",
      props:{
          path: String,
          activeColor: {
              type: String,
              default: 'blue',
          }
      },
      data (){
          return{
            //isActive: false,
          }
      },
      computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !==-1
          },
          activeStyle(){
              return this.isActive ? {color:this.activeColor}:{}
          }
      },
      methods:{
          itemClick(){
              this.$router.replace(this.path)
          }
      }
  }
</script>
<style>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab_bar_item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle; /* 去掉图片默认的margin-bottom */
  }
</style>
