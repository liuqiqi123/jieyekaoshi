import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
const routes =[
  {
    path:"/",
    component:()=>import("@/views/index")
  },
  {
    path:"/channelManage",
    component:()=>import("@/views/channelManage")
  }
]
const router = new VueRouter({
  routes,
  mode:"history"
})
export default router

