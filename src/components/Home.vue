<template>
   <el-container class="home_container">
      <!--左侧边栏-->
         <el-aside width="240px">
            <div class="toggle-button">|||</div>
               <el-menu background-color="#2D4156" text-color="#fff"
                        default-active="welcome"
                        active-text-color="#409BFF" :router="true">
                  <el-menu-item index="welcome">
                     <template slot="title">
<!--                        <svg-icon style="margin-left: 5px"  icon-class="dashboard"></svg-icon>-->
                         <i class="el-icon-s-data" />
                        <span style="margin-left: 15px">首页</span>
                     </template>
                  </el-menu-item>

                  <!--一级菜单-->
                  <el-submenu index="2">
                     <!--一级菜的模板区域-->
                     <template slot="title">
                        <!--图标-->
                        <i class="el-icon-s-unfold" />
                        <!--文本-->
                        <span>博客管理</span>
                     </template>
                     <el-menu-item index="blogList">
                        <template slot="title">
                           <!--图标-->
                           <i class="el-icon-tickets"></i>
                           <!--文本-->
                           <span>博客列表</span>
                        </template>
                     </el-menu-item>
                     <el-menu-item index="addBlog">
                        <template slot="title">
                           <!--图标-->
                           <i class="el-icon-edit-outline"></i>
                           <!--文本-->
                           <span>添加博客</span>
                        </template>
                     </el-menu-item>
                  </el-submenu>
                   <el-submenu index="3">
                       <!--一级菜的模板区域-->
                       <template slot="title">
                           <!--图标-->
                           <i class="el-icon-s-promotion" />
                           <!--文本-->
                           <span>信息管理</span>
                       </template>
                       <el-menu-item index="user">
                           <template slot="title">
                               <i class="el-icon-s-custom" />
                               <span >个人信息</span>
                           </template>
                       </el-menu-item>
                       <el-menu-item index="time">
                           <template slot="title">
                               <!--图标-->
                               <i class="el-icon-time" />
                               <!--文本-->
                               <span>定时任务</span>
                           </template>
                       </el-menu-item>
                   </el-submenu>

                   <el-menu-item index="logs">
                     <template slot="title">
                         <i class="el-icon-coin" />
                        <span >日志信息</span>
                     </template>
                  </el-menu-item>
                  <el-menu-item index="messages">
                     <template slot="title">
                        <i class="el-icon-s-comment" />
                        <span >评论管理</span>
                     </template>
                  </el-menu-item>
                  <el-menu-item index="itemText">
                     <template slot="title">
                         <i class="el-icon-folder-opened" />
                        <span >项目文档</span>
                     </template>
                  </el-menu-item>
               </el-menu>

         </el-aside>

         <el-container>
            <!--右侧头部-->
            <el-header height="50px">
               <el-button type="info" plain class="rigster" style="font-size: 15px">退出</el-button>
            </el-header>
<!--            <el-></el->-->
            <!--右侧主体-->
            <el-main>
               <router-view></router-view>
            </el-main>
         </el-container>
      </el-container>
</template>

<script>
    export default {
        name:'Home',
        data(){
            return{
            }
        },
        methods:{
            logout(){
                window.sessionStorage.clear();
                this.$router.push('/login');
            },
        }

    }
</script>

<style scoped lang="less">
   .toggle-button{
      background-color: #4A5064;
      font-size: 10px;
      line-height: 24px;
      color: #fff;
      text-align: center;
      letter-spacing: 0.4em;
      cursor: pointer;
   }
   .home_container{
      height: 100%;
   }
.el-header{
      background-color: #B3C0D1;
    .rigster{
        float: right;
        margin-top: 5px;
    }
}
.el-aside {
      background-color: #2D4156;
   .el-menu{
      border-right:none ;
   }


}
   .el-main {
      background-color: #E9EEF3;

   }
</style>
