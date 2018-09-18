import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home', // 命名路由
    component: Home,
    props: route => ({
      food: route.query.food // 路由组件传参 3. 函数模式
    }),

    beforeEnter: (to, from, next) => {
      // 路由独享的守卫
      if (from.name === 'about') alert('这是从about页面来的')
      else alert('这是从' + to.name + '来的')
      next()
    }

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    alias: '/home_page',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'orage' // 路由组件传参: 2. 对象模式
    },
    meta: {
      title: '关于'
    }
  },
  {
    // 动态路由匹配
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true //   路由组件传参: 1. 布尔模式
  },
  {
    // 嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child', // 此处无需添加 反斜杆
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    // 命名视图
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')

    }
  },
  {
    // 重定向
    path: '/main',
    redirect: to => {
      return {
        name: 'home'
      }
    } // 1.可以重定向到路径 2.也可以重定向到有个命名路由 3.可以是一个方法,动态返回重定向目标路径
  },
  {
    path:'/store',
    component:()=>import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
