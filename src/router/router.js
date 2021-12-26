import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "Administracion" */ '../views/Administracion.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    props: true,
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
  },
  {
    path: '/marketingdigital3d',
    name: 'MarketingDigital3D',
    component: () => import(/* webpackChunkName: "MarketingDigital3D" */ '../views/MarketingDigital3D.vue'),
  },
  {
    path: '/arquitectura',
    name: 'Arquitectura',
    component: () => import(/* webpackChunkName: "Arquitectura" */ '../views/Arquitectura.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let login = to.matched.some(result => result.meta.requiresAuth);
  if (!usuario && login) {
    next({ name: 'Login' });
  } else if (usuario && !login) {
    next();
  } else {
    next();
  }
})