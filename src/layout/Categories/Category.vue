<script lang="ts" setup>
import LRLayout from '@/components/LRLayout/index.vue'
import Card from '@/components/Card/index.vue'
import articles from '../Articles/Articles.ts';
import PersonalCard from '../../prefab/PersonalCard.vue';
import type { Article } from '../Articles/Articles.ts'

const props = defineProps<{
    name:string
}>()

let articlesListByCategory:Article[] = []

const initCategoryArticles = () =>{
    articles.forEach((ele: Article)=>{
        if(ele.category === props.name){
            articlesListByCategory.push(ele)
        }
    })
};initCategoryArticles()
</script>

<template>
    <LRLayout>
        <template #left>
            <PersonalCard />
        </template>
        <template #right>
            <card v-for="article in articlesListByCategory" :key="article.id" :header="article.title" :path="`/Articles/${article.id}`">
                {{ article.description }}
            </card>
        </template>
    </LRLayout>
</template>