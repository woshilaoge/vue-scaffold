import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import About from './views/about.vue'
import Error from './views/error' // .js、.vue 文件扩展名可以省略

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }
  ]
})
