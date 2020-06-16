<template>
    <div>
<!--                 <div v-for="(value,index) in htmlList" :key="index">-->
                     <el-col :span="21" :offset="3">
                        <div class="grid-content bg-purple" v-for="html in htmlList">
                            <el-card >
                                <div v-html="html.html" >
                                    <div>
                                        <h3>{{html.title}}</h3>
                                        {{html.html}}
                                    </div>

                                </div>
                            </el-card>
<!--                            <el-card >-->
<!--                                <div >{{htmlList[1].value}}</div>-->
<!--                            </el-card>-->
                         </div>
                    </el-col>
<!--                </div>-->

    </div>
</template>

<script>
    export default {
        name: "Demo",
        data(){
            return{
                htmlList:[
                    // {name:'1',value:'a'},
                    // {name:'2',value:'b'},
                    // {name:'3',value:'c'},
                ],
            }
        },
        mounted() {
            // console.log('demo')
            this.getHtml();

        },
        methods:{
            getHtml(){
                const that=this;
                that.$axios.get('findAllBlog').then((res)=>{
                    // console.log(res.data.data)
                    that.htmlList=res.data.data.blogList;
                    console.log(that.htmlList);
                })
            },
            changeData(value,render) {
                console.log('获取数据')
                // console.log(value);
                // console.log(render);
            }
        }
    }
</script>

<style scoped lang="less">
.el-card{
    margin-top: 20px;
   width: 80%;
}
</style>
