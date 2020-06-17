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
        <el-table :data="sortBlogList" border style="width: 100%">
            <el-table-column type="index" label="#"></el-table-column>
<!--            <el-table-column prop="id" label="id" width="180"></el-table-column>-->
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="data" label="日期"></el-table-column>
            <el-table-column prop="lab.name" label="标签"></el-table-column>
            <el-table-column label="状态" prop="mg_state">
                <template slot-scope="scope">
                    <el-switch  @change='updataState(scope.row.id)' v-model="scope.row.mg_state"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit"  @click="edit (scope.row.id)"  circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
                   <!-- @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"-->
            <el-pagination
                    :page-size="2"
                    layout="total, prev, pager, next"
                    :total="blogList.length">
            </el-pagination>
        </div>
    </el-card>
<!--    <router-view></router-view>-->
</div>
</template>
<script>
    export default {
        name: "BlogList",
        data() {
            return {
                title: '',
                data: '',
                lab: '',
                blogList: [],
                blog_status: ''
            }
        },
        created() {
            this.blogCreate();
            // const that=this;
        },
        mounted() {

        },
        methods: {
            // getDetails (row) {
            //   console.log(row.date)// 此时就能拿到整行的信息
            // },
            blogCreate() {
                const that = this;
                that.$axios.get('findAllBlog').then((res) => {
                    // console.log(res.data)
                    if (res.data.code==200){
                    that.blogList = res.data.data.blogList;
                    }else {
                        that.blogList='暂无数据'
                        // console.log(this.blogList);
                    }
                })
            },
            updataState(e){
               console.log(e);
            },
            edit(e){
                console.log(e)
                // this.$router.push({
                //    path: '/edit',
                //     query: {
                //         picID: row.id
                //     }
                // })
            }
        },
        computed: {
            sortBlogList: function () {
                return sortByKey(this.blogList, 'id');
            }
        },
    }
    /*倒叙排列
    以最新日期开始
    * */
    function sortByKey(array,key){
        return array.sort(function(a,b){
            var x=a[key];
            var y=b[key];
            return ((x>y)?-1:((x<y)?1:0));
        });
    }
</script>
<style scoped lang="less">
    .el-table{
        margin-top: 20px;
    }
    .block{
        float: right;
        margin-top: 10px;
    }
</style>
