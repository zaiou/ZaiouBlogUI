<template>
    <!--收起导航-->
    <div class="layui-side-hide layui-bg-cyan" @click="hideHavigation()">
        <i class="fa fa-long-arrow-left fa-fw"></i>收起导航
    </div>
</template>

<script>
import bus from '@/emit/eventBus.js';

export default {
  data(){
      return({
       
      })
  },
  methods:{
    hideHavigation:function(){ //收起侧边导航
        bus.$emit("havigationHide","收起侧边导航");
    }
      
  }
}
</script>


<style scoped>
    .layui-side-hide {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 44px;
        width: 200px;
        color: #eee;
        line-height: 44px;
        text-align: center;
        cursor: pointer;
    }
</style>

