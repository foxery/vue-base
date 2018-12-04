import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')

if (process.env.NODE_ENV === 'development') {
  //使用cdn就不需要use
  Vue.use(Router)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
