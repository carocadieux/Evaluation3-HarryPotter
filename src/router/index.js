import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Details from '../views/Details.vue'
import Favoris from '../views/Favoris.vue'
import ListePersonnages from '../views/ListePersonnages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: Acceuil
    },
    {
      path: '/acceuil/favoris',
      name: 'favoris',
      component: Favoris
    },
    {
      path: '/acceuil/listePersonnages',
      name: 'liste',
      component: ListePersonnages
    },
    {
      path: '/acceuil/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/acceuil/favoris',
      name: 'favoris',
      component: Favoris
    },
    {
      path: '/listePersonnages/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/listePersonnages/favoris',
      name: 'favoris',
      component: Favoris
    },
  ]
})

export default router
