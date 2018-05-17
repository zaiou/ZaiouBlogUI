<template>
    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">账号</label>
            <div class="layui-input-inline pm-login-input">
                <input type="text" v-model="user.username" lay-verify="account" placeholder="请输入账号" value="lyblogscn" autocomplete="off" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">密码</label>
            <div class="layui-input-inline pm-login-input">
                <input type="password" v-model="user.password" lay-verify="passWord" placeholder="请输入密码" value="111111" autocomplete="off" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item" style="margin-top:25px;margin-bottom:0;">
            <div class="layui-input-block">
                <div class="layui-btn" style="width:230px;" @click="handleSubmit(user)" lay-filter="login">立即登录</div>
            </div>
        </div>
    </form>
</template>

<script>

import Api from '@/api/index.js';
import router from '@/router/index.js';
import { mapState, mapActions } from 'vuex';

export default {
    data(){
       return {
           user:{
               username:'',
               password:''
           }
       }
    },
    mounted(){
        this.bindKeyWord();
    },
    methods:{
         ...mapActions(['storageUserData']),
        bindKeyWord:function(){ //enter键提交
            let _this = this;
            document.onkeydown = function(event){
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if(e && e.keyCode==13){ // enter 键
                    _this.handleSubmit(this.user);
                }
            }
        },
        handleSubmit:function(user){//确认登陆
            router.push({ //跳转到后台首页
                path: 'backstage'
            })
            // Api.get('admin/login', {
            //     username:this.user.username,
            //     password:this.user.password
            // }).then((e) => { 
            //     console.log("跳转到后台");
            //     if(e.code==0){
            //         this.storageUserData(); //设置用户信息到store
            //         router.push({ //跳转到后台首页
            //             path: 'backstage'
            //         })
            //     }
            // }) 
        }
    }
}
</script>

<style scoped>
    .pm-login-input {
        width: 280px !important;
    }
    .layui-input-block{
        margin-left: 80px;
    }
</style>


