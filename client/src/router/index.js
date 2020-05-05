import Vue from 'vue';
import Router from 'vue-router';

const Player = () => import('@/components/Player');
const Team = () => import('@/components/Team');
const DeleteView = () => import('@/components/DeleteView');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: { name: 'players' },
    },
    {
      path: '/players',
      name: 'players',
      component: Player
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/delete',
      name: 'delete',
      component: DeleteView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});

export default router;
