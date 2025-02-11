<script setup lang="ts">
import './style.css'
import { useRouter } from 'vue-router';
const router = useRouter()
import NoteButton from '@/components/Button/index.vue'
</script>
<template>
    <div id="page-404">
        <div>
            <h1>404Page</h1>
            <p>Router Not Found , Please Type True Router</p>
            <p>Framework : Vue3</p>
            <note-button text="Return To Lobby" @click="router.push({path:'/Home'})"></note-button>
        </div>
    </div> 
</template>
