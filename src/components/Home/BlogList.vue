<template>
<div>
    <!--面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>博客列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <!--搜索区域-->
        <el-row :gutter="20">
            <form>
            <el-col :span="5">
                <el-input placeholder="请输入标题" v-model="title"/>
            </el-col>
            <el-col :span="5">
                <el-input placeholder="请输入日期" v-model="data"/>
            </el-col>
            <el-col :span="5">
                <el-input placeholder="请输入标签" v-model="lab"/>
            </el-col>
            <el-col :span="4"></el-col>
            <el-button type="submit">搜索</el-button>
            </form>
        </el-row>
        <!--列表-->
        <el-table :data="bolgList" border style="width: 100%">
            <el-table-column type="index" label="#"></el-table-column>
<!--            <el-table-column prop="id" label="id" width="180"></el-table-column>-->
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="data" label="日期"></el-table-column>
            <el-table-column prop="lab" label="标签"></el-table-column>
            <el-table-column label="状态">
                <template v-slot="scope">
                    <el-switch v-model="scope.row.state"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</div>
</template>
<script>
    export default {
        name: "BlogList",
        data(){
            return{
                title:'',
                data:'',
                lab:'',
                bolgList:[
                    {
                        id:'1',
                        title:'j',
                        data:'2',
                        lab:'j',
                        state: false,
                    },
                    {
                        id:'2',
                        title:'j',
                        data:'2',
                        lab:'j',
                        state: true,
                    }
                ]
            }
        },
        created() {
            this.blogCreate()
        },
        methods:{
           async blogCreate(){
            const {data: res}=await this.$axios.get('bolgList')
               console.log(res)
            }
        },

    }
</script>
<style scoped lang="less">
    .el-table{
        margin-top: 20px;
    }
</style>
