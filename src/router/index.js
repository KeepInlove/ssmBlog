import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";

Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home},
  ]
})
router.beforeEach((to, from, next) =>{
  if (to.path==='/login') return next();
  const tokenStar=window.sessionStorage.getItem('token')
  if (!tokenStar) return next('/login')
  next();
} )
export default router
