<template>
            <el-container class="bs">
                <header-text></header-text>
                <el-main>
                    <h2 style="margin: 0 auto;text-align: center">关于我</h2>
                    <div style="margin-top: 20px">
                        <el-row :gutter="20">
                            <el-col :span="12" :offset="6">
                                <div class="grid-content bg-purple">
                                        <div class="tit">
                                        <p><strong>网&nbsp;名:&nbsp;Mr.G</strong></p>
                                        <p><strong>职&nbsp;业:&nbsp;java开发学习者</strong></p>
                                        <p><strong>就读大学:&nbsp;南京工业职业技术大学</strong></p>
                                        <p> <strong>就职公司:&nbsp;暂无</strong></p>
                                        <p><strong>擅长技术:&nbsp;</strong></p>
                                        <p class="skill" v-for="(s,i) in skills" :key="i" >{{s}}</p>
                                    </div>
                            </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
        </el-container>
</template>

<script>
    import Header from "./components/Header";

    export default {
        name: "About",
        data(){
            return{
                skills:[
                    '熟练HTML、CSS、JavaScript、jQuery、AJAX等WEB前端技术',
                    '有一定的HTML5和CSS3编码基础,熟悉vue,Bootstrap,element-ui等前端框架',
                    '熟练使用微信小程序,uni-app,熟练第三方支付、登录等功能开发',
                    '熟练应用JAVA、MySQL技术熟练使用REST ful API接口的开发',
                    '熟悉面向对象编程及MVC设计模式,MVVM模式'
                ]
            }
        },
        components:{
            headerText:Header,
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">
    .el-main{
        margin-top: 60px;
        width: 50%;
        /*border: 1px solid red;*/
    }
    .ava{
        border-radius: 50%;
        margin-top: 20px;
    }
    .tit{
        display: flex;
        flex-direction: column;
       strong{
           /*padding: 8px;*/
           font-size: 16px;
           color:#707076;
       }
        .skill{
            color:#707076;
        }
    }

</style>
