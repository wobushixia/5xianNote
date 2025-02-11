<script lang="ts" setup>
import Card from '@/components/Card/index.vue'
import { useRouter } from 'vue-router'
const props = defineProps<{
    items:string
}>()
const router = useRouter()
const clickHandler = (index:number) =>{
    let href:string = ''
    props.items.split('/').forEach((ele:string,i:number)=>{
        if(i!==index+1){
            href+=(index===i)?`${ele}`:`${ele}/`
        }
    })
    router.push({path:href})
}
</script>

<template>
    <card noShadow deleteButton class="breadcrumb">
        <span v-for="(item,index) in props.items.split('/')" :key="item">
            <span class="breadcrumb-item" @click="clickHandler(index)">{{ item }}</span><span class="breadcrumb-connection" v-if="index!==0&&index!=props.items.split('/').length-1">-</span>
        </span>
    </card>
</template>

<style lang="scss" scoped>
@use '@/lib/dependencies.scss';

.breadcrumb-item{
    font-family: roboto-regular;
    font-size:1em;
    cursor: pointer;
}
.breadcrumb-item:hover{
    color:#39c5bb;
}
.breadcrumb-connection{
    font-family: noto-sans;
    color:gray;
    font-size:1em;
    margin:0 10px;
}
</style>