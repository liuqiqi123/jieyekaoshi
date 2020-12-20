export const mutations ={
  muChannels(state,data){
    //当得到频道数据时调用
    state.nav=data

  },
  show(state,data){
    state.show=data.splice(0,4)

  },
  decrement(state,data){
    //当频道管理中删减频道时调用
    state.nav.push(state.show.slice(data,data+1)[0])
    state.show.splice(data,1)

  },
  increment(state,data){
    //当频道管理中新增频道时调用，
    state.show.push(state.nav.slice(data,data+1)[0])
    state.nav.splice(data,1)
  },

}