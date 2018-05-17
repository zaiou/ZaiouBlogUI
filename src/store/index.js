import Vue from 'vue';
import Vuex from 'vuex';
import User from './User';   //用户模块

Vue.use(Vuex);

//创建store仓库
let Store = new Vuex.Store({
  modules: {
    User,  
  }
});

export default Store; 