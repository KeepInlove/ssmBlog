<template>
    <el-container class="bs">
        <el-header height="60px" >
            <header-text></header-text>
        </el-header>
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
              <div v-html="html">{{html}}</div>
              <div style="margin-top: 40px">上一篇:</div>
              <div style="text-align: center;margin-bottom: 45px">
                  <el-button type="primary"  @click="showToggle" >打赏</el-button>
                  <div v-show="isShow"><img class="src_ds" src="../static/wx.png"/><img class="src_ds" src="../static/ap.png"/></div>
              </div>
              <div class="Copyright">
                  <span> <a style="font-weight:bolder;font-size: 18px">本文链接</a>： <a :href="path"> http://localhost:8080{{path}}</a></span>
                <span><a style="font-weight:bolder;font-size: 18px">版权声明</a>： 本博客所有文章除特别声明外，均采用  BY-NC-SA 许可协议。转载请注明出处！</span>
              </div>
              <div style="text-align: center;margin-bottom: 30px">
                 -----本文结束<svg-icon icon-class="xin"></svg-icon> 感谢您的阅读----
              </div>
          </el-card >
            <el-card class="text" style="margin-bottom: 50px">
                留言区
            </el-card>
            <div><hr/></div>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "./components/Header";
    export default {
        name: "blogText",
        data(){
            return{
                id:this.$route.params.id,
                blog:'',
                html:'',
                name:'',
                isShow:false,
                path:this.$route.path,
            }
        },
        components:{
            headerText:Header
        },
        created() {
            // console.log(this.id);
            this.getText();
            console.log(this.path)
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
                    console.log(that.blog)
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
    .el-header{
        background-color:#E7E7E5;
        position: fixed;
        width: 100%;
        border: 1px solid #ddd;
        left:0 ;top : 0;
        z-index: 10000;
        display: flex;
        align-items: center;
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
</style>
