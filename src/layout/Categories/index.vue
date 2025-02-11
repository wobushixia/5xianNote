<script lang="ts" setup>
import PersonalCard from '../../prefab/PersonalCard.vue'
import Card from '@/components/Card/index.vue'
import Tag from '@/components/Tag/index.vue'
import LRLayout from '@/components/LRLayout/index.vue'
import categories from './Categories';
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
    <LRLayout>
        <template #left>
            <personal-card />
        </template>
        <template #right>
            
            <card noShadow deleteButton>
                <tag style="margin-right: 10px;" v-for="category in categories" :key="category.name" :amount="category.amount" @click="router.push(`/Categories/${category.name}`)">{{ category.name }}</tag>
            </card>
        </template>
    </LRLayout>
</template>