<script setup lang="ts">
import { ref } from "vue";
import { Icon, IconTypeEnum, UiButton, UISelect } from "../ui";
import Container from "./Container.vue";

const langChosen = ref<IconTypeEnum>("LangRu");

const options = [
  { value: IconTypeEnum.LangRu, text: "RU" },
  { value:  IconTypeEnum.LangUa, text: "UA" },
  { value:  IconTypeEnum.LangEn, text: "EN" },
];
</script>
<template>
  
    <div class="navigation-container">
      <router-link to="/" class="rout logo">
        <Icon icon="ICreo"></Icon>
      </router-link>
      <div class="dellimiter" />
      <div class="header-links">
        <router-link to="/" class="rout header-link">
          <span>Аудио</span>
        </router-link>
        <router-link to="/" class="rout header-link">
          <span>Живая съемка (UGC)</span>
        </router-link>
        <router-link to="/" class="rout header-link">
          <span>Шаблоны AE</span>
        </router-link>
        <router-link to="/" class="rout header-link">
          <span>Ассеты слотов</span>
        </router-link>
      </div>
    </div>
    <div class="control-button">
      <div class="lang-changer w-text">
        <Icon :icon="langChosen"></Icon>
        <UISelect v-model="langChosen" :items="options" class="ml-2"/>
      </div>
      <UiButton class="header-button premium-button w-text"
        ><Icon icon="Crown" class="premium-icon"></Icon
        ><span>Больше с премиум подпиской</span></UiButton
      >
      <UiButton class="header-button login-button w-text">Вход</UiButton>
    </div>
</template>
<style>
.dellimiter {
  border-radius: 1px;
  height: 50px;
  opacity: 15%;
  border: 1px solid #fff;
  margin: 0 24px;
}

.control-button {
  display: flex;
  align-items: center;
}

.navigation-container {
  display: flex;
}

.header-links {
  display: flex;
  align-items: center;
}

.header-button {
  margin-right: 20px;
}

.premium-icon {
  margin-right: 8px;
}

.premium-button {
  background-color: #7728ff;
  padding: 10px 24px;
  border-radius: 100px;
  font-weight: bold;
}

.login-button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100px;
  padding: 10px 24px;
}

.lang-changer {
  display: flex;
  align-items: center;
  justify-self: unset;
  margin-right: 20px;
}
</style>
