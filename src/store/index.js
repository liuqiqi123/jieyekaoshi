import Vue from "vue"
import Vuex from "vuex"
import {mutations} from "./mutations";

Vue.use(Vuex)

const state={
  nav:[],
  show:[]
}

const store = new Vuex.Store({
  state,
  mutations,
  // actions,
  // getters,
  // modules
})
export default store