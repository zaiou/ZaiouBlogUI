<template>
    <div class="login">
        <div class="mask">
            <div class="main">
                <h1><span style="font-size: 84px;">Z</span><span style="font-size:30px;">iou</span></h1>
                <p id="time"></p>
                <div class="enter" @click="loginForm=true">
                    Please&nbsp;&nbsp;Click&nbsp;&nbsp;Enter
                </div>
            </div>
        </div>
        <transition name="slide-fade">
            <div class="loginform" v-if="loginForm">
                <loginForm></loginForm>
            </div>
        </transition>
    </div>
</template>

<script>
import loginForm from '@/components/blog_backstage/loginForm.vue';

export default {
    components:{loginForm},
    data(){
        return{
            loginForm:false
        }
    },
    methods:{
        
    }
}
</script>


<style scoped>
    .login {
        background-image: url(../../assets/images/backstage/background.jpg);
        height: 100vh;
        background-size: cover;
        position: relative;
        background-color: #f2f2f2;
    }

    .mask {
        height: 100vh;
        width: 100%;
        background-color: black;
        opacity: .5;
        position: absolute;
    }

    .main {
        background-color: transparent;
        text-align: center;
        position: absolute;
        top: 15%;
        height: 70%;
        width: 100%;
        color: white;
    }

        .main h1 {
            text-align: center;
            font-style: italic;
            font-family: 'Microsoft YaHei';
            text-shadow: 0 0 8px #00f7ff;
        }

        .main p {
            text-align: center;
            padding: 20px 0;
            margin: 20px 0;
            font-size: 30px;
        }

    .enter {
        background: rgba(255, 255, 255, 0.10);
        text-align: center;
        font-size: 40px;
        padding: 15px 0;
    }
    
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
    .loginform{
        position: absolute;
        border: 1px solid #ddd;
        width: 480px;
        height:270px;
        top: 250px; 
        left: 520px;
        box-shadow: 0 0 10px #00ffff;
        border-radius: 5px;
        background: #fff;
    }
    .loginform>form{
        padding: 50px 35px;
    }
    .layui-input-block{
        margin-left: 60px;
    }
</style>

