<template>
  <div  class="login_container" >
     <div class="login_box">
         <!--头像区-->
         <div class="avatar_box">
<!--             <img src="../static/logo.png" alt="图片加载失败">-->
         </div>
         <!--登录表单-->
         <el-form ref="loginRef"  class="login_form" :model="loginForm" :rules="loginFormRules" label-width="0px">
             <!--用户名-->
             <el-form-item prop="username">
                 <el-input v-model="loginForm.username" type="text" prefix-icon="el-icon-user"></el-input>
             </el-form-item>

             <!--密码-->
             <el-form-item prop="password">
                 <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
             </el-form-item>
             <!--验证码-->
             <el-form-item prop="seccode" class="row">
                 <el-input  v-model="loginForm.seccode" placeholder="验证码"  prefix-icon="el-icon-edit">
                     <template slot="append"><span class="checkCode" @click="createCode">{{ checkCode}}</span></template>
                 </el-input>
             </el-form-item>
             <!--按钮-->
             <el-form-item class="btns_item">
                 <el-button class="btns" type="success" @click="resetForm" >重置</el-button>
             </el-form-item>
             <el-form-item class="btns_item" >
                 <el-button class="btns" type="primary" @click="login">登录</el-button>
             </el-form-item>
         </el-form>
     </div>
  </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "Login",
        data (){
            return {
                //这是登录表单的数据绑定对象
                loginForm: {
                    username: 'admin',
                    password: 'admin',
                    seccode: '',
                },
                ip:'',
                checkCode: '',
                //表单验证规则
                loginFormRules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted () {
            this.createCode();

    },
        methods: {
            //验证码生成返回
            createCode() {
                let code = "";
                const codeLength = 4; //验证码的长度
                const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
                for (let i = 0; i < codeLength; i++) { //循环操作
                    let index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
                    code += random[index]; //根据索引取得随机数加到code上
                }
                this.checkCode = code; //把code值赋给验证码
            },
            //重置方法
            resetForm(){
                // console.log(this);
                this.$refs.loginRef.resetFields();
            },
        //    登录
        login() {
            if (this.loginForm.seccode != this.checkCode) {
                this.$message({
                    message: "验证码错误，注意大写字母",
                    type: "warning"
                });
                this.createCode();
                return false;
            }
            this.$refs.loginRef.validate(async valid =>{
                if (!valid)return;
              const {data: res}=await this.$axios.post('login',qs.stringify(this.loginForm));
                console.log(res);
                if (res.code !== 200) return this.$message.error("用户名或密码错误");
                this.$message.success("登录成功");
                window.sessionStorage.setItem('token',res.data._data.token);
                console.log(window.sessionStorage.getItem('token'));
                this.$router.push('/home');
        })
        },

        },

    }

</script>

<style scoped lang="less">
.login_container{
    background-image: url("../static/login-background.jpg") ;
    background-repeat:no-repeat;
    background-size: cover;
    background-attachment:fixed;
    width: 100%;
    height: 100%;
}
.login_box{
    margin:0 auto;
    width: 360px;
    height: 400px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;/*绝对定位*/
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding: 10px;
   box-shadow:0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #ffffff;
    img{
        border-radius:50% ;
        width: 100%;
        height: 100%;
        background-color: #eee;
    }
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
/*.checkCode{*/
/*    position: absolute;*/
/*    display: block;*/
/*}*/
.btns_item{
    display: flex;
    justify-content: center;
}
.btns{
    width: 150px;
}
</style>
