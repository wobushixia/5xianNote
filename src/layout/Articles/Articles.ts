export interface Article{
    title:string,
    description:string,
    date:number,
    category:string,
    id:number
}

const articles:Article[] = [
    {title:"test",description:"first document",date:20250128,category:'test',id:0},
    {title:"render test",description:"renderer document",category:'render test',date:20250128,id:1}
]

export default articles