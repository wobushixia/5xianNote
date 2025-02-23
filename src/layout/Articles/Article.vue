<script setup lang="ts">
import { onMounted, ref, watch, nextTick, type Ref } from "vue";
import { marked } from "marked";
import PersonalCard from "../../prefab/PersonalCard.vue";
import './Article.scss'
import Card from '@/components/Card/index.vue'
import NoteTree from '@/components/Tree/index.vue'
import { setNode, setGlobalNode, type ArticleNode } from "./createNode";
import LRLayout from '@/components/LRLayout/index.vue'
import mermaid from 'mermaid'

const nodeInit = () =>{
  const contentContainer:Ref<HTMLElement> = ref(document.querySelector('#contentContainer') as HTMLElement)
  const Header1Text:string = ((contentContainer.value.querySelector('h1') as HTMLElement).textContent as string)
  const primaryNode:ArticleNode = setGlobalNode(Header1Text)
  let parentNodeArray:Array<ArticleNode> = [primaryNode]
  const newParentNodeArray:Array<ArticleNode> = []
  for(let i=1;i<6;i++){
    if(contentContainer.value.querySelector(`h${i+1}`)!==undefined){
      contentContainer.value.querySelectorAll(`h${i+1}`).forEach((ele)=>{
        ele.id = (ele.textContent as string).replace(/[0-9.\s]/ig,'')
        if(i!==1){
          const matchRule = new RegExp(`<h${parentNodeArray[0].step+1}>`,'g')
          const results:Array<{index:number,value:string}> = []
          let result:RegExpExecArray | null
          while((result = matchRule.exec(data.value))!==null){
            results.push({index:result.index,value:result[0]})
            matchRule.lastIndex = result.index + result[0].length;
          }
          const startIndex:number = data.value.indexOf((ele.textContent as string))
          const strIndex:number = data.value.lastIndexOf((`<h${parentNodeArray[0].step+1}>`),startIndex)
          results.forEach((ele2,index)=>{
            if(ele2.index===strIndex){
              const current_node = setNode((ele.textContent as string),parentNodeArray[index])
              newParentNodeArray.push(current_node)
            }
          })
        }else{
          newParentNodeArray.push(setNode((ele.textContent as string),parentNodeArray[0]))
        }
      })
      parentNodeArray = newParentNodeArray
    }
  }
  return primaryNode
}

const props = defineProps<{
  title: string;
  description: string;
  content: string;
  date: number;
  id: number;
}>();

let data:Ref<string> = ref(props.content);
let contentResult:Ref<ArticleNode> = ref(setGlobalNode('waiting for data...',false))


onMounted(async () => {
  window.MathJax.typeset()
  data.value = props.content;
  await nextTick()
  contentResult.value = nodeInit()
  await nextTick()
  document.querySelectorAll(".language-mermaid").forEach(ele=>{
    ((ele.parentElement as HTMLElement).className as string) = "mermaid";
    (ele.parentElement as HTMLElement).textContent = ele.textContent
    ele.remove()
  })
  await nextTick()
  mermaid.init()

});
</script>

<template>
  <LRLayout>
    <template #left>
      <personal-card />
      <card header="目录" deleteButton noShadow id="context">
        <h3>{{ contentResult.name }}</h3>
        <ul>
          <note-tree :children="contentResult.children"></note-tree>
        </ul>  
      </card>
    </template>
    <template #right>
      <card noShadow deleteButton id="contentContainer" v-html="data"></card>
    </template>
  </LRLayout>
</template>

<style lang="scss" scoped>
ul{
  margin-left: 20px;
  padding: 0;
}
</style>