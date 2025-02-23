export interface Article{
    title:string,
    description:string,
    date:number,
    category:string,
    id:number
}

const articles:Article[] = [
    {title:"test",description:"first document",date:20250128,category:'test',id:0},
    {title:"render test",description:"renderer document",category:'render test',date:20250128,id:1},
    {title:"Linear Algebra - Lesson 1",description:"Linear Algebra",category:"笔记",date:20250223,id:2}
]

export default articles