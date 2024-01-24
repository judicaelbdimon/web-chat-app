import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Template from '@/views/Template.vue'
import Profil from '@/views/Profil.vue'
import SearchUser from '@/views/SearchUser.vue'
import * as Error from '@/views/errors'
import * as Auth from '@/views/auth'
import * as Discussion from '@/views/discussions'
import * as Contact from '@/views/contacts'
import GetStartedVue from '@/views/GetStarted.vue'

const routes = [
  {
    path: '/',
    name: 'get-stated',
    component: GetStartedVue,
    meta: {title: 'TP Web Avancé Master 1 IFRI réalisé en groupe'}
  },
  {
    path: '/template',
    name: 'template',
    component: Template,
    meta: {title: 'TP Web Avancé Master 1 IFRI réalisé en groupe'}
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {title: 'Home'}
  },
  {
    path: '/profil',
    name: 'profil',
    component: Profil,
    meta: {title: 'Profil', requiresAuth: true}
  },
  {
    path: '/search/user',
    name: 'search_user',
    component: SearchUser,
    meta: {title: 'Search User', requiresAuth: true}
  },
  {
    path: '/login',
    component: Auth.Layout,
    children: [
      { path: '/login', name: 'login', component: Auth.Login, meta: {title: 'Login', requiresAuth: false} },
      { path: '/register', name: 'register', component: Auth.Register, meta: {title: 'Register', requiresAuth: false} },
      { path: '/reset/password', name: 'reset_pwd', component: Auth.ResetPassword, meta: {title: 'Reset Password', requiresAuth: false} },
    ]
  },
  {
    path: '/discussions',
    component: Discussion.Layout,
    children: [
      {path: '/discussions', name: 'discussions', component: Discussion.Disc, meta: {title: 'Discussions', requiresAuth: true}},
      {path: '/archived/discussions', name: 'archived_disc', component: Discussion.ArchivedDisc, meta: {title: 'Archived Discussions', requiresAuth: true}},
      {path: '/private/discussions', name: 'private_disc', component: Discussion.PrivateDisc, meta: {title: 'Private Discussions', requiresAuth: true}},
      {path: '/group/discussions', name: 'group_disc', component: Discussion.GroupDisc, meta: {title: 'Group Discussions', requiresAuth: true}},
      {path: '/details/group/discussions', name: 'details_gd', component: Discussion.DetailsGD, meta: {title: 'Details Group Discussions', requiresAuth: true}},
      {path: '/details/private/discussions', name: 'details_pd', component: Discussion.DetailsPD, meta: {title: 'Details Private Discussions', requiresAuth: true}},
    ]
  },
  {
    path: '/contacts',
    component: Contact.Layout,
    children: [
      {path: '/contacts', name: 'contacts', component: Contact.Contacts, meta: {title: 'Contacts', requiresAuth: true}},
      {path: '/blocked/contacts', name: 'c_blocked', component: Contact.ContactBlocked, meta: {title: 'Contact Blocked', requiresAuth: true}},
      {path: '/requests/contacts', name: 'c_requests', component: Contact.ContactRequests, meta: {title: 'Contact Requests', requiresAuth: true}},
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error.Layout,
    children: [
        { path: '/:pathMatch(.*)*', name: '404', component: Error.PageNotFound, meta: {title: 'Page not found'} },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title+' | '+import.meta.env.VITE_APP_NAME
  next()
})

export default router
