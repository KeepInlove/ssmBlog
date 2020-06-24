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
import blogText from "../views/blogText";
import index from "../components/public/index";
import We from "../components/public/We";
import Kinds from "../views/Kinds";
import Msg from "../views/Msg";
import Archive from "../views/Archive";
import Labs from "../components/Home/Labs";
import About from "../views/About";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:'/about',component:About},
    {path:'/arc',component:Archive},
    {path:'/msg',component:Msg},
    {path:'/blogText/:id',name:'blogText',component:blogText},
    {path:'/',redirect:'/demo'},
    {path:'/index',component:index,
      redirect:'we',
      children:[
        {path:'/we',component:We},
        // {path:'/labs',component:Labs},
      ]
    },
    {path:'/kinds',component:Kinds},
    {path:'/demo',component:Demo},
    {path:'/edit/:id',name:'edit',component:Edit},
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
        {path:'/labs', component:Labs},
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
