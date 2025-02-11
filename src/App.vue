<script lang="ts" setup>
import TopBar from '@/layout/TopBar/index.vue'
import { RouterView } from 'vue-router';
</script>
<template>
  <top-bar></top-bar>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 239ms ease;
}
 
 
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>