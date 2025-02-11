import articles from "../Articles/Articles";

interface Category{
    name:string,
    amount:number
}
let categories:Category[] = []

const categoriesInit = () =>{
    articles.forEach(ele=>{
        if(categories.length===0){
            categories.push({
                name:ele.category,
                amount:0
            })
        }

        categories.forEach(ele1=>{
            if(ele.category===ele1.name){
                ele1.amount++
            }else if(categories.indexOf({name:ele.category,amount:ele1.amount})===-1){
                categories.push({
                    name:ele.category,
                    amount:1
                })
            }
        })
    })
}
categoriesInit()

export default categories