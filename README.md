### 前端文档：https://developer.mozilla.org/zh-CN/
            https://www.kancloud.cn
            http://www.wwtliu.com
            https://developers.douban.com/ 豆瓣数据
            https://router.vuejs.org/zh-cn/ vue路由
            http://element-cn.eleme.io/#/zh-CN/component/installation 饿了么组件
            https://codepen.io/CarterLi/pen/mXVNpm 在线文本编辑器
            http://fly.layui.com/jie/8380/ 在线工具 layui+vue
###项目目录结构
    index.html： 项目根视图
    .postcsssrc.js: postcss配置文件
    main.js：入口文件
    app.vue:第一个vue组件(根组件)

###学习文档
1、单文件组件
    a)三个部分组成
        1.Templement:代码html部分
            *只能存在一个根元素(div)
        2、Script:业务逻辑部分
        3、Style：样式部分
    b)子父级组件交互(通信)
        父 -> 子 ： props
        子 -> 父 ： emit
    c)插槽
        单个插槽
        具名插槽
        作用域插槽:数据是子传父
    d)动态组件
        keep-alive（缓存动态组件）
2、 css过渡和动画
    在css过渡和动画中自动应用class
        过渡类名：(transition从0~1的过程)
            v-enter：进入开始
            v-enter-active：执行过程中触发
            v-enter-to：结束动画
            v-leave：离开开始
            v-leave-active：离开过程
            v-leave-to：离开结束
    使用第三方动画库：
        Animate.css /  svg
3、自定义指令
    全局指令(在main.js中写)
    局部指令
4、axios
    全局配置：
        axios.defaults.baseURL = 'https://api.example.com';
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    拦截器
5、跨域解决方案
    修改config 中index.js文件 (打包后没有用，只能用于测试)
        proxyTable: { 
            ‘/api’: { 
                target: ‘https://127.0.0.1:7066‘, 
                changeOrigin: true, 
                pathRewrite: { 
                    ‘^/api’: ” 
                } 
            } 
        }
    main.js中添加host
        Vue.prototype.Host='/api'
6、mock 数据模拟
    a)、自己创建json文件，使用get形式请求形式访问数据
    b)、项目中集成服务器、模拟接口 如node
    c）、直接使用线上数据
    d)、数据模拟库 (http://mockjs.com/)
7、路由
8、前端组件Element (http://element-cn.eleme.io)
9、swipper
    https://github.com/surmon-china/vue-awesome-swiper(vue集成swipper)
10、vue-lazyload
    https://github.com/hilongjw/vue-lazyload
11、REM与less单位
12：vuex状态管理(实现数据共享)
    view -> (dispatch) Action -> (Commit) Mutations -> (Mutate) State -> View
    注： Action不是必须品，如果有异步操作才能用到action,否侧可以不使用
    

### 开发历程

2018/03/01-03/06 基础架构
2018/03/07-03/07 添加全局拦截器
2018/04/10-04/11 集成vuex
                 添加登陆功能
2018/04/15-04/17 添加后端页面
                 使用父子组件之间通信 $emit $refs
                 集成element-ui,设置后天左侧导航栏
2018/04/16-04/17 集成路由实现前后台切换
