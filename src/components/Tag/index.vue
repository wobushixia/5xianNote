<script setup lang="ts">
// @ts-ignore
defineProps<{
    amount:number
}>()
</script>

<template>
    <div class="note-tag">
        <div class="note-tag-left">
            <span><slot></slot></span>
        </div>
        <div class="note-tag-right">
            <span>{{ amount }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/lib/dependencies.scss';

div.note-tag{
    display: inline-flex;
    border-radius:0 4px 4px 0;
    box-shadow: 0 0 15px rgba(10,10,10,0.1);
    font-family:roboto-angular,noto-sans;
    cursor:pointer;
    transition: 0.2s;

    div.note-tag-left{
        background-color:#39c5bb;
        border-radius: 4px 0 0 4px;
        padding:5px;
    }

    div.note-tag-right{
        margin-left:5px;
        padding:5px;
    }

    &:hover{
        box-shadow: 0 0 20px rgba(10,10,10,0.1);
        scale: 1.05;
    }
}

</style>