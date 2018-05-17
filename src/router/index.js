import Vue from 'vue'
import Router from 'vue-router'

// 前台  start
const Home = r => require.ensure([], () => r(require('@/page/index')), 'home'); 
const IndexPage = r => require.ensure([], () => r(require('@/page/indexPage')), 'indexPage'); 
const ArticlePage = r => require.ensure([], () => r(require('@/page/articlePage')), 'articlePage'); 
const ResourcePage = r => require.ensure([], () => r(require('@/page/resourcePage')), 'resourcePage'); 
const TimelinePage = r => require.ensure([], () => r(require('@/page/timelinePage')), 'timelinePage'); 
const AboutPage = r => require.ensure([], () => r(require('@/page/aboutPage')), 'aboutPage'); 
// 前台 end

// 后台 start
const Login = r => require.ensure([], () => r(require('@/page/blog_backstage/login')), 'login'); 
const Backstage = r => require.ensure([], () => r(require('@/page/blog_backstage/index')), 'backstage'); 
const BckContent = r => require.ensure([], () => r(require('@/components/blog_backstage/backContent')), 'backContent'); 
const Details = r => require.ensure([], () => r(require('@/page/blog_backstage/details')), 'details'); 

// 后台 end
Vue.use(Router)

let router=new Router({
  mode:'history', 
  routes:[
    {
      path:'/', 
      name:'home', 
      component:Home, 
      children:[
        {path:"",name:"indexPage",component:IndexPage,meta: {title:'zaioublog'}},
        {path:"/articlePage",name:"articlePage",component:ArticlePage},
        {path:"/resourcePage",name:"resourcePage",component:ResourcePage},
        {path:"/timelinePage",name:"timelinePage",component:TimelinePage},
        {path:"/aboutPage",name:"aboutPage",component:AboutPage,}
      ],
    }, //前台 end
    {  //后台start
      path:'/backstage', 
      name:'backstage', 
      component:Backstage, 
      children:[
        {path:"/",name:"bckContent",component:BckContent,},
        {path:"/details",name:"details",component:Details,}
      ],
    },{
      path:'/login', 
      name:'login', 
      component:Login, 
    }
  ],
    scrollBehavior(to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return {x:0, y:0 }
    }
  })

router.beforeEach((to, from, next) =>  {
  document.title = to.meta.title ; 
  if (to.path.indexOf('backstage') > -1) {
    document.title = 'zaiouback'; 
  }else if(to.path.indexOf('login') > -1){
    document.title = 'login';
  }
  next(); 
})

export default router;
