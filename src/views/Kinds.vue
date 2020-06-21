<template>
    <el-container class="bs">
            <Header></Header>
        <el-main>
            <el-row :gutter="10">
                <el-col :span="2" :offset="5">
                    <div class="grid-content bg-purple">

                        <div class="kind_lab">

                            <el-menu background-color="unset"
                                     >
                                    <el-menu-item @click="getHtml" index="1-1">
                                    <span slot="title" >全部</span>
                                    </el-menu-item>
                                    <el-menu-item v-for="(k,i) in kinds" :key="i"  :index='i.toString()' @click="getKb(k.name)" :prop="i" >
                                        <span slot="title">{{k.name}}</span>
                                    </el-menu-item>
                            </el-menu>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
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
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "./components/Header";
    export default {
        name: "kinds",
        data(){
          return{
              htmlList:[],
              kinds:''
          }
        },
        components:{
            Header
        },
        mounted() {
            this.getHtml();
            this.getKind();
        },
        methods:{
            getKind(){
                const that=this;
                that.$axios.get('findLabs').then((res)=>{
                    // console.log(res.data.data)
                    that.kinds=res.data.data.labList
                })
            },
            getKb(e){
                const that=this;
                console.log(e);
                that.$axios.get('selectBlogByLabName/'+e).then((res)=>{
                    // console.log(res.data.data)
                    that.htmlList=res.data.data.blogList;
                    // console.log(that.htmlList);
                })

            },
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
            }
        }
    }
</script>

<style scoped lang="less">
    .el-main{
        margin-top: 105px;
    }
    .el-col{
        /*border: 1px solid red;*/
    }
    .el-card{
        background-color: unset;
    }
    .kind_lab{
        display: flex;
        flex-direction: column;
    }
    .html_context{
        /*margin-top: 45px;*/
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
</style>
