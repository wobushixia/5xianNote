<script lang="ts" setup>
import NoteBreadcrumb from '@/layout/Breadcrumb/index.vue'
</script>
<template>
    <div class="LR">
        <div id="left-box">
            <div id="sticky-box">
                <slot name="left"></slot>
            </div>
        </div>
        <div id="right-box">
            <note-breadcrumb :items="$route.path" />
            <slot name="right"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.LR{
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap:20px;
    position: absolute;
    left:20%;
    width:60%;
    padding: 15px;

    #left-box{
        #sticky-box{
            position: sticky;
            top:20px;
        }
    }
}

@media (max-width: 1024px){
    .LR{
        display: flex;
        justify-content: center;
        position: relative;
        flex-direction: column-reverse;
        #right-box{
            margin-top: 10px;
        }
    }
}
</style>