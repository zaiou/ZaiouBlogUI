<template>
    <!--个性化设置-->
    <div class="individuation animated " :class="controlShow" v-show="setShow" @click="showSetting($event)">
        <ul>
            <li><i class="fa fa-cog" style="padding-right:5px"></i>个性化</li>
        </ul>
        <div class="explain">
            <small>从这里进行系统设置和主题预览</small>
        </div>
        <div class="setting-title">设置</div>
        <div class="setting-item layui-form">
            <span>侧边导航</span>
            <input type="checkbox" lay-skin="switch" lay-filter="sidenav" lay-text="ON|OFF" checked>
        </div>
        <div class="setting-item layui-form">
            <span>管家提醒</span>
            <input type="checkbox" lay-skin="switch" lay-filter="steward" lay-text="ON|OFF" checked>
        </div>
        <div class="setting-title">主题</div>
        <div class="setting-item skin skin-default" data-skin="skin-default" @click="setSkinColor('skin-default')">
            <span>低调优雅</span>
        </div>
        <div class="setting-item skin skin-deepblue" data-skin="skin-deepblue" @click="setSkinColor('skin-deepblue')">
            <span>蓝色梦幻</span>
        </div>
        <div class="setting-item skin skin-pink" data-skin="skin-pink" @click="setSkinColor('skin-pink')">
            <span>姹紫嫣红</span>
        </div>
        <div class="setting-item skin skin-green" data-skin="skin-green" @click="setSkinColor('skin-green')">
            <span>一碧千里</span>
        </div>
    </div>
</template>

<script>
    import bus from '@/emit/eventBus.js';

    export default {
        data(){
            return {
                setShow:false,
                controlShow:{
                    flipOutY:true,
                    bounceInRight:false,
                }
            }
        },
        mounted:function(){
            var _this=this;
            bus.$on("showSetting",function(msg,_event){ //显示设置组件
                _event.stopPropagation();    //阻止事件冒泡
                _this.setShow=msg;
                _this.controlShow.flipOutY=false;
                _this.controlShow.bounceInRight=true;
            });
        },
        methods:{
            setSkinColor:function(skin){//设置页面皮肤
                bus.$emit("setSkinColor",skin);
            },
            hideSetting:function(msg){//隐藏设置组件
                this.setShow=msg;
                this.controlShow.flipOutY=true;
                this.controlShow.bounceInRight=false;
            },
            showSetting:function(_event){//显示设置组件
                _event.stopPropagation();    //阻止事件冒泡
                this.setShow=true;
                this.controlShow.flipOutY=false;
                this.controlShow.bounceInRight=true;
            }
        }
    }
</script>


<style scoped>
    /*个性化*/
    .individuation {
        width: 249px;
        border-left: 1px solid #ddd;
        position: fixed;
        bottom: 44px;
        top: 60px;
        right: 0;
        background: rgba(255, 255, 255, 0.80);
        z-index: 999;
    }

    .individuation > ul {
        height: 45px;
    }

    .individuation > ul > li {
        display: inline-block;
        line-height: 45px;
        padding: 0 10px;
        background: rgba(242, 242, 242, 0.90);
    }

.individuation > .explain {
    padding: 20px;
    background: rgba(242, 242, 242, 0.90);
    text-align: center;
}

.individuation .setting-title {
    background: #e2e2e2;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    padding: 10px 15px;
    font-size: 13px;
}

.individuation .setting-item {
    padding: 10px 20px;
    border-bottom: 1px solid #e7eaec;
    background: #fff;
}

    .individuation .setting-item:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .individuation .setting-item span {
        font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
        color: #676a6c;
        line-height: 21px;
    }
    /*改装Layui开关*/
    .individuation .layui-form-switch {
        margin: 0;
        float: right;
        height: 18px;
        line-height: 18px;
        border-radius: 0;
    }

        .individuation .layui-form-switch i {
            top: 1px;
            border-radius: 0;
            left: 2px;
        }

    .individuation .layui-form-onswitch i {
        left: 35px;
    }

    /*皮肤控制*/
    .individuation .skin,
    .individuation .skin span {
        font-weight: 600;
        text-align: center;
        color: #fff;
        border: none;
        cursor: default;
        padding: 15px 20px;
    }

    .individuation .skin:hover {
        opacity: .7;
    }

    .individuation .skin-deepblue {
        background: #2f4f8e;
    }

    .individuation .skin-default {
        background: #23262E;
    }

    .individuation .skin-pink {
        background: #640b4a;
    }

    .individuation .skin-green {
        background: #009688;
    }
    /*个性化END*/
</style>

