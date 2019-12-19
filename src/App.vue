<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/news" activeColor="green">
        <img src="./assets/img/tabbar/news.png" slot="item-icon">
        <img src="./assets/img/tabbar/newsOn.png" slot="item-icon-active">
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/contacts" activeColor="green">
        <img src="./assets/img/tabbar/contacts.png" slot="item-icon">
        <img src="./assets/img/tabbar/contactsOn.png" slot="item-icon-active">
        <div slot="item-text">联系人</div>
      </tab-bar-item>
      <tab-bar-item path="/spot" activeColor="green">
        <img src="./assets/img/tabbar/spot.png" slot="item-icon">
        <img src="./assets/img/tabbar/spotOn.png" slot="item-icon-active">
        <div slot="item-text">看点</div>
      </tab-bar-item>
      <tab-bar-item path="/dynamic" activeColor="green">
        <img src="./assets/img/tabbar/dynamic.png" slot="item-icon">
        <img src="./assets/img/tabbar/dynamicOn.png" slot="item-icon-active">
        <div slot="item-text">动态</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TabBar from './components/common/tabebar/tabebar'
  import TabBarItem from './components/common/tabebar/tabBarItem'
export default {
  name: 'App',
    components: {
        TabBar,
        TabBarItem,
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
  }
</style>
