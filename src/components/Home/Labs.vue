<template>
    <div>
        <div>
            <el-dialog title="文章" :visible.sync="blogs">
                <el-table :data="blogList">
                    <el-table-column  label="#" type="index" width="10"></el-table-column>
                    <el-table-column  label="标题" width="200"></el-table-column>
                    <el-table-column  label="时间" width="200"></el-table-column>
                    <el-table-column  label="内容" width="200"></el-table-column>
                    <el-table-column  label="操作" width="200">
                    </el-table-column>
                </el-table>
            </el-dialog>
        </div>
        <el-dialog title="添加标签" :visible.sync="add" width="400px">
            <el-form>
                <el-form-item label="标签名字" :label-width="formLabelWidth" >
                    <el-input v-model="name"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="add = false">取 消</el-button>
                <el-button type="primary" @click="add = false,addLab()">确 定</el-button>
            </div>
        </el-dialog>
        <span>
            标签管理
        </span>
        <el-card style="margin-top: 15px">
            <el-button type="primary" style="float: right" @click="add=true" >添加</el-button>
            <el-table :data="labList">
                <el-table-column label="#" type="index"></el-table-column>
                <el-table-column prop="name" label="类别" ></el-table-column>
                <el-table-column prop="count" label="篇数" ></el-table-column>
                <el-table-column label="是否前台显示">
                    <template slot-scope="scope">
                        <el-switch  v-model="scope.row.stu"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-view"  @click="blogs=true" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete"  circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Labs",
        data(){
            return{
                add:false,
                names:[],
                labList:[],
                formLabelWidth: '100px',
                name:'',
                blogs:false,
                blogList:[]
            }
        },
        created() {
            this.getLabs();
        },
        mounted() {
        },
        methods:{
            getLabs(){
                const that=this;
                that.$axios.get('findAllLab').then((res)=>{
                    // console.log(res.data.data.labList);
                    that.labList=res.data.data.labList;
                    // console.log(that.labList)
                    that.labList.forEach(function (e) {
                        // name+="'"+e.name+"',";
                        // console.log(name)
                        that.names.push(e.name);
                        // console.log(that.name)
                    })
                });
            },
            addLab(){
                const  that=this;
                // console.log(this.names)
               const a=this.names.indexOf(this.name);
                if (a>-1){
                    console.log('已存在,无法添加');
                    that.$message({
                        type:'warning',
                        message:'已存在,无法添加',
                    })
                    // console.log(that.name);
                }else {
                    that.$axios({
                        url:'addLab',
                        method:'post',
                        data:{
                            'name':that.name
                        },
                    }).then((res)=>{
                        if (res.data.code==200){
                            that.$message({
                                type:"success",
                                message:"添加成功"
                            })
                            window.location.reload();
                        }
                        // console.log(res.data)
                    })
                    // console.log(that.name)
                }
                // console.log(a)
            },
            seeList(e){
                const  that=this;
                console.log(e);
                // that.$axios({
                //     url:'selectBlogByLabName/'+e,
                //     method: 'get'
                // }).then((res)=>{
                //     console.log(res.data.data);
                // })
            }
        },
        }

</script>

<style scoped>

</style>
