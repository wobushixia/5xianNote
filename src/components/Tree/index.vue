<script lang="ts" setup>
import NoteTree from './index.vue'
import { type ArticleNode } from '../../layout/Articles/createNode';
const props = defineProps<{
    children:Array<ArticleNode>
}>()

const goAnchor = (selector:string) =>{
    document.querySelector(selector)?.scrollIntoView({
        behavior:'smooth'
    })
}
</script>
<template>
    <div v-if="props.children.length">
        <div v-for="(ele,index) in props.children" :key="ele.name">
            <li @click="goAnchor(ele.href)">{{ ele.step+"."+(index+1)+":"+ele.name }}</li>
            <ul v-if="props.children.length"><note-tree :children="ele.children"></note-tree></ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
li{
    list-style: none;
    display: block;
    padding:5px;
    cursor: pointer;
}
li:hover{
    background-color: #39c5bc8f;
}
ul {
    margin:1px;
    margin-left: 20px;
    padding: 0;
}
</style>