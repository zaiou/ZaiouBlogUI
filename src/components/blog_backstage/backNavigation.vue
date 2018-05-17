<template>
    <!-- 侧边导航 -->
    <el-row class="tac container">
        <el-col :span="12" class="side-scroll">
            <el-menu
                default-active="0"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="0">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="1" class="el-submenu-item">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>内容管理</span>
                    </template>
                    <el-menu-item index="1-1" @click="articleManage()">文章管理</el-menu-item>
                    <el-menu-item index="1-2">资源管理</el-menu-item>
                    <el-menu-item index="1-3">时光轴管理</el-menu-item>
                    <el-menu-item index="1-4">笔记本管理</el-menu-item>
                    <el-menu-item index="1-5">文章回收站</el-menu-item>
                    <el-menu-item index="1-6">资源回收站</el-menu-item>
                </el-submenu>
                <el-submenu index="2" class="el-submenu-item">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="2-1">全部用户</el-menu-item>
                    <el-menu-item index="2-2">黑名单管理</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
    <!-- <div class="layui-side">
        <div class="layui-side-scroll">
            <ul class="layui-nav layui-nav-tree" lay-filter="leftnav">
                <li class="layui-nav-item layui-this">
                    <a href="javascript:;"><i class="fa fa-home"></i>首页</a>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;"><i class="fa fa-file-text"></i>内容管理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="1">文章管理</a></dd>
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="2">资源管理</a></dd>
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="3">时光轴管理</a></dd>
                        <dd><a href="javascript:;">笔记本管理</a></dd>
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="4">文章回收站</a></dd>
                        <dd><a href="javascript:;">资源回收站</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;"><i class="fa fa-user"></i>用户管理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;">全部用户</a></dd>
                        <dd><a href="javascript:;">黑名单管理</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;"><i class="fa fa-wrench"></i>扩展管理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;">友情链接</a></dd>
                        <dd><a href="javascript:;">博主信息</a></dd>
                        <dd><a href="javascript:;">网站信息</a></dd>
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="5">网站公告</a></dd>
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="6">更新日志</a></dd>
                        <dd><a href="javascript:;" data-url="datalist.html" data-id="7">留言管理</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;"><i class="fa fa-cog"></i>系统配置</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;">SEO配置</a></dd>
                        <dd><a href="javascript:;">QQ互联</a></dd>
                        <dd><a href="javascript:;">数据库配置</a></dd>
                        <dd><a href="javascript:;">站点地图</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;"><i class="fa fa-info-circle"></i>其他信息</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;">操作日志</a></dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div> -->
</template>

<script>
    import bus from '@/emit/eventBus.js';
    import router from '@/router/index.js';

    export default {
        data(){
            return {
                ishide:false,
            }
        },
        mounted:function(){
            var _this=this;
            bus.$on("havigationHide",function(msg){
                if (!_this.ishide) {
                    $('.container').animate({ left: '-200px' });
                    $('.layui-side-hide').animate({ left: '-200px' });
                    $('.layui-body').animate({ left: '0px' });
                    $('.layui-footer').animate({ left: '0px' });
                    var tishi = layer.msg('鼠标靠左自动显示菜单', { time: 1500 });
                    layer.style(tishi, {
                        top: 'auto',
                        bottom: '50px'
                    });
                    _this.ishide = true;
                }
            });
            bus.$on("havigationShow",function(msg){
                if(_this.ishide && msg.pageX==0){
                    $('.container').animate({ left: '0px' });
                    $('.layui-side-hide').animate({ left: '0px' });
                    $('.layui-body').animate({ left: '200px' });
                    $('.layui-footer').animate({ left: '200px' });
                    _this.ishide = false;
                }
            });
        },
        methods:{
            articleManage(){ //进入文章管理
                router.push({ 
                    path: '/backstage/details'
                })
            }
        }
    }
</script>


<style scoped>
    .container{
        bottom: 44px;
        background: #393D49;
        top: 60px;
        width: 200px;
        overflow-x: hidden;
        position: fixed;
        z-index: 999;
    }
    .side-scroll{
        width: 200px;
        height: 100%;
        overflow-x: hidden;
    }
   .el-menu-vertical-demo{
       width: 200px;
        padding: 0;
        position: relative;
        padding: 0 20px;
        background-color: #393D49;
        color: #c2c2c2;
        border-radius: 2px;
        font-size: 0;
        box-sizing: border-box!important;
   }
   .el-submenu-item{
        display: block;
        width: 100%;
        line-height: 45px;
        font-size: 14px;
   }
</style>

