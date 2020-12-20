
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import {request} from "./network";

export default {
  name: 'App',
  created: function() {
     request({
      url:"/nav",
    }).then(value => {
      this.$store.commit("muChannels",value.data.result)
      this.$store.commit("show",value.data.result)

    })
  },
  mounted() {
    window.onresize=function (){
        location.reload()
    }
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}

</style>
