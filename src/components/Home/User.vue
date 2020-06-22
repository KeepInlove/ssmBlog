<template>
    <div style="background-color: #ffffff;">
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
        <!--面包屑导航-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>信息管理</el-breadcrumb-item>
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user">
            <div class="main_table">
                <div class="tables">
                    <span style="margin-right: 100px">基本信息</span>
                    <table class="table_user"  style="border-collapse: collapse;" >
                    <tr>
                        <td>头像:</td>
                        <td><img src="../../static/2.jpg" width="80px" height="80px" style="border-radius: 40px"></td>
                    </tr>
                    <tr v-for="(u,i) in form " :key="i">
                        <td>{{u}}</td>
                        <td>{{value[i]}}</td>
                    </tr>
                    </table>
                    <el-button type="success" @click="dialogFormVisible = true">修改</el-button>
                </div>
            </div>
            <div class="user_skills" style="margin-top: 20px">
                <el-table :data="skills" >
                    <el-table-column label="#" type="index"></el-table-column>
                    <el-table-column label="专业技能" prop="data"></el-table-column>
                </el-table>
            </div>
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
                form: [ '昵称:', '工作:', '地址:', 'qq:', '微信:', 'github:','邮箱:'],
                dialogFormVisible: false,
                formLabelWidth: '120px',
                skills:[
                    {'data': '熟练HTML、CSS、JavaScript、jQuery、AJAX等WEB前端技术'},
                    {'data':'有一定的HTML5和CSS3编码基础'},
                    {'data':'熟悉vue,Bootstrap,element-ui等前端框架'},
                    {'data':'熟练第三方支付、登录等功能开发'},
                    {'data':'熟练应用JAVA、MySQL技术'},
                    {'data':'熟练使用REST ful API接口的开发'},
                    {'data':'熟练使用微信小程序,uni-app'},
                    {'data':'熟悉面向对象编程及MVC设计模式'},
                    {'data':'了解MVVM设计模式'},
                    ]
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
                        // console.log(that.value)
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
                // console.log(that.$router);
                that.$axios.put('updateData',that.user).then((res)=>{
                    if (res.data.code==200){
                        that.$message.success("修改成功");
                        window.location.reload();
                    }

                })
                // console.log(that.user)
            }
        }
    }
</script>

<style scoped lang="less">
    .user{
        display: flex;
        flex-direction: row;
        .user_skills{
            /*border: 1px solid red;*/
            width: 60%;
        }
    }
    .main_table{
        width: 40%;
        /*border: 1px solid red;*/
        /*float: right;*/
        margin-left: 50px;
    }
.tables{
    width: 100%;
    height: 600px;
    text-align: center;
    /*border: 1px solid red;*/
    .table_user{
        width: 100%;
        height: 580px;
        text-align: center;
        /*margin-top: 20px;*/
        margin-bottom: 20px;
        /*border: 1px solid red;*/
    }
    td{
        /*border: 1px solid red;*/
    }
}
</style>
