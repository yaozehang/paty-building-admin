import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userinfo:{
      avatar: "",
      create_time: "",
      desc: "",
      job: 1,
      nickname: "",
      phone: "",
      sex: 1,
      update_time: "",
      username: "",
      _id: "",
    }
  },
  mutations:{
    CHANGE_USERINFO(state,userinfo){
      state.userinfo = userinfo
    }
  },
  actions:{},
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
        sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})

export default store;