import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')
const Components = r => require.ensure([], () => r(require('@/views/components')), 'Components')
const TextVeticalScroll = r => require.ensure([], () => r(require('@/views/textVeticalScroll')), 'TextVeticalScroll')
const CssLoading = r => require.ensure([], () => r(require('@/components/css_loading')), 'CssLoading')
const Barrage = r => require.ensure([], () => r(require('@/components/barrage')), 'Barrage')

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
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
      children: [
        {
          path: 'scroll',
          name: 'TextVeticalScroll',
          component: TextVeticalScroll
        },
        {
          path: 'loading',
          name: 'CssLoading',
          component: CssLoading
        },
        {
          path: 'barrage',
          name: 'Barrage',
          component: Barrage
        }
      ]
    }
  ]
})
