<template>
    <div class="we">
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
    </div>
</template>

<script>
    export default {
        name: "We",
        data(){
            return{
                htmlList:[],
                header_lab:[],
            }
        },
        mounted() {
            // console.log('demo')
            this.getHtml();

        },
        methods: {
            getHtml() {
                const that = this;
                that.$axios.get('findStatus').then((res) => {
                    // console.log(res.data.data)
                    that.htmlList = res.data.data.blogList;
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
        }
    }
</script>

<style scoped lang="less">
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
    .el-card{
        /*background-color: #F6F6F6;*/
        background-color: unset
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
