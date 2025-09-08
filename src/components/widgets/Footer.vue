<script setup lang="ts">
import { Icon } from "../ui";
import { Container } from ".";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
<template>
  <Container
    indent-left="13%"
    class="bg-black flex flex-row justify-start items-start"
    indent-top="40px"
  >
    <Container
      class="flex flex-col justify-between w-full"
      indent-top="20px"
      indent-left="40px"
    >
      <Container class="flex justify-between" indent-top="20px">
        <div class="flex flex-col mx-5 items-start">
          <Icon icon="ICreo" class="mb-3"></Icon>
          <span
            class="text-white leading-5 text-start font-rubik font-normal text-base"
            >Маркетплейс для креативщиков <br />арбитражного коммьюнити,
            <br />никаких ограничений по контенту.</span
          >
        </div>
        <div class="text-white flex flex-col mx-5 items-start">
          <h1 class="font-rubik mb-2 font-bold">Ссылки</h1>
          <div
            class="text-[rgb(255, 255, 255)] opacity-70 flex flex-col items-start"
          >
            <router-link to="/" class="rout header-link mb-1">
              <span>FAQ</span>
            </router-link>
            <router-link to="/" class="rout header-link mb-1">
              <span>Аудио</span>
            </router-link>
            <router-link to="/" class="rout header-link mb-1">
              <span>Живая съемка (UGC)</span>
            </router-link>
            <router-link to="/" class="rout header-link mb-1">
              <span>Шаблоны AE</span>
            </router-link>
            <router-link to="/" class="rout header-linkmb-1">
              <span>Ассеты слотов</span>
            </router-link>
          </div>
        </div>
        <div class="text-white flex flex-col mx-5 items-start justify-start">
          <h1 class="font-rubik mb-2 font-bold">Контакты</h1>
          <div class="text-[rgb(255, 255, 255)] opacity-70 flex flex-col">
            <span class="flex">
              <Icon icon="Telegram" class="mr-2 mt-1 mb-2"></Icon>
              <a href="mailto:someone@example.com" class="font-rubik"
                >Telegram</a
              >
            </span>
            <span class="flex">
              <Icon icon="Mail" class="mr-2 mt-1"></Icon>
              <a href="mailto:someone@example.com" class="font-rubik"
                >youremail@gmail.com</a
              >
            </span>
          </div>
        </div>
        <div>
          <img src="/src/assets/images/TgQr.png" class="w-40 h-40" />
        </div>
      </Container>

      <Container class="flex flex-col items-center" indent-top="40px">
        <div
          class="border-solid border border-[rgba(217, 217, 217, 0.5)] opacity-40 rounded-sm w-full mb-10"
        />
        <span class="text-white font-rubik opacity-40"
          >COPYRIGHT © 2025 All rights Reserved</span
        >
      </Container>
    </Container>
    <Container class=" " indent-top="40px">
      <button @click="scrollToTop"><Icon icon="UpPage"></Icon></button>
    </Container>
  </Container>
</template>
