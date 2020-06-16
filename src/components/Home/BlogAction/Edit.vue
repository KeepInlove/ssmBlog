<template>
    <div>
        <div class="markdown" >
            <el-row :gutter="30" >
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
            </el-row>
            <mavon-editor
                    v-model="markdown"
                    ref="md"
                    @change="change"
                    @save="saveMavon"
                    style="min-height: 600px;margin-top: 15px"/>
            <el-button type="success" >提交</el-button>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "Edit",
        data(){
            return{
                markdown:''
            }
        },
        components: {
            mavonEditor,
        },
    }
</script>

<style scoped lang="less">
    .markdown{
        margin-top: 10px;
    .el-button{
        float: right;
    }
    }
</style>
