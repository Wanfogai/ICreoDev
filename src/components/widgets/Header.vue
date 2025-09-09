<script setup lang="ts">
import { ref } from "vue";
import { Icon, IconTypeEnum, UiButton, UISelect } from "../ui";
import Container from "./Container.vue";

const langChosen = ref<IconTypeEnum>("LangRu");

const options = [
  { value: IconTypeEnum.LangRu, text: "RU" },
  { value: IconTypeEnum.LangUa, text: "UA" },
  { value: IconTypeEnum.LangEn, text: "EN" },
];
</script>

<template>
  <Container
    class="bg-black justify-between flex"
    indent-top="20px"
    indent-left="260px"
  >
    <!-- Левая часть -->
    <div class="flex items-center">
      <router-link to="/" class="rout logo">
        <Icon icon="ICreo" />
      </router-link>

      <div class="mx-6 h-[50px] opacity-15 border border-white rounded-[1px]" />

      <div class="flex items-center space-x-6">
        <router-link to="/" class="rout text-white hover:underline">
          Аудио
        </router-link>
        <router-link to="/" class="rout text-white hover:underline">
          Живая съемка (UGC)
        </router-link>
        <router-link to="/" class="rout text-white hover:underline">
          Шаблоны AE
        </router-link>
        <router-link to="/" class="rout text-white hover:underline">
          Ассеты слотов
        </router-link>
      </div>
    </div>

    <!-- Правая часть -->
    <div class="flex items-center">
      <div class="flex items-center mr-5 text-white">
        <Icon :icon="langChosen" />
        <UISelect v-model="langChosen" :items="options" class="ml-2" />
      </div>

      <UiButton
        class="flex items-center font-bold text-white bg-[#7728ff] rounded-full px-6 py-2 mr-5"
      >
        <Icon icon="Crown" class="mr-2" />
        Больше с премиум подпиской
      </UiButton>

      <UiButton
        class="text-white border border-white rounded-full px-6 py-2 bg-transparent"
      >
        Вход
      </UiButton>
    </div>
  </Container>
</template>
