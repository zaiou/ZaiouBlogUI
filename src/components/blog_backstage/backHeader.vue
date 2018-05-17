<template>
    <!--顶部-->
    <div class="layui-header">
        <div class="ht-console">
            <div class="ht-user">
                <img src="../../assets/images/Logo_40.png" />
                <a class="ht-user-name">超级管理员</a>
            </div>
        </div>
        <span class="sys-title" @click="shortMenuShowOrHide()">zaiou后台管理系统</span>
        <ul class="ht-nav">
            <li class="ht-nav-item">
                <a target="_blank" href="javascript:;">前台入口</a>
            </li>
            <li class="ht-nav-item" @click="showSetting($event)">
                <a href="javascript:;" id="individuation"><i class="fa fa-tasks fa-fw" style="padding-right:5px;"></i>个性化</a>
            </li>
            <li class="ht-nav-item">
                <a href="javascript:;"><i class="fa fa-power-off fa-fw"></i>注销</a>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from '@/emit/eventBus.js';

export default {
  data(){
      return ({
        menuShowOrHide:false,
        setShow:false,
      })
  },
  methods:{
      shortMenuShowOrHide:function(){//快捷菜单的显示和隐藏
        bus.$emit("showOrHide",!this.menuShowOrHide);
        this.menuShowOrHide=!this.menuShowOrHide;
      },
      showSetting:function(_event){//显示设置
        bus.$emit("showSetting",!this.setShow,_event);
      }
  }
}
</script>


<style scoped>
    .layui-header {
        text-align: center;
        box-sizing: border-box;
    }

    .layui-header .ht-console {
        height: 60px;
        width: 200px;
        float: left;
        text-align: initial;
    }

    .layui-header .ht-console .ht-user {
        padding: 5px 15px;
        height: 60px;
        box-sizing: border-box;
    }

    .layui-header .ht-console .ht-user img {
        width: 45px;
        height: 45px;
        margin-top: 2px;
        -moz-box-shadow: 0 0 8px #fff;
        -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        border-radius: 50px;
        float: left;
    }

    .layui-header .ht-console .ht-user a {
        color: #fff;
    }

    .layui-header .ht-console .ht-user .ht-user-name {
        display: block;
        margin-top: 12px;
        margin-left: 60px;
        height: 20px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
    }



    .layui-header > .layui-nav {
        position: absolute;
        right: 0;
        top: 0;
        background: none;
    }

    .sys-title {
        display: inline-block;
        line-height: 60px;
        color: #fff;
        text-shadow: 0 0 8px #1E9FFF,0 0 8px #009688;
        font-size: 26px;
        letter-spacing: 6px;
        cursor: pointer;
    }

    .sys-list-field {
        display: none;
        margin-bottom: 0px;
    }

    .sys-list-field .layui-field-box {
        padding-bottom: 0;
    }

    /*顶部导航*/
    .ht-nav {
        position: absolute;
        right: 0;
        top: 0;
        background: none;
        box-sizing: border-box !important;
        color: white;
    }

    .ht-nav .ht-nav-item {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 60px;
    }

    .ht-nav .ht-nav-item:hover {
        background: #444;
    }

    .ht-nav .ht-nav-item:last-child {
        margin-right: 30px;
    }

    .ht-nav .ht-nav-item a {
        display: block;
        color: #FFF;
        padding: 0 10px;
    }
    /*顶部导航END*/
    
</style>

