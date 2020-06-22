<template>
    <div>
       <span>评论管理</span>
        <el-card>
            <el-table :data="msgList" border style="width: 100%">
                <el-table-column  type="index" label="#"></el-table-column>
                <el-table-column prop="name" label="昵称"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="content"  label="内容"></el-table-column>
                <el-table-column prop="time" label="时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" icon="el-icon-delete" @click="deleteMsg(scope.row.id)" circle></el-button>
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
        name: "Messages",
        data(){
            return{
                list:[],
                msgList:[],
                pageNum:1,
                pageSize:5,
            }
        },
        created() {
            this.getMsg();
        },
        methods:{
            getMsg(){
                const that=this;
                that.$axios({
                    method:'get',
                    url:'findAllMsgByPage?'+'pageNum='+that.pageNum+
                    '&&pageSize='+that.pageSize,
                }).then((res)=>{
                    // console.log(res.data)
                    that.list=res.data.data.msgList;
                    // console.log(that.list)
                    that.msgList=that.list.list;
                    // console.log(that.msgList)
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
                    url:'findAllMsgByPage?'+'pageNum='+that.pageNum+
                        '&&pageSize='+that.pageSize,
                }).then((res)=>{
                    // console.log(res.data.data.blogList)
                    that.msgList=res.data.data.msgList.list
                    // console.log(that.blogList)
                })
                // console.log(this.list.total)
                // console.log(this.pageNum)  //点击第几页
            },
            deleteMsg(e){
                this.$confirm('此操作将永久删除该留言, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'error'
                }).then(() => {
                    this.$axios.delete('deleteMsg/'+e).then((res)=>{
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
            }
        }
    }
</script>

<style scoped lang="less">
    .el-card{
        margin-top: 15px;
    }
    .el-table{
        margin-top: 20px;
    }
</style>
