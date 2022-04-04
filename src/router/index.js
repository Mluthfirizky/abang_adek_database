import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditCar from '../components/EditCar.vue'
import EditTerjual from '../components/EditTerjual.vue'
import ViewCar from '../views/View.vue'
import ViewCarTerjual from '../views/ViewCar.vue'
import NewStock from '../views/AddStock.vue'
import NewTerjual from '../views/AddTerjual.vue'
import Login from '../views/Login.vue'
import Graphics from '../views/Graphics.vue'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit/:plat/',
    name: 'EditCar',
    component: EditCar
  },
  {
    path: '/edit-terjual/:plat/',
    name: 'EditTerjual',
    component: EditTerjual
  },
  {
    path: '/view-car/:plat/',
    name: 'ViewCar',
    component: ViewCar
  },
  {
    path: '/view-car-terjual/:plat/',
    name: 'ViewCarTerjual',
    component: ViewCarTerjual
  },
  {
    path: '/new',
    name: 'NewCar',
    component: NewStock
  },
  {
    path: '/new-terjual',
    name: 'NewTerjual',
    component: NewTerjual
  },
  {
    path: '/graphics',
    name: 'Graphics',
    component: Graphics
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //kalau di route tersebut mempunyai meta "requiresAuth" maka variabel ini true
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  const isAuthenticated = firebase.auth().currentUser;

  if(!requiresAuth && !isAuthenticated){
    next({name: "Login"})
  }else{
    next()
  }
})

export default router
