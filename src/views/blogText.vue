<template>
    <el-container class="bs">

            <header-text></header-text>

        <el-main style="margin-top: 25px;">
          <el-card class="text" style="margin-top: 80px;margin-bottom: 20px">
              <div style="text-align: center;">
                  <span class="card_title" style="margin: auto;text-align: center" v-html="blog.title" >{{blog.title}}</span>
                  <div class="card_icon" style="margin: 20px 20% 0 30%">
                      <div> <i class="el-icon-user" style="margin-right: 5px" />作者&nbsp;G</div>
                      <span> <el-icon name="time"/>发表于&nbsp;{{blog.data}}</span>
                      <span> <i class="el-icon-s-unfold" />分类&nbsp;{{name}}</span>
                      <span> <el-icon name="view"/>阅读量&nbsp;0</span>
                      <span> <i class="el-icon-chat-dot-square" />评论&nbsp;0</span>
                  </div>
              </div>
              <!--文章-->
              <div v-html="html">{{html}}</div>
              <div style="margin-top: 40px">上一篇:</div>
              <!--打赏-->
              <div style="text-align: center;margin-bottom: 45px">
                  <el-button type="primary"  @click="showToggle" >打赏</el-button>
                  <div v-show="isShow">
                      <div class="pay" style="margin-left: 25%">
                       <div class="pay_item">
                        <img class="src_ds" src="../static/wx.png"/>
                        <span>微信支付</span>
                       </div>
                       <div class="pay_item">
                        <img class="src_ds" src="../static/ap.png"/>
                           <span>支付宝</span>
                       </div>
                      </div>
                  </div>
              </div>
              <div class="Copyright">
                  <span> <a style="font-weight:bolder;font-size: 18px">本文链接</a>： <a :href="path"> http://localhost:8080{{path}}</a></span>
                <span><a style="font-weight:bolder;font-size: 18px">版权声明</a>： 本博客所有文章除特别声明外，均采用  BY-NC-SA 许可协议。转载请注明出处！</span>
              </div>
              <!--结尾-->
              <div style="text-align: center;margin-bottom: 30px">
                 -----本文结束<svg-icon icon-class="xin"></svg-icon> 感谢您的阅读----
              </div>
              <div style="width:65px;background-color: #E9ECEF">
                  <svg-icon  icon-class="labs" class-name="card-panel-icon"/>
                  <span >{{name}}</span>
              </div>
          </el-card >
            <!--留言区-->
            <el-card class="text" style="margin-bottom: 50px">
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
                    <el-button type="primary">提交</el-button>
                    </div>
                </div>
            </el-card>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "./components/Header";
    export default {
        name: "blogText",
        data(){
            return {
                id: this.$route.params.id,
                blog: '',
                html: '',
                name: '',
                isShow: false,
                path: this.$route.path,
                ruleForm: {
                    names: '',
                    email: '',
                    content: ''
                },
            }
        },

        rules:{
            names:[
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        },
        components:{
            headerText:Header
        },
        created() {
            // console.log(this.id);
            this.getText();
            // console.log(this.path)
        },
        mounted() {
            this.getText();
        },
        methods:{
            getText(){
                const that=this;
                that.$axios.get('selectBlogById/'+that.id).then((res)=>{
                    // console.log(res.data);
                    that.blog=res.data.data.blog;
                    that.html=that.blog.html;
                    that.name=that.blog.lab.name;
                    // console.log(that.blog)
                }).catch(reason => {
                    console.log(reason)
                })
            },
            showToggle(){
                this.isShow = !this.isShow
                if(this.isShow){
                    this.btnText = "隐藏"
                }else{
                    this.btnText = "显示"
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .bs{
        background: url("../static/bg.jpg") no-repeat;
        background-size: 100% 100%;
        height: 100%;
        position: fixed;
        width: 100%
    }
    .el-card{
        background-color: #F6F6F6;
        /*background-color: unset*/
    }
    .text{
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 64%;
    }
    .card_title{
        text-align: center;
        color: #707076;
        font-size: 26px;
        cursor:pointer;
    }
    .card_icon{
        display: flex;
        flex-direction: row;
        font-size: 12px;
        margin-top: 20px;
        color: #707076;
        span{
            margin-left: 8px;
            i{
                margin-right: 5px;
            }
        }
    }
    .pay{
        display: flex;
        flex-direction: row;
        align-items: center;
        .pay_item{
            display: flex;
            flex-direction: column;
        }
    }
    .src_ds{
        width: 180px;
        height: 180px;
        padding: 40px;
    }
    .Copyright{
        display: flex;
        flex-direction: column;
        /*background-color: #E9ECEF;*/
        background-color:#E7E7E5;
        margin-bottom: 30px;
        span{
            padding: 10px;
        }
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
</style>
