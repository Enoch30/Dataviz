import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DataEditor from './views/DataEditor.vue'
import SmartSearch from './views/SmartSearch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'dataeditor',
      component: DataEditor
    },
    {
      path: '/search',
      name: 'smartsearch',
      component: SmartSearch
    }
  ]
})
