<script setup lang="ts">
import "./style.scss";
import reference from "./reference";
import { useRouter } from "vue-router";

const router = useRouter()

const routerHandler = (path:string) => {
    router.push({path:`${path}`})
}
</script>

<template>
  <div id="top-bar">
    <ul>
        <img id="logo" src="/logo-lg.png" alt="5xianNote" @click="router.push({path:'/'})"/>
      <li v-for="comp in reference" :key="comp.id" @click="routerHandler('/'+comp.name)">
        {{ comp.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

ul {
    display: flex;
    flex-direction: row;
    justify-content: center; /* 使ul中的li居中 */
    margin-left: 10%;
}

li {
    list-style: none;
    margin-right: 20px; /* 保留每个li之间的间距 */
    flex: 1; /* 使li均匀分布 */
    color:gray;
    font-family: "roboto-Light";
    padding: 5px;
    cursor: pointer;
    transition: 0.2s;
}

img{
  cursor:pointer;
}

li:hover{
    background-color: rgba(99, 99, 99, 0.11);
}
</style>