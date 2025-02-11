import type { RouteRecordRaw } from "vue-router";
import Category from "./Category.vue";
import categories from "./Categories.ts";

let categoriesRouteList:RouteRecordRaw[] = []

categories.forEach(ele=>{
    const obj = {
        path:`/Categories/${ele.name}`,
        component:Category,
        props:{
            name:ele.name
        }
    }
    categoriesRouteList.push(obj)
})

export default categoriesRouteList