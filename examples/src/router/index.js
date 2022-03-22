import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/pages/welCome'
import doc from '@/components/pages/doc'
import panelPage from '@/components/pages/panelPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/doc',
            name: 'doc',
            component: doc,
            redirect: '/doc/panel',
            children: [
                {
                    path: '/doc/panel',
                    name: 'panelPage',
                    component: panelPage
                }
            ]
        }
    ]
})
