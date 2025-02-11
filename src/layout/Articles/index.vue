<script setup lang="ts">
import PersonalCard from '../../prefab/PersonalCard.vue'
import Card from '@/components/Card/index.vue'
import './style.scss'
import articles from './Articles';
import LRLayout from '@/components/LRLayout/index.vue'

</script>
<template>
    <LRLayout>
        <template #left>
            <personal-card />
            <card header="文章" noShadow deleteButton>
                <center>文章数量:{{ articles.length }}</center>
                <div style="text-align: center;">
                    <span v-for="article in articles" :key="article.id">{{ article.id+':'+article.title }}<br></span>
                </div>
            </card>
        </template>
        <template #right>
            <card v-for="article in articles" :key="article.id" :header="`<span>${article.id}:${article.title}</span><span class='article-suffix'><span>${article.date}</span><span class='article-connection'>-</span><span>${article.category}</span></span>`" :path="`/Articles/${article.id}`">
                {{ article.description }}
            </card>
        </template>
    </LRLayout>
</template>