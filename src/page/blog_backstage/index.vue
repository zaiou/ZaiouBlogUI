<template>
    <div :class="skin" class="layui-layout layui-layout-admin" @mousemove="havigationShow($event)" @click="hideSetting()">
        <backHeader></backHeader>
        <backNavigation></backNavigation>
        <backHideNavigation></backHideNavigation>
        <!-- 后台主题内容 -->
        <router-view></router-view>
        <!-- <backContent></backContent> -->
        <backBottom></backBottom>
        <backShortMenu></backShortMenu>
        <backSetting ref="backSetting"></backSetting>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import router from '@/router/index.js';
import bus from '@/emit/eventBus.js';

import backHeader from '@/components/blog_backstage/backHeader.vue';
import backNavigation from '@/components/blog_backstage/backNavigation.vue';
import backHideNavigation from '@/components/blog_backstage/backHideNavigation.vue';
// import backContent from '@/components/blog_backstage/backContent.vue';
import backBottom from '@/components/blog_backstage/backBottom.vue';
import backShortMenu from '@/components/blog_backstage/backShortMenu.vue';
import backSetting from '@/components/blog_backstage/backSetting.vue';

export default {
    components:{backHeader,backNavigation,backHideNavigation,backBottom,backShortMenu,backSetting},
    data(){
        return{
            skin:{
                "skin-default":false,
                "skin-deepblue":false,
                "skin-pink":false,
                "skin-green":false
            }
        }
    },
    computed:{
        ...mapState({ //获取用户信息
            userInfo:state=>state.User.userInfo,
        })
    },
    mounted:function(){

        bus.$on("setSkinColor",function(msg){ //监听皮肤
            if(this.skin.hasOwnProperty(msg)){
                console.log("当前肤色为"+this.skin['msg'])
                this.skin['msg']=true;
            }
        })
        //   ====================================
        console.log("info为"+JSON.stringify(this.userInfo))
        // if(!this.userInfo.id){ //如果未登录跳转到登陆页
        //   router.push({
        //     path: 'login'
        //   })
        // }
    },
    methods:{
        havigationShow:function(_event){ //显示导航栏
            bus.$emit("havigationShow",_event);
        },
        hideSetting(){ //隐藏设置组件
            this.$refs.backSetting.hideSetting(false);
        }
    }
}
</script>

