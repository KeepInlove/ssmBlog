<template>
      <el-container class="bs">
               <header-text></header-text>
           <el-main>
            <el-row :gutter="10">
                        <el-col :span="10" :offset="4">
                            <div v-for="(html ,i) in htmlList" :key="i">
                                <el-card class="html_context" >
                                    <div @click="goText(html.id)">
                                        <span class="card_title"  v-html="html.title" >{{html.title}}</span>
                                        <div class="card_icon">
                                        <div> <i class="el-icon-user" style="margin-right: 5px" />作者&nbsp;G</div>
                                         <span> <el-icon name="time"/>发表于&nbsp;{{html.data}}</span>
                                         <span> <i class="el-icon-s-unfold" />分类&nbsp;{{html.lab.name}}</span>
                                         <span> <el-icon name="view"/>阅读量&nbsp;0</span>
                                         <span> <i class="el-icon-chat-dot-square" />评论&nbsp;0</span>
                                        </div>
                                        <div class="context_html" style="color: #707076" v-html="html.markdown">{{html.markdown}}</div>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                            <el-col :span="5"  class="card_lab"  style="position: static">
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

    import Header from "./components/Header";

    export default {
        name: "Demo",
        components:{
            headerText:Header
        },
        data(){
            return{
                htmlList:[],
                // header_lab:[
                //     {'ic':'home','text':'首页'},
                //     {'ic':'kinds','text':'分类'},
                //     {'ic':'messages','text':'留言'},
                //     {'ic':'archive','text':'归档'},
                //     {'ic':'me','text':'关于'},
                //     {'ic':'github','text':'github'},
                // ]
            }
        },
        mounted() {
            // console.log('demo')
            this.getHtml();

        },
        methods:{
            getHtml(){
                const that=this;
                that.$axios.get('findStatus').then((res)=>{
                    // console.log(res.data.data)
                    that.htmlList=res.data.data.blogList;
                    // console.log(that.htmlList);
                })
            },
            goText(e){
                // console.log('查看文章');
                // console.log(e)
                this.$router.push({
                    name:'blogText',
                    path:'blogText/'+e,
                    params:{id:e}
                })
            },
            home(){
                this.$router.push({path: '/'})
                // console.log('首页')
            },

        }
    }
</script>

<style scoped lang="less">

.el-card{
    /*background-color: #F6F6F6;*/
    background-color: unset
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
    margin-top: 60px;
}
.html_context{
    margin-top: 45px;
    width: 100%;
    height: 220px;
    margin-bottom: 20px;
    cursor:pointer;
    /*border: 1px solid red;*/
    .card_title{
        color: #707076;
        font-size: 26px;
        cursor:pointer;
    }
    .card_title:hover {
        text-decoration: underline;
        color: #53A8FF;
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
}
    .card_lab{
        margin-top: 45px;
        margin-left: 20px;
        .el-card{
            margin-bottom: 20px;
        }
    }

</style>
<style>
   pre{
        border: 1px solid #ddd;
        background-color: #E9ECEF;
        font-size: 15px;
    }
    .context_html{
        font-size: 18px;
        margin-top: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
   .bs{
       background: url("../static/bg.jpg") no-repeat;
       background-size: 100% 100%;
       height: 100%;
       position: fixed;
       width: 100%
   }
</style>
