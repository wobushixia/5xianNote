import type { RouteRecordRaw } from "vue-router";
import articles from "./Articles";
import Article from "./Article.vue";
let articlesRouteList:RouteRecordRaw[] = []
import convertMarkdownToHTML from "./convertMarkdownToVue";

for(let i=0;i<articles.length;i++){
    const module = Article
    const comp = articles[i]
    const data = await convertMarkdownToHTML(comp.title)
    const obj:RouteRecordRaw = {
        path:`/Articles/${articles[i].id}`,
        component:module,
        props:{
            title:comp.title,
            description:comp.description,
            date:comp.date,
            id:comp.id,
            content:data
        }
    }
    articlesRouteList.push(obj)
}

export default articlesRouteList