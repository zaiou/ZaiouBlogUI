<template>
    <fieldset id="dataList" class="layui-elem-field layui-field-title sys-list-field" style="margin-left:20px">
        <legend style="text-align:center;">文章列表</legend>
        <div class="layui-field-box">
            <div id="dataContent" class="">
                <!--内容区域 ajax获取-->
                <table style="" class="layui-table" lay-even="">
                    <colgroup>
                        <col width="180">
                        <col>
                        <col width="150">
                        <col width="180">
                        <col width="90">
                        <col width="90">
                        <col width="50">
                        <col width="50">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>发表时间</th>
                            <th>标题</th>
                            <th>作者</th>
                            <th>类别</th>
                            <th colspan="2">选项</th>
                            <th colspan="2">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2017-03-22 23:07</td>
                            <td>不落阁后台模板源码分享</td>
                            <td>Absolutely</td>
                            <td>Web前端</td>
                            <td>
                                <form class="layui-form" action="">
                                    <div class="layui-form-item" style="margin:0;">
                                        <input type="checkbox" name="top" title="置顶" lay-filter="top" checked>
                                    </div>
                                </form>
                            </td>
                            <td>
                                <form class="layui-form" action="">
                                    <div class="layui-form-item" style="margin:0;">
                                        <input type="checkbox" name="top" title="推荐" lay-filter="recommend" checked>
                                    </div>
                                </form>
                            </td>
                            <td>
                                <button class="layui-btn layui-btn-small layui-btn-normal"><i class="layui-icon">&#xe642;</i></button>
                            </td>
                            <td>
                                <button class="layui-btn layui-btn-small layui-btn-danger"><i class="layui-icon">&#xe640;</i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="pageNav"></div>
            </div>
        </div>
    </fieldset>
</template>
