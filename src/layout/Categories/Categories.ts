import articles from "../Articles/Articles";

interface Category{
    name:string,
    amount:number
}
let categories:Category[] = []
let _i:number = 0
const categoriesInit = () =>{
    categories = categories.concat({name:articles[0].category,amount:0})
    articles.forEach(ele=>{
        _i=0
        categories.forEach((ele2)=>{
            if(ele.category===ele2.name){
                console.log('match success')
                ele2.amount++
            }else{
                console.log("_i++",_i)
                _i++
                if(_i===categories.length){
                    categories = categories.concat({name:ele.category,amount:1})
                }
            }
        })
    })
}
categoriesInit()

export default categories