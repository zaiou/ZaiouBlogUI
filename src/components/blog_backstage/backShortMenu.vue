<template>
    <!--快捷菜单-->
    <div class="short-menu" style="display:none" v-show="flag">
        <fieldset class="layui-elem-field layui-field-title">
            <legend style="color:#fff;padding-top:10px;padding-bottom:10px;">快捷菜单</legend>
            <div class="layui-field-box">
                <div style="width:832px;margin:0 auto;">
                    <div class="windows-tile windows-two">
                        <i class="fa fa-file-text"></i>
                        <span data-url="datalist.html" data-id="1">文章管理</span>
                    </div>
                    <div class="windows-tile windows-one">
                        <i class="fa fa-volume-up"></i>
                        <span data-url="datalist.html" data-id="2">网站公告</span>
                    </div>
                    <div class="windows-tile windows-one">
                        <i class="fa fa-comments-o"></i>
                        <span data-url="datalist.html" data-id="3">留言管理</span>
                    </div>
                    <div class="windows-tile windows-two">
                        <i class="fa fa-handshake-o"></i>
                        <span data-url="datalist.html" data-id="4">友情链接</span>
                    </div>
                    <div class="windows-tile windows-one">
                        <i class="fa fa-arrow-circle-right"></i>
                        <span data-url="datalist.html" data-id="5">更新日志</span>
                    </div>
                    <div class="windows-tile windows-one">
                        <i class="fa fa-wrench"></i>
                        <span data-url="datalist.html" data-id="6">操作日志</span>
                    </div>
                    <div class="windows-tile windows-one">
                        <i class="fa fa-tags"></i>
                        <span data-url="datalist.html" data-id="7">资源管理</span>
                    </div>
                    <div class="windows-tile windows-one">
                        <i class="fa fa-pencil-square-o"></i>
                        <span data-url="datalist.html" data-id="8">笔记管理</span>
                    </div>
                    <div class="windows-tile windows-two">
                        <i class="fa fa-hourglass-half"></i>
                        <span data-url="datalist.html" data-id="9">时光轴管理</span>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
        </fieldset>

    </div>
</template>

<script>
    import bus from '@/emit/eventBus.js';

    export default {
        data(){
            return {
                flag:false,
            }
        },
        mounted:function(){
            var _this=this;
            bus.$on("showOrHide",function(msg){
                _this.flag=msg;
            })
        },
    }
</script>


<style scoped>
    /*Win10风格快捷菜单*/
    .short-menu {
        display: inline-block;
        padding: 10px 0;
        background: rgba(0, 0, 0, 0.60);
        position: fixed;
        z-index: 9999;
        text-align: center;
        width: 100%;
        padding: 0 15%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .windows-tile {
        float: left;
        margin: 2px;
        text-align: center;
        position: relative;
        background: #009688;
        color: #fff;
    }

    .windows-tile:hover {
        -moz-box-shadow: inset 0 0 0px 2px #ddd;
        -webkit-box-shadow: inset 0 0 0px 2px #ddd;
        box-shadow: inset 0 0 0px 2px #ddd;
    }

    .windows-tile i {
        font-size: 40px;
    }

    .windows-tile span {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 10px;
        line-height: normal;
    }

    .windows-one {
        width: 100px;
        height: 100px;
        line-height: 100px;
    }

    .windows-two {
        width: 204px;
        height: 100px;
        line-height: 100px;
    }
    /*Win10风格快捷菜单END*/
</style>

