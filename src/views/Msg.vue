<template>
    <el-container class="bs">
        <Header></Header>
        <el-main>
            <h2 style="margin: auto;text-align: center">留言互动</h2>
            <div style="text-align: center;padding: 20px;margin: 10px 0 10px 0" class="img_mgs">
                <img src="../static/timg.gif"/>
            </div>
            <el-card class="text" style="margin-bottom: 100px">
                <div class="message">
                    <div class="message_warning">
                        <span style="margin-bottom: 10px"><svg-icon icon-class="warning"/>&nbsp;留言说明:</span>
                        <span>务必填写有效的邮箱地址，否则不会收到回复信息的~</span>
                        <span> <hr/></span>
                    </div>
                    <div :model="ruleForm">
                        <span style="color: red;margin-left: 40px" >*</span>
                        昵称:&nbsp;<el-input class="in_content" v-model="ruleForm.names" />
                        <span style="color: red;margin-left: 40px">*</span>
                        邮箱:&nbsp;<el-input class="in_content" v-model="ruleForm.email"/>
                        <br>
                        <span style="padding: 40px;" class="main_input">
                           <span style="color: red;">*</span>
                           <span>内容:</span>
                           <span><el-input class="in_content main" v-model="ruleForm.content"  type="textarea" :rows="3"></el-input></span>
                       </span>
                    </div>
                    <div style="align-items: center;text-align: center">
                        <el-button>重置</el-button>
                        <el-button type="primary" @click="addMsg">提交</el-button>
                    </div>
                </div>
                <span style="font-size: 18px">共1条评论</span>
                <div class="msg_text">
                    <div class="msgContent">
                        <p class="ava" type="primary"  circle>a</p>
                        <p class="data">2020-06-22 13:58</p>
                    </div>
                    <div class="msg_main">你好</div>
                    <hr/>
                </div>
            </el-card>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "./components/Header";
    export default {
        name: "Msg",
        components:{
            Header
        },
        data(){
            return{
                ruleForm: {
                    names: '',
                    email: '',
                    content: ''
                },
            }
        },
        methods:{
            addMsg(){
                const that=this;
                const name=that.ruleForm.names;
                const email=that.ruleForm.email;
                const content=that.ruleForm.content;
                if (name!=undefined&&name.length>0
                    &&email!=undefined&&email.length>0
                    &&content!=undefined&&content.length>0){
                    that.$axios({
                        url:'addMsg',
                        method: 'post',
                        data:{
                            "name":name,
                            "email":email,
                            'content':content
                        }
                    }).then((res)=>{
                        if (res.data.code==200)
                            that.$message.success("留言成功")
                            that.ruleForm.names='';
                            that.ruleForm.email=''
                            that.ruleForm.content='';
                        console.log(res);
                    })
                }else {
                    that.$message({
                        type: 'warning',
                        message: '留言区不能为空'
                        })
                }

            }
        }
    }
</script>

<style scoped lang="less">
.el-main{
    margin-top: 65px;
}
.text{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 64%;
}
.message_warning{
    display: flex;
    flex-direction: column;
}
.el-input{
    width: 300px;
}
.in_content{
    padding-right: 20px;
}
.main_input{
    display: flex;
    flex-direction: row;
}
.main{
    width: 720px;
    margin-left: 8px;
}
.msg_text{
    margin-top: 10px;
    margin-bottom: 20px;
    /*border: 1px solid red;*/
}
.msgContent{
     /*border: 1px solid red;*/
    display: flex;
    flex-direction: row;
    /*align-content: space-between;*/
    justify-content: space-between;
    height: 75px;
    .ava{
        /*border: 1px solid red;*/
        background-color: #36a3f7;width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        font-size: 30px;
        margin-top: 20px;
    }
    .data{
        /*display: flex;*/
        /*border: 1px solid red;*/
        /*margin: auto;*/
        /*text-align: center;*/
        margin-top:30px ;
        /*justify-items: center;*/
        /*justify-content: center;*/
    }
 }
.msg_main{
    margin-left: 60px;
    font-size: 18px;
    margin-bottom: 40px;
}
</style>
