import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)
const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Manage',
    component: () => import('../views/Manage.vue'),
    redirect: "/user",
    children: [
      {path: '/store', name: '库存管理', component: () => import('../views/Store.vue')},
      {path: '/user', name: '用户管理', component: () => import('../views/User.vue')},
      {path: '/borrow', name: '借阅管理', component: () => import('../views/Borrow.vue')},
      {path: '/violation', name: '违规管理', component: () => import('../views/Violation.vue')},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  localStorage.setItem("currentPathName", to.name)  // 设置当前的路由名称
  store.commit("setPath")
  //只有next()才能放行，否则死循环
  if (localStorage.getItem("user") == null && to.path != "/login") {
      // 跳回登录页面
    next("/login")
  }
  next()

})
export default router