<style>
    /*全局样式*/
    layui-layout {
        color: #444;
        background: #fbfbfb;
    }


    /* 分页字体颜色  详情页 */
    /* .layui-laypage a, .layui-laypage span,
    .layui-laypage button, .layui-laypage input {
        color: inherit;
    } */

    

    /*侧边导航 详情页*/
    .layui-layout-admin .layui-side {
        bottom: 44px;
        background: #393D49;
    }
    /*侧边导航END*/


    /*分页页容量样式*/ 
    /*可选*/
    /* .layui-laypage {
        display: block;
    } */

    /* 可选 
    .layui-laypage > * {
        float: left;
    }
    /*可选*/
    /* .layui-laypage .laypage-extend-pagesize {
        float: right;
    } */
    /*可选*/
    /* .layui-laypage:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }  */

    /*必须*/
    /* .layui-laypage .laypage-extend-pagesize {
        height: 30px;
        line-height: 30px;
        margin-left: 1px;
        border: none;
        font-weight: 400;
    } */
    /*分页页容量样式END*/

    /*全局弹出框皮肤*/
    .layui-layout .layer-css {
        box-shadow: 0 0 8px #fff;
    }

    .layui-layout .layer-css .layui-layer-title {
        text-align: center;
        background: #009688;
        color: #fff;
    }

    .layui-layout .layer-css .layui-layer-content {
        padding: 20px 50px 5px 0;
    }

    .layui-layout .layer-css-reply {
        box-shadow: 0 0 8px #fff;
    }

    .layui-layout .layer-css-reply .layui-layer-title {
        text-align: center;
        background: #009688;
        color: #fff;
    }

    .layui-layout .layer-css-reply .layui-layer-content {
        padding: 20px;
    }
    /*全局弹出框皮肤*/


    /*管家弹出框皮肤*/
    /* body .steward {
        top: auto !important;
        left: auto !important;
        bottom: 44px;
        right: 0px;
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        text-align: center;
        background-color: transparent;
    }

        body .steward .layui-layer-title {
            background: rgb(136,206,196);
            font-size: 16px;
            text-shadow: 0 0 6px #1E9FFF;
            color: #fff;
            padding: 0;
            cursor: default !important;
            border: none;
        }

        body .steward .layui-layer-content {
            background: rgb(245, 249, 250);
            color: rgb(135, 135, 135);
        }

        body .steward .layui-layer-content > p {
            height: 30px;
            line-height: 30px;
            margin: 10px 0;
        }

            body .steward .layui-layer-content > p > span {
                color: rgb(109, 109, 109);
                padding: 0 2px;
            }

            body .steward .layui-layer-content > p > a {
                color: #1E9FFF;
                padding: 0 5px;
            }

        body .steward .layui-layer-content .notnotice {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 5px 10px;
            cursor: pointer;
            background: rgb(236, 143, 151);
            font-size: 12px;
            color: azure;
        } */
    /*管家弹出框皮肤END*/

        


    /*粉红主题*/
    .skin-pink .layui-layout-admin .layui-header {
        background-color: #640b4a;
    }

    .skin-pink .sys-title {
        color: #fff;
        text-shadow: 0 0 8px #fff;
    }

    .skin-pink .layui-side,
    .skin-pink .layui-nav-tree {
        /*侧边导航背景*/
        background: #BC7AA6;
    }

    .skin-pink .layui-nav-tree .layui-nav-item a:hover {
        background: rgba(255, 255, 255, 0.20);
        color: #fff;
    }

    .skin-pink .layui-nav-tree .layui-this,
    .skin-pink .layui-nav-tree .layui-this > a,
    .skin-pink .layui-nav-tree .layui-this > a:hover,
    .skin-pink .layui-nav-tree .layui-nav-child dd.layui-this {
        /*导航选中*/
        background: #9b2979;
        color: #fff !important;
    }

    .skin-pink .layui-nav-itemed > a,
    .skin-pink .layui-nav-tree .layui-nav-title a,
    .skin-pink .layui-nav-tree .layui-nav-title a:hover {
        background: #640b4a !important;
        color: #fff !important;
    }

    .skin-pink .layui-nav-tree .layui-nav-bar {
        background: #9b2979;
    }

    .skin-pink .layui-nav .layui-nav-item a {
        color: #fff;
    }

    .skin-pink .layui-nav .layui-nav-more {
        border-color: #fff transparent transparent;
    }

    .skin-pink .layui-nav .layui-nav-mored,
    .skin-pink .layui-nav-itemed .layui-nav-more {
        border-color: transparent transparent #fff;
    }

    .skin-pink .layui-nav-tree .layui-nav-child a {
        color: #fff;
    }

    .skin-pink .layui-nav-tree .layui-nav-child,
    .skin-pink .layui-nav-tree .layui-nav-child a:hover {
        background: 0 0;
        color: #f7edee;
    }

    .skin-pink .layui-side-hide {
        background: #AF89C7;
        color: #fff;
    }

    /*粉红快捷菜单*/
    .skin-pink .windows-tile {
        background: #640b4a;
        color: #fff;
    }

    .skin-pink .layui-tab-brief > .layui-tab-title .layui-this {
        color: #640b4a;
    }

    .skin-pink .layui-tab-brief > .layui-tab-more li.layui-this:after,
    .skin-pink .layui-tab-brief > .layui-tab-title .layui-this:after {
        border-bottom: 3px solid #640b4a;
    }

    .skin-pink .layui-tab-title li.layui-this .layui-tab-close {
        /*Tab关闭按钮*/
        color: #640b4a;
    }

    .skin-pink .layui-laypage .layui-laypage-curr .layui-laypage-em {
        background-color: #640b4a;
    }

    .skin-pink .ht-nav .ht-nav-item:hover {
        background: #9b2979;
    }
    /*粉红主题End*/

    /*浅蓝主题*/
    body.skin-deepblue {
        /*color: #014b79 !important;*/
    }

    .skin-deepblue .layui-layout-admin .layui-header {
        /*头部背景*/
        background-color: #2f4f8e;
    }

    .skin-deepblue .sys-title {
        /*系统名称*/
        color: #fff;
        text-shadow: 0 0 8px #fff;
    }

    .skin-deepblue .layui-side,
    .skin-deepblue .layui-nav-tree {
        /*侧边导航背景*/
        background: #5b7bbb;
    }

    .skin-deepblue .layui-nav-tree .layui-nav-item a:hover {
        /*一级菜单悬浮背景*/
        background: rgba(255, 255, 255, 0.20);
        color: #fff;
    }

    .skin-deepblue .layui-nav-tree .layui-this,
    .skin-deepblue .layui-nav-tree .layui-this > a,
    .skin-deepblue .layui-nav-tree .layui-this > a:hover,
    .skin-deepblue .layui-nav-tree .layui-nav-child dd.layui-this {
        /*菜单选中背景*/
        background: #1e60ca;
        color: #fff !important;
    }

    .skin-deepblue .layui-nav-itemed > a,
    .skin-deepblue .layui-nav-tree .layui-nav-title a,
    .skin-deepblue .layui-nav-tree .layui-nav-title a:hover {
        /*一级菜单选中背景*/
        background: #2f4f8e !important;
        color: #fff !important;
    }

    .skin-deepblue .layui-nav-tree .layui-nav-bar {
        /*侧边导航左侧竖块*/
        background: #1e60ca;
    }

    .skin-deepblue .layui-nav .layui-nav-item a {
        /*导航一级菜单字体颜色*/
        color: #fff;
    }

    .skin-deepblue .layui-nav .layui-nav-more {
        border-color: #fff transparent transparent;
    }

    .skin-deepblue .layui-nav .layui-nav-mored,
    .skin-deepblue .layui-nav-itemed .layui-nav-more {
        border-color: transparent transparent #fff;
    }

    .skin-deepblue .layui-nav-tree .layui-nav-child a {
        /*导航二级菜单字体颜色*/
        color: #fff;
    }

    .skin-deepblue .layui-nav-tree .layui-nav-child,
    .skin-deepblue .layui-nav-tree .layui-nav-child a:hover {
        /*导航二级菜单悬浮字体颜色*/
        background: 0 0;
        color: #f7edee;
    }

    .skin-deepblue .layui-side-hide {
        /*收起导航样式*/
        background: #5A8B9E;
        color: #fff;
    }

    .skin-deepblue .windows-tile {
        /*快捷菜单*/
        background: #2f4f8e;
        color: #fff;
    }

    .skin-deepblue .layui-tab-brief > .layui-tab-title .layui-this {
        /*Tab*/
        color: #2f4f8e;
    }

    .skin-deepblue .layui-tab-brief > .layui-tab-more li.layui-this:after,
    .skin-deepblue .layui-tab-brief > .layui-tab-title .layui-this:after {
        /*Tab选中*/
        border-bottom: 3px solid #2f4f8e;
    }

    .skin-deepblue .layui-tab-title li.layui-this .layui-tab-close {
        /*Tab关闭按钮*/
        color: #2f4f8e;
    }

    .skin-deepblue .layui-laypage .layui-laypage-curr .layui-laypage-em {
        /*分页选中*/
        background-color: #2f4f8e;
    }

    .skin-deepblue .ht-nav .ht-nav-item:hover {
        /*顶部导航悬浮*/
        background: #1e60ca;
    }
    /*蓝色主题End*/

</style>
