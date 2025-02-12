import { createWebHashHistory, createRouter, type RouteRecordRaw } from 'vue-router';
import reference from '../layout/TopBar/reference';
import articlesRouteList from '../layout/Articles/articlesRouteList';
import categoriesRouteList from '../layout/Categories/categoriesRouteList';
import Page404 from '@/layout/Page404/index.vue'

let routes: RouteRecordRaw[] = [];
let router

await (async () => {
    for (let i = 0; i < reference.length; i++) {
        const module = await import(`@/layout/${reference[i].name}/index.vue`);
        const obj: RouteRecordRaw = {
            path: `/${reference[i].name}`,
            component: module.default
        };
        routes.push(obj);
    }
    routes.push(
        {
            path:'/',
            redirect:'/Home'
        },
        {
            path: "/:pathMatch(.*)*",
            redirect:'/404',
        },
        {
            path: "/404",
            name: "NotFound",
            component:Page404,
        }
    )
    routes = routes.concat(articlesRouteList)
    routes = routes.concat(categoriesRouteList)

    const router_temp = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    router = router_temp;
})();

export default router as any;