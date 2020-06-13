<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>博客管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加博客</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="markdown">
            <!--搜索区域-->
            <el-row :gutter="20">
                <form>
                    <el-col :span="5">
                        <el-input placeholder="请输入标题" />
                    </el-col>
                    <el-col :span="6">
                        <el-dropdown>
                          <span class="el-dropdown-link">
                            {{lab}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click="selectLab">java</el-dropdown-item>
                                <el-dropdown-item>mysql</el-dropdown-item>
                                <el-dropdown-item>spring</el-dropdown-item>
                                <el-dropdown-item>Vue</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </form>
            </el-row>
            <mavon-editor
                    v-model="content"
                    ref="md"
                    @change="change"
                    @save="saveMavon"
                    style="min-height: 600px"/>

            <el-button type="success" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        // 注册
        components: {
            mavonEditor,
        },
        data() {
            return {
                lab:'请选择标签',
                content:'', // 输入的markdown
                html:'',    // 及时转的html
            }
        },
        methods: {
            selectLab(){
                this.lab
            }
            ,
            saveMavon(value, render){
                console.log(value);   // md语法
                console.log(render);  //html内容
                this.readmeContent=render;
            },
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                this.html = render;
            },
            // 提交
            submit(){
                console.log(this.content);
                console.log(this.html);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .el-breadcrumb{
        margin-top: 0;
    }
    .markdown{
    margin-top: 10px;
    .el-button{
        float: right;
    }
}
</style>
