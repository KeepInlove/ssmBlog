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
        <el-table :data="blogList" border style="width: 100%">
            <el-table-column type="index" label="#"></el-table-column>
<!--            <el-table-column prop="id" label="id" width="180"></el-table-column>-->
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="data" label="日期"></el-table-column>
            <el-table-column prop="lab.name" label="标签"></el-table-column>
            <el-table-column label="是否前台显示" prop="mg_state">
                <template slot-scope="scope">
              <el-switch @click.native.prevent="changeListType(scope.row.id)" disabled v-model="scope.row.mg_state"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit"  @click="edit (scope.row)"  circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.id)" circle></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    :current-page.sync="pageNum"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-size="list.size"
                    layout="total, prev, pager, next"
                    :total="list.total">
            </el-pagination>
        </div>
    </el-card>
</div>
</template>
<script>
    export default {
        name: "BlogList",
        data() {
            return {
                list:[],
                updateState: false,
                title: '',
                data: '',
                lab: '',
                blogList: [],
                blog_status: '',
                blog:'',
                pageNum:1,
                pageSize:5,    //    每页的数据
            }
        },
        created() {
            // this.blogCreate();
            // const that=this;
            this.blogPage();

        },
        mounted() {
        },
        methods: {
            //分页查询
            blogPage() {
               const that=this
                    that.$axios({
                        methods: 'get',
                        url:'findAllBlogByPage?'+'pageNum='+that.pageNum+
                            '&&pageSize='+that.pageSize,
                        }).then((res)=>{
                            // console.log(res.data.data.blogList)
                        that.list=res.data.data.blogList;
                        // console.log(that.list)
                        that.blogList=that.list.list
                        // console.log(that.blogList)
                        // console.log(that.list)
                        })
            },
            handleSizeChange(size) {
                this.pageSize= size;
                // this.blogPage();
                // console.log(this.pageSize)  //每页下拉显示数据
            },
            handleCurrentChange(currentPage){
                this.pageNum = currentPage;
                const that=this
                that.$axios({
                    methods: 'get',
                    url:'findAllBlogByPage?'+'pageNum='+that.pageNum+
                        '&&pageSize='+that.pageSize,
                }).then((res)=>{
                    // console.log(res.data.data.blogList)
                    that.blogList=res.data.data.blogList.list
                    // console.log(that.blogList)
                })
                // console.log(this.list.total)
                // console.log(this.pageNum)  //点击第几页
            },
            //修改文章状态
            changeListType (e) {
                this.$confirm('此操作将修改状态, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.get('updateStates/'+e).then((res)=>{
                      if (res.data.code==200){
                          this.$message({
                              type: 'success',
                              message: '修改成功!',
                          })
                          window.location.reload()
                      }else {
                          this.$message({
                              type: 'error',
                              message: '修改异常'
                          });
                      }
                    })
                    // console.log(result)确定
                    console.log("已修改")
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                    console.log("已取消")
                    // console.log(result)取消
                })
            },
            //获取博客列表
            // blogCreate() {
            //     const that = this;
            //     that.$axios.get('findAllBlog').then((res) => {
            //         // console.log(res.data)
            //         if (res.data.code==200){
            //         that.blogList = res.data.data.blogList;
            //         }else {
            //             that.blogList='暂无数据'
            //             // console.log(this.blogList);
            //         }
            //     })
            // },
            //修改博客
            edit(e){
                // console.log(e)
                let blog=JSON.stringify(e);
                // console.log(blog)
                this.$router.push({
                    // path: 'edit',
                    name:'edit',
                    params:{id:e.id,blog: blog},
                })
                // this.$router.push('/edit?id='+e)
            },
            //删除博客
            del(e){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'error'
                }).then(() => {
                    this.$axios.delete('deleteBlog/'+e).then((res)=>{
                        if (res.data.code==200){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            window.location.reload()
                        }else {
                            this.$message({
                                type: 'error',
                                message: '删除异常'
                            });
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        },
        computed: {
            // sortBlogList: function () {
            //     return sortByKey(this.blogList, 'id');
            // }
        },
    }
    /*倒叙排列
    以最新日期开始
    * */
    // function sortByKey(array,key){
    //     return array.sort(function(a,b){
    //         var x=a[key];
    //         var y=b[key];
    //         return ((x>y)?-1:((x<y)?1:0));
    //     });
    // }
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
