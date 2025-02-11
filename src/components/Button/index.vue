<script lang="ts" setup>
import './style.css'

const props = defineProps<{
    text:string
}>()
</script>

<template>
    <button class="note-button">{{ props.text }}</button>
</template>