// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入App.vue
import App from './App'
//引入路由
import router from './router'
//引入axios
import axios from 'axios'
//引入vuex的仓库
import store from './store';
//引入sessionstorage
import {user} from "@/sessionstorage/index.js";
//引入ajax请求api
import api from './api';
//引入图形font-awesome.min.css
import 'font-awesome/css/font-awesome.min.css'
// 集成jquery
// import $ from 'jquery'
//引用iview
import iView from 'iview';
//引用iview样式
import 'iview/dist/styles/iview.css'; 
//引入element-ui
import elementUI from 'element-ui'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(iView);// iView
Vue.use(elementUI);// element-ui

//将 axios 改写为 Vue 的原型属性
Vue.prototype.$http = axios

//引入全局过滤器
import * as filters from './filter/index.js'  
//注册全局过滤器
Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key])  
})  

// http拦截器 处理发送请求前的事情和发送请求后的事情
// let backHome = function(){
//   store.commit('set_user_data',{});
//   router.push({
//       name:"indexPage"
//   });
// }

// Vue.http.interceptors.push((request, next) => {
//     console.info("发送请求......",request);
//     next((response) => {
//       console.info("请求结束.....",response);
//       //如果未登录 跳转到登录页面
//       if(response.data.status == "401"){
//           console.error("你没有登录");
//           backHome();
//       }
//       if(response && response.data && response.data.status != "200"){
//         response.data.data = {
          
//         };
//       }
//       return response;
//     });
// });


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //绑定index.html中的根视图
  router,  //根组件“注入”到每一个子组件，注入后才生效
  store,
  api,
  components: { App },  //命名组件
  template: '<App/>' //加载组件视图
})
