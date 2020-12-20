<template>
  <div>
    <Tabbar>
      <img src="@/assets/images/back.png" alt="" slot="left" class="left" @click="backIndex">
      <p slot="center">频道管理</p>
    </Tabbar>
    <div class="content">
      <p>点击删除以下频道</p>
      <div id="sub">
        <div v-for="(item,index) in show" :key="index" class="item" @click="sub(index)">{{item}}</div>
      </div>
      <p>点击添加以下频道</p>
      <div id="add">
        <div v-for="(item,index) in nav" :key="index" class="sub" @click="add(index)">{{item}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import Tabbar from "../components/children/Tabbar";
export default {
name: "channelManage",
  components:{
    Tabbar
  },
  data(){
    return{
      show:this.$store.state.show,
      nav:this.$store.state.nav
    }
  },
  methods:{
    backIndex(){
      this.$router.push("/")
    },
    sub(index){
      this.$store.commit("decrement",index)

    },
    add(index){
      this.$store.commit("increment",index)
    }
  }
}
</script>

<style scoped>
.content{
  width: 94%;
  margin: 3% auto;
}
#sub,#add{
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
}
.left{
  width: 30px;
  margin-top: 10px;
}
.item{
  margin-bottom: 20px;
  border: 1px solid #cccddd;
  margin-right:4%;
  width: 20%;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.sub{
  border: 1px solid #cccddd;
  width: 20%;
  height: 30px;
  margin-right:4%;
  text-align: center;
  line-height: 30px;
  margin-bottom: 20px;
}
</style>