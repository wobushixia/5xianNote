<script lang="ts" setup>
import { onMounted, ref, type Ref } from "vue";
import Card from "@/components/Card/index.vue";
import articles from "@/layout/Articles/Articles.ts";
import PersonalCard from "../../prefab/PersonalCard.vue";
import announcements from "./lib/announcement";
import LRLayout from '@/components/LRLayout/index.vue'

const articlesAmount = articles.length;
const dateToday = new Date().getDay().toString();
let storedSentence:Ref<string | null> = ref('waiting for sentence...')
let storedAuthor:Ref<string | null> = ref('waiting for author...')
let storedDate:Ref<string | null> = ref("waiting for date...")

onMounted(async () => {
  storedSentence.value = window.localStorage.getItem("today_sentence");
  storedAuthor.value = window.localStorage.getItem('today_author')
  storedDate.value = window.localStorage.getItem("today");
  if (storedSentence.value === null || storedDate.value !== dateToday) {
    try {
      const response = await fetch("https://open.saintic.com/api/sentence/all");
      const data = await response.json();

      window.localStorage.setItem("today_sentence", data.data.sentence);
      window.localStorage.setItem("today_author", data.data.author);
      window.localStorage.setItem("today", dateToday);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
  const articlesContainer = document.querySelector("#home-articles-alert");
  if (articlesAmount === 0) {
    (articlesContainer as Element).innerHTML = `there isn't anyting here`;
  } else {
    (articlesContainer as HTMLElement).innerHTML = `文章数量:${articlesAmount}<br/>`
    articles.forEach((ele: { id: number; title: any }) => {
      (articlesContainer as Element).innerHTML += `${ele.id + 1}:${
        ele.title
      }<br/>`;
    });
  }
});
</script>
<template>
  <LRLayout>
    <template #left>
      <personal-card />

      <card deleteButton noShadow header="日句">
        <div style="text-align: center" id="home-sentences">
          Sentence:<br/><span class="roboto">{{ storedSentence }}</span><br/>
          Author:<br/><span class="roboto">{{ storedAuthor }}</span>
        </div>
      </card>

      <card deleteButton noShadow header="文章">
        <div
          style="
            display: flex;
            width: 100%;
            justify-content: center;
            font-family: roboto;
          "
          id="home-articles"
        ></div>
        <div id="home-articles-alert" style="text-align: center"></div
      ></card>
    </template>
    <template #right>
      <card header="Announcement" deleteButton>
        <h3 class="announcement-title" :style="'family-font:roboto'">
          {{ announcements[0].title }}
        </h3>
        <div class="announcement-content">{{ announcements[0].content }}</div>
      </card>
      <card
        v-if="articles[0]"
        :header="articles[0].id + ':' + articles[0].title"
        :key="articles[0].id"
        :path="'/articles/' + articles[0].id"
      >
        {{ articles[0].description }}
    </card>
    <card header="更多文章" path="/Articles"><div v-for="article in articles" style="text-align: center;" :key="article.id">{{ article.id +':'+ article.title }}</div></card>
    </template>
  </LRLayout>
</template>

<style lang="scss" scoped>
@use '@/lib/dependencies.scss'


</style>