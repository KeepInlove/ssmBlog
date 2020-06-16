import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import Welcome from "../components/Home/Welcome";
import BlogList from "../components/Home/BlogList";
import AddBlog from "../components/Home/AddBlog";
import Logs from "../components/Home/Logs";
import User from "../components/Home/User";
import Messages from "../components/Home/Messages";
import ItemText from "../components/Home/ItemText";
import Time from "../components/Home/Time";
import Demo from "../views/Demo";
import Edit from "../components/Home/BlogAction/Edit";
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {path:'/demo',component:Demo},
    {path:'/edit',component:Edit},
    // {path:'/',redirect:'/login'},
    // {path:'/',redirect:'/home'},
    {path:'/login',component:Login},
    {path:'/home',
      component:Home,
      redirect:'/welcome',
      children:
      [ {path:'/welcome', component:Welcome},
        {path:'/blogList', component:BlogList},
        {path:'/addBlog', component:AddBlog,},
        {path:'/logs', component:Logs},
        {path:'/user', component:User},
        {path:'/messages', component:Messages},
        {path:'/itemText', component:ItemText},
        {path:'/time', component:Time},
      ]},
  ]
})
/*router.beforeEach((to, from, next) =>{
  if (to.path==='/login') return next();
  const tokenStar=window.sessionStorage.getItem('token')
  if (!tokenStar) return next('/login')
  next();
} )*/
export default router
