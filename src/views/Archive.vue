<template>
    <el-container class="bs">
        <Header></Header>
        <el-main>
            <el-row :gutter="10">
                <el-col :span="2" :offset="5">
                    <div class="grid-content bg-purple">

                        <div class="kind_lab">
                            <el-menu background-color="unset">
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
        name: "Archive",
        components:{
            Header
        },
    }
</script>

<style scoped lang="less">
.el-main{
    margin-top: 65px;
}
</style>
