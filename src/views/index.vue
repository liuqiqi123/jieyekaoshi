<template>
  <div>
    <vNav></vNav>
    <BodyData v-for="(item,index) in title" :key="index" :Item="item"></BodyData>
  </div>
</template>

<script>
import  {request} from "../network";
import vNav from "../components/vNav"
import BodyData from "./child/BodyData";
export default {
name: "index",
  components:{
    vNav,
    BodyData
  },
  methods:{
    bodyData(){
      request({
        url:"/json/news.json"
      }).then((value)=>{
        this.title=value.data.result.list
      })
    }
  },
  data(){
   return{
     title:[]
   }
  },
  created() {
    this.bodyData()
  }
}
</script>

<style scoped>

</style>