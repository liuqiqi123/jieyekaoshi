<template>
  <div>
    <Tabbar>
      <p slot="center">KGC 新闻</p>
    </Tabbar>

    <div id="channel">
      <ul>
        <li v-for="(item,index) in show" :key="index">{{item}}</li>
      </ul>
      <div class="add"  @click="extend">
        <img src="../assets/images/add.png" alt="这是一个加号喔" >
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar from "./children/Tabbar";
import {request} from "../network";

export default {
name: "vNav",
  data(){
   return{
     show:this.$store.state.show
   }
  },
  components:{
    Tabbar,
  },
  methods:{
    extend(){
      this.$router.push("/channelManage")
    }
  },

}
</script>

<style scoped>
#channel{
  width: 100%;
  height: 44px;
  background: #f4f5f6;
  color: #505050;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
}
#channel ul{
  display: flex;
  justify-content: space-around;
  width: calc(100vw - 44px);
}
li{
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.add img{
  width: 30px;
  height: 30px;
  padding: 7px;
  border-left: 1px solid #cccddd;

}
</style>