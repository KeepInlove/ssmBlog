<template>
<div>
    <!--面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>博客列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">

        <el-row>
            <el-col :span="6">
                <el-input placeholder="请输入内容">
                    <el-button slot="append" icon="el-icon-search"/>
                </el-input>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </el-card>


</div>
</template>

<script>
    export default {
        name: "BlogList"
    }
</script>

<style scoped lang="less">
.box-card{
box-shadow: 0 1px 1px rgb(0,0,0,0.1);
}
</style>
