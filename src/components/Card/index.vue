<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, type Ref } from 'vue';
import './style.css';
import NoteButton from '@/components/Button/index.vue';

const props = defineProps<{
  header?: string;
  path?: string;
  deleteButton?: boolean;
  noShadow?: boolean;
}>();

const router = useRouter();
const refNoShadow:Ref<boolean> = ref(props.noShadow)

const routerHandler = (path: string) => {
  if (path) {
    router.push({ path: path });
  }
};
</script>

<template>
  <div class="card">
    <span v-if="header" class="card-header" v-html="header+'<hr>'"></span>
    <span class="card-description" :class="{hasntShadow : (refNoShadow === true)}"><slot></slot></span>
    <!-- @vue-ignore -->
    <note-button v-if="!(deleteButton === true)" text="Learn More" @click="routerHandler(path)" />
  </div>
</template>
