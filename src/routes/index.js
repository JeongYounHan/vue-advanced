import VueRouter from 'vue-router'
import Vue from 'vue'
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

import Common from '../views/designPattern/Common';
import Slot from '../views/designPattern/Slot';
import Controlled from '../views/designPattern/Controlled'
import Renderless from '../views/designPattern/Renderless'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            // bus.$emit('end:spinner');
            next();
          })
          .catch((err) => console.log(err));     
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((err) => console.log(err));     
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((err) => console.log(err));     
      }
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/common',
      component: Common,
    },
    {
      path: '/slot',
      component: Slot,
    },
    {
      path: '/controlled',
      component: Controlled,
    },
    {
      path: '/renderless',
      component: Renderless,
    },
  ]
});

export default router


