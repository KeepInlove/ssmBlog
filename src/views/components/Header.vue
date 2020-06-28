<template>
    <el-header>
        <div class="icon_lab">
<!--            <div class="header_lab" :key="i" v-for="(ic,i) in header_lab" @click="ic.ic">-->
<!--                <svg-icon style="height: 20px;width: 20px;" class-name="card-panel-icon" :icon-class="ic.ic"/>{{ic.text}}-->
<!--            </div>-->
                              <div class="header_lab"  @click="home">
                                 <svg-icon  icon-class="home"/>首页
                              </div>
<!--                              <div class="header_lab"  @click="labs">-->
<!--                                  <svg-icon style="height: 20px;width: 20px"  icon-class="labs" class-name="card-panel-icon"/>标签-->
<!--                              </div>-->
                              <div class="header_lab"  @click="kinds">
                                  <svg-icon style="height: 20px;width: 20px"  icon-class="kinds" class-name="card-panel-icon"/>分类
                              </div>
                              <div class="header_lab" @click="messages">
                                  <svg-icon style="height: 20px;width: 20px"  icon-class="messages" class-name="card-panel-icon"/>留言
                              </div>
<!--                              <div class="header_lab"  @click="archive">-->
<!--                                  <svg-icon style="height: 20px;width: 20px"  icon-class="archive" class-name="card-panel-icon"/>归档-->
<!--                              </div>-->
                              <div class="header_lab"  @click="me">
                                  <svg-icon style="height: 20px;width: 20px"  icon-class="me" class-name="card-panel-icon"/>关于
                              </div>
                              <div class="header_lab"  @click="github">
                                  <svg-icon style="height: 20px;width: 20px"  icon-class="github" class-name="card-panel-icon"/>github
                              </div>
        </div>
    </el-header>
</template>
<script>
    export default {
        name: "Header",
        data(){
            return{
                header_lab:[
                    {'ic':'home','text':'首页'},
                    {'ic':'labs','text':'标签'},
                    {'ic':'kinds','text':'分类'},
                    {'ic':'messages','text':'留言'},
                    // {'ic':'archive','text':'归档'},
                    {'ic':'me','text':'关于'},
                    {'ic':'github','text':'github'},
                ],
                url:'https://github.com/Gxy2020'
            }
        },
        methods:{
            home(){
               const url=this.$route.path;
               // console.log(url);
               //  console.log(url=='/demo')
                    if (url=='/index'){
                        return false;
                    }else {
                        this.$router.push({path: '/index'})
                    }
                // console.log('首页')
            },
            labs(){

            },
            kinds(){
                const url=this.$route.path
                if (url=='/kinds'){
                    return false;
                }else {
                    this.$router.push({path: '/kinds'})
                }
            },
            messages(){
                const url=this.$route.path
                if (url=='/msg'){
                    return false;
                }else {
                    this.$router.push({path: '/msg'})
                }
            },
            archive(){
                const url=this.$route.path
                if (url=='/arc'){
                    return false;
                }else {
                    this.$router.push({path: '/arc'})
                }

            },
            me(){
                const url=this.$route.path;
                // console.log(url);
                //  console.log(url=='/demo')
                if (url=='/about'){
                    return false;
                }else {
                    this.$router.push({path: '/about'})
                }
            },
            github(){
                window.open(this.url,'_blank');
                // window.location.href=this.url;
            }
        }
    }
</script>

<style scoped lang="less">
    .el-header{
        background-color:#E7E7E5;
        position: fixed;
        width: 100%;
        border: 1px solid #ddd;
        left:0 ;top : 0;
        z-index: 10000;
        display: flex;
        align-items: center;
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
</style>
