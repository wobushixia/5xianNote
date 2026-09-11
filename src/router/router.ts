import { createWebHashHistory, createRouter, type RouteRecordRaw } from 'vue-router';
import reference from '../layout/TopBar/reference';
import articlesRouteList from '../layout/Articles/articlesRouteList';
import categoriesRouteList from '../layout/Categories/categoriesRouteList';
import Page404 from '@/layout/Page404/index.vue';

const routes: RouteRecordRaw[] = [];

for (let i = 0; i < reference.length; i++) {
  routes.push({
    path: `/${reference[i].name}`,
    component: () => import(`@/layout/${reference[i].name}/index.vue`),
  });
}

routes.push(
  { path: '/', redirect: '/Home' },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
  { path: '/404', name: 'NotFound', component: Page404 },
);

routes.push(...articlesRouteList);
routes.push(...categoriesRouteList);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
