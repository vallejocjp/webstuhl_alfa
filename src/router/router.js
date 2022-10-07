import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'landing',
        component: () => import( '@/views/public/Landing.vue' )
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import( '@/views/admin/Administration.vue' )
    },
    {
        path: '/details/:id',
        name: 'details',
        component: () => import( '@/views/public/VacanciesDetails.vue')
    }
]

const router=createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
    
    routes 
})

export default router