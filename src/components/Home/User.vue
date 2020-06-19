<template>
    <div>
        <!--面包屑导航-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>信息管理</el-breadcrumb-item>
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="main_table">
            <div class="tables">
                <!--信息表-->
            <table class="table_user"  style="border-collapse: collapse;" >
                <tr>
                    <td>头像:</td>
                    <td><img src="../../static/1.jpg" width="80px" height="80px" style="border-radius: 40px"></td>
                </tr>
                <tr v-for="(u,i) in form " :key="i">
                    <td>{{u}}</td>
                    <td>{{value[i]}}</td>
                </tr>
           </table>
            <el-button type="success" @click="dialogFormVisible = true">修改</el-button>
            </div>
            <el-card class="task">
                <el-row>
                    <el-col :span="20">
                        <el-tag type="success" style="float: right">任务清单</el-tag>
                    </el-col>
                </el-row>
            <el-table  :data="taskList"  border style="width: 100%">
                <el-table-column type="index" label="#"></el-table-column>
                <el-table-column  label="时间" prop="time"></el-table-column>
                <el-table-column  label="事件" prop="task"></el-table-column>
                <el-table-column  label="状态">
                    <el-switch></el-switch>
                </el-table-column>
            </el-table>
                <div class="block" style="float: right">
                    <el-pagination
                            layout="prev, pager, next"
                            :total="50">
                    </el-pagination>
                </div>
            </el-card>
            <el-dialog title="个人信息" :visible.sync="dialogFormVisible" width="500px">
                <el-form :model="user">
                    <el-form-item label="头像" :label-width="formLabelWidth" >
                       <img src="../../static/1.jpg" width="80px" height="80px" style="border-radius: 40px">
                    </el-form-item>
<!--                    <el-form-item :label="u" :label-width="formLabelWidth" v-for="(u,i) in form " :key="i">-->
<!--                        <el-input :value="value[i]" v-model="value[i]"></el-input>-->
<!--                    </el-form-item>-->
                    <el-form-item :label="form[0]" :label-width="formLabelWidth">
                        <el-input :value="user.name" v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item :label="form[1]" :label-width="formLabelWidth">
                        <el-input :value="user.work" v-model="user.work"></el-input>
                    </el-form-item>
                    <el-form-item :label="form[2]" :label-width="formLabelWidth">
                        <el-input :value="user.address" v-model="user.address"></el-input>
                    </el-form-item>
                    <el-form-item :label="form[3]" :label-width="formLabelWidth">
                        <el-input :value="user.qq" v-model="user.qq"></el-input>
                    </el-form-item>
                    <el-form-item :label="form[4]" :label-width="formLabelWidth">
                        <el-input :value="user.wechar" v-model="user.wechar"></el-input>
                    </el-form-item>
                    <el-form-item :label="form[6]" :label-width="formLabelWidth">
                        <el-input :value="user.email" v-model="user.email"></el-input>
                    </el-form-item>
                    <el-form-item :label="form[5]" :label-width="formLabelWidth">
                        <el-input :value="user.github" v-model="user.github"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false,updateUser()">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                user:'',
                value:[],
                taskList:[
                    {time:'2020-06-19',task:'写一篇什么文章'},
                    {time:'2020-06-19',task:'写一篇什么文章'},
                    {time:'2020-06-19',task:'写一篇什么文章'}
                ],
                form: [ '昵称:', '工作:', '地址:', 'qq:', '微信:', 'github:','邮箱:'],
                dialogFormVisible: false,
                formLabelWidth: '120px',
                u:{
                   'name':'',

                }

            }
        },
        mounted() {
            this.getData();
            // console.log(this.value);
        },
        methods:{
            //获取个人信息
            getData(){
                const that=this
                this.$axios.get('findData').then((res)=>{
                    // console.log(res.data.code);
                    if (res.data.code==200){
                        that.user=res.data.data.user;
                        // console.log(that.user)
                        that.value=Object.values(that.user)
                        console.log(that.value)
                    }else {
                        this.$message({
                            type: 'warning',
                            message: '删除异常'
                        });
                    }
                }).catch(reason => console.log(reason))
            },
            // 发送更新请求
            updateUser(){
                const that=this;
                console.log(that.$router);
                that.$axios.put('updateData',that.user).then((res)=>{
                    console.log(res);
                })
                console.log(that.user)
            }
        }
    }
</script>

<style scoped lang="less">
    .main_table{
        display: flex;
        flex-direction: row;
        .task{
            margin-top: 20px;
            width: 60%;
            padding: 20px;
        }
    }
.tables{
    width: 40%;
    height: 600px;
    text-align: center;
    .table_user{
        width: 100%;
        height: 580px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #ffffff;
    }
}
</style>
