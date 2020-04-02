import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInputdata:"",
    eventID:"",
    AllItems:{
      collection:{
        items:[]
      }
    }
  },
  getters:{
    collectionLoad: state => state.AllItems.collection.items.find((event, index) => index === state.eventID),
    collections(state){
      return state.AllItems.collection.items.filter(el => {
        return el.data[0].title.toLowerCase().indexOf(state.searchInputdata.toLowerCase()) !== -1;
      })

    }

  },
  mutations: {
    LOADIMAGES(state,val){
      state.AllItems=val;
    },
    SEARCHINPUT(state, val){
      state.searchInputdata = val;
    },
    EVENTID(state, val) {
      state.eventID = val;
    }
  },
  actions: {
    loadImages({commit},pageId=1){
      axios.get("https://images-api.nasa.gov/search?q=earth&page=" + pageId)
      .then(res => commit("LOADIMAGES",res.data))
    }

  },
  modules: {
  }
})
