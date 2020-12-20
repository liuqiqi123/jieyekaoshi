<template>
  <div id="top">
    <div class="tit">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div  class="right">
        <slot name="right"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "Tabbar"
}
</script>

<style scoped>
#top{
  width: 100%;
  height: 50px;
  background: #d43d3d;
  color: #fff;

}
.tit{
  display: flex;
  justify-content: space-between;
}

.left{
  flex: 1;
}
.center{
  flex: 1;
  font-size: 24px;
  line-height: 50px;
}
.right{
  flex: 1;
}
</style>