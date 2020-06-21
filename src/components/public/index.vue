<template>
    <el-container class="bs">
        <el-header height="60px" >
        <el-menu :router="true" style="margin: auto"
                 mode="horizontal"
                 background-color=""
                 default-active="we">
            <el-menu-item v-for="(he,i) in header_lab" :key="i" :index="he.path" class="header_lab">
                <div>
                   <span><svg-icon :icon-class="he.ic"/></span>
                    <span style="margin-right: 6px;">{{he.text}}</span>
                </div>
            </el-menu-item>
        </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                header_lab:[
                    {'ic':'home','text':'首页','path':'we'},
                    // {'ic':'labs','text':'标签','path':'labs'},
                    {'ic':'kinds','text':'分类','path':'kinds'},
                    {'ic':'messages','text':'留言','path':'msg'},
                    {'ic':'archive','text':'归档','path':'ar'},
                    {'ic':'me','text':'关于','path':'about'},
                    {'ic':'github','text':'github','path':'gb'},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .bs{
        background: url("../../static/bg.jpg") no-repeat;
        background-size: 100% 100%;
        height: 100%;
        position: fixed;
        width: 100%
    }
    .el-menu{
        background-color:#E7E7E5;
    }
    .el-menu-item{
    }
    .el-header{
        background-color:#E7E7E5;
        position: fixed;
        width: 100%;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        left:0 ;top : 0;
        z-index: 10000;
        .svg-icon{

        }
        .header_lab {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
            width: 90px;
            height: 55px;
            cursor: pointer;
        }
        }
    .el-main{
        margin-top: 60px;
    }
</style>
