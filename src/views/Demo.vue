<template>
      <el-container class="bs">
           <el-header height="60px" >
              <div class="icon_lab">
                  <div class="header_lab" :key="i" @click="home">
                     <svg-icon style="height: 20px;width: 20px"  icon-class="home" class-name="card-panel-icon"/>首页
                  </div>
                  <div class="header_lab" :key="i" @click="labs">
                      <svg-icon style="height: 20px;width: 20px"  icon-class="labs" class-name="card-panel-icon"/>标签
                  </div>
                  <div class="header_lab" :key="i" @click="kinds">
                      <svg-icon style="height: 20px;width: 20px"  icon-class="kinds" class-name="card-panel-icon"/>分类
                  </div>
                  <div class="header_lab" :key="i" @click="messages">
                      <svg-icon style="height: 20px;width: 20px"  icon-class="messages" class-name="card-panel-icon"/>留言
                  </div>
                  <div class="header_lab" :key="i" @click="archive">
                      <svg-icon style="height: 20px;width: 20px"  icon-class="archive" class-name="card-panel-icon"/>归档
                  </div>
                  <div class="header_lab" :key="i" @click="me">
                      <svg-icon style="height: 20px;width: 20px"  icon-class="me" class-name="card-panel-icon"/>关于
                  </div>
                  <div class="header_lab" :key="i" @click="me">
                      <svg-icon style="height: 20px;width: 20px"  icon-class="github" class-name="card-panel-icon"/>github
                  </div>
               </div>
           </el-header>
           <el-main>
            <el-row :gutter="10">
                        <el-col :span="10" :offset="4">
                            <div v-for="(html ,i) in htmlList" :key="i">
                                <el-card class="html_context">
                                    <h1 v-html="html.title" >{{html.title}}</h1>
                                    <div class="context_html" v-html="html.markdown">{{html.markdown}}</div>
                                </el-card>
                            </div>
                        </el-col>
                            <el-col :span="5" class="card_lab">
                                <el-card>
                                    简介
                                    <hr/>
                                </el-card>
                                <el-card>
                                    分类
                                </el-card>
                                <el-card>
                                    最新文章
                                </el-card>
                                <el-card>
                                    归档
                                </el-card>
                            </el-col>
                        </el-row>
           </el-main>
      </el-container>
</template>

<script>
    export default {
        name: "Demo",

        data(){
            return{
                htmlList:[],
            }
        },
        mounted() {
            console.log('demo')
            this.getHtml();

        },
        methods:{
            getHtml(){
                const that=this;
                that.$axios.get('findStatus').then((res)=>{
                    // console.log(res.data.data)
                    that.htmlList=res.data.data.blogList;
                    console.log(that.htmlList);
                })
            },
            home(){
                this.$router.push({path: '/demo'})
            },
            labs(){
            },
            kinds(){},
            messages(){},
            archive(){},
            me(){}
        }
    }
</script>

<style scoped lang="less">
    .bs{
    }
.el-header{
    background-color:#FFFFFF;
    position: fixed;
    width: 100%;
    border: 1px solid #ddd;
    left:0 ;top : 0;
    z-index: 10000;
    display: flex;
    align-items: center;
}
.icon_lab{

    display: flex;
    /*flex-direction: row;*/
    margin: auto;
    .header_lab{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        width: 90px;
        height: 55px;
        cursor:pointer;
    }
    :hover{
        background-color: #ECF5FF;
    }
    .svg-icon{
        margin-right: 8px;
        margin-left: 10px;
        /*margin: auto;*/
    }
}
.el-main{
    margin-top: 80px;
}
.html_context{
    margin-top: 40px;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    /*border: 1px solid red;*/
}
    .card_lab{
        margin-top: 40px;
        margin-left: 20px;
        .el-card{
            margin-bottom: 20px;
        }
    }
</style>
<style>
   /* pre{
        border: 1px solid #ddd;
        background-color: #E9ECEF;
        font-size: 15px;
    }*/
    .context_html{
        font-size: 18px;
        margin-top: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
