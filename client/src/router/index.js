import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

const CategoryList = () => import('@/components/CategoryList');
const RecipesList = () => import('@/components/RecipesList');
const Recipe = () => import('@/components/Recipe');
const Search = () => import('@/components/Search');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: { name: 'categories' },
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoryList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/recipes/:id',
      name: 'recipes',
      component: RecipesList,
      props: true
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe,
      props: true
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (savedPosition === null) {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
