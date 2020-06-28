<template>
    <div>
        <span>日志管理</span>
    <el-card style="margin-top: 15px">
        <el-table :data="logList" border style="width: 100%">
            <el-table-column  type="index" label="#"></el-table-column>
            <el-table-column prop="username" label="昵称"></el-table-column>
            <el-table-column prop="ip" label="ip"></el-table-column>
            <el-table-column prop="city"  label="地址"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" @click="deletMsg(scope.row.id)" circle></el-button>
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
        name: "Logs",
        data(){
            return{
                list:[],
                logList:[],
                pageNum:1,
                pageSize:5,
            }
        },
        created() {
            this.getLog();
        },
        methods:{
            getLog(){
                const that=this;
                that.$axios({
                    url:'findAllLogPage?'+'pageNum='+that.pageNum+
                        '&&pageSize='+that.pageSize,
                    method:'get',
                }).then((res)=>{
                    // console.log(res.data.data.pageInfo)
                    that.list=res.data.data.pageInfo;
                    // console.log(that.list)
                    that.logList=that.list.list;
                    // console.log(that.logList)
                })
            },
            handleSizeChange(size) {
                this.pageSize= size;
                // console.log(this.pageSize)  //每页下拉显示数据
            },
            handleCurrentChange(currentPage){
                this.pageNum = currentPage;
                const that=this
                that.$axios({
                    methods: 'get',
                    url:'findAllLogPage?'+'pageNum='+that.pageNum+
                        '&&pageSize='+that.pageSize,
                }).then((res)=>{
                    // console.log(res.data.data.pageInfo)
                    that.logList=res.data.data.pageInfo.list;
                    // console.log(that.logList)
                })
                // console.log(this.list.total)
                // console.log(this.pageNum)  //点击第几页
            },
            deletMsg(e){
                console.log(e);
                this.$axios.delete('delete/'+e).then((res)=>{
                    // console.log(res);
                    if (res.data.code==200){
                        this.$message.success({
                            type:'success',
                            message:'删除成功',
                        });
                    }else {
                        this.$message.success({
                            type:'error',
                            message:'删除失败'
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>
