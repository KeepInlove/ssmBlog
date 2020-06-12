<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>博客管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加博客</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "AddBlog"
    }
</script>

<style scoped>

</style>
