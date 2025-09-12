<script setup lang="ts">
import { ref } from "vue";
import { Icon, IconTypeEnum, UiButton, UISelect, BurgerButton } from "../ui";
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
    class="bg-black justify-between flex pt-[20px] md:py-[20px] md:px-[260px]"
  >
    <!-- Левая часть -->
    <div class="flex items-center">
      <div class="md:hidden mx-4">
        <BurgerButton />
      </div>
      <router-link to="/" class="rout logo">
        <Icon icon="ICreo" />
      </router-link>

      <div
        class="hidden md:flex mx-6 h-[50px] opacity-15 border border-white rounded-[1px]"
      />

      <div class="hidden md:flex flex items-center space-x-6">
        <router-link to="/" class="rout text-white"> Аудио </router-link>
        <router-link to="/" class="rout text-white">
          Живая съемка (UGC)
        </router-link>
        <router-link to="/" class="rout text-white"> Шаблоны AE </router-link>
        <router-link to="/" class="rout text-white">
          Ассеты слотов
        </router-link>
      </div>
    </div>

    <!-- Правая часть -->
    <div class="flex items-center">
      <div class="flex items-center mr-5 text-white hidden md:flex">
        <Icon :icon="langChosen" />
        <UISelect v-model="langChosen" :items="options" class="ml-2" />
      </div>

      <UiButton
        class="flex items-center font-bold text-white bg-[#7728ff] rounded-full px-6 py-2 mr-5"
      >
        <Icon icon="Crown" class="" />
        <span class="hidden md:flex ml-2">Больше с премиум подпиской</span>
      </UiButton>

      <UiButton
        class="text-white md:border border-white rounded-full pr-[20px] md:px-6 py-2 bg-transparent"
      >
        <span>Вход</span>
      </UiButton>
    </div>
  </Container>
</template>
