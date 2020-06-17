<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>博客管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加博客</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="markdown" >
            <el-row :gutter="30">
                <el-col :span="2">

                </el-col>
                    <el-col :span="8">
                        <el-input  v-model="title" placeholder="请输入标题" />
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="name" placeholder="请选择标签">
                            <el-option v-for="item in lab"
                                    :key="item.labId"
                                    :label="item.name"
                                    :value="item.name">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <el-tag type="warning">请及时保存</el-tag>
                    </el-col>
            </el-row>
                <mavon-editor
                        v-model="markdown"
                        ref="md"
                        @change="change"
                        @save="saveMavon"
                        style="min-height: 600px;margin-top: 15px"/>
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
                title: '',
                html:'',  // 及时转的html
                name:'',
                markdown:'',
                lab: [],
            }
        },
        created() {
            this.getLab();
        },
        methods: {
            getLab(){
                let that=this;
                   this.$axios.get('findLabs').then(res=> {
                       const result=res.data;
                       console.log(result);
                       if (result.code==200){
                          that.lab=result.data.labList;
                          console.log(result.data.labList)
                       }
                   }).catch(reason => console.log(reason));
                   console.log()
            },
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
                console.log('提交操作')
                if (this.title !==undefined && this.title.length >0 &&this.name !==undefined &&
                    this.name.length >0&&this.markdown!=undefined&&this.markdown.length>0){
                    console.log('都不为空,可以发送请求');
                    const that=this
                    this.$axios({
                        url:'addBlog/'+this.name,
                        method:'post',
                        data:{
                            'title':that.title,
                            'markdown': that.markdown,
                            'html':'<div class=blogDetail>'+this.html+'</div>'
                        }
                    }).then((res)=>{
                       const data=res.data;
                       if (data.code==200){
                           this.$message.success("发布成功");
                       }
                    })
                }else {
                    this.$message.warning("未填写标题或未选择标签");
                }
                console.log(this.title)
                console.log(this.name)
                console.log(this.markdown);
                console.log('<div class=blogDetail>'+this.html+'</div>');
            },
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
