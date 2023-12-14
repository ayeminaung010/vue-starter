import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/jobs/JobView.vue'
import JobDetail from '../views/jobs/JobDetail.vue'
import NotFound from '../views/error/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'job',
    component: JobView ,
  },
  {
    path: '/jobs/:id',
    name: 'job-details',
    component: JobDetail,
    props: true,
  },
  {
    path: '/all-jobs', //redirect
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
