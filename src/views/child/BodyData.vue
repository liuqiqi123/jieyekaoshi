<template>

  <div id="box">
    <div class="img">
      <img :src="Item.pic" alt="">
    </div>
    <div class="title">
      <p>{{Item.title}}</p>
      <span>{{Item.time}}</span>
      <span>{{Item.src}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "BodyData",
  props:{
    Item: {
      type:Object
    }
  },
}
</script>

<style scoped>
#box{
  display: flex;
  padding: 2%;
}
.img{
  flex: 1;
}
.img img{
  width: 100%;
}
.title{
  flex: 2;
  margin-left: 2%;
  position: relative;
}
.title p{
  font-size: 14px;
}
.title span{
  position: absolute;
  bottom: 5px;
  font-size: 12px;
  color: #aaaaaa;
}
.title span:nth-of-type(2){
  position: absolute;
  right: 5px;
}
</style>