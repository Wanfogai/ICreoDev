<script setup lang="ts">
import { Icon } from "../ui";
import { Container } from ".";
import { ref } from "vue";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const openIndex = ref();

const footerSections: Array<{
  title: String;
  links: Array<{ name: String; rout: String }>;
}> = [
  {
    title: "Ссылки",
    links: [
      { name: "FAQ", rout: "#" },
      { name: "Аудио", rout: "#" },
      { name: "Живая съемка (UGC)", rout: "#" },
      { name: "Шаблоны AE", rout: "#" },
      { name: "Ассеты слотов", rout: "#" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { name: "Telegram", rout: "" },
      { name: "youremail@gmail.com", rout: "" },
    ],
  },
];
</script>
<template>
  <Container
    class="bg-black flex flex-col md:flex-row justify-start items-start md:py-[40px] md:px-[378px]"
  >
    <Container class="flex flex-col justify-between w-full py-[20px] px-40px">
      <Container
        class="flex md:flex-row flex-col items-center justify-between py-[20px]"
      >
        <div class="flex flex-col md:items-start items-center mx-5 items-start">
          <Icon icon="ICreo" class="mb-3"></Icon>
          <span
            class="text-white leading-5 text-center md:text-start font-rubik font-normal text-base"
            >Маркетплейс для креативщиков <br />арбитражного коммьюнити,
            <br />никаких ограничений по контенту.</span
          >
        </div>
        <div class="md:hidden w-full px-[32px]">
          <div
            v-for="(section, i) in footerSections"
            :key="i"
            class="border-b border-gray-700 w-full"
          >
            <button
              @click="openIndex = openIndex === i ? null : i"
              class="w-full flex justify-between items-center py-4 text-left font-semibold text-lg"
            >
              <span class="text-white">{{ section.title }}</span>
              <svg
                :class="[
                  'w-6 h-6 text-white transform transition-transform duration-300 ease-in-out',
                  openIndex === i ? 'rotate-180' : 'rotate-0',
                ]"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <transition name="accordion">
              <ul
                v-if="openIndex === i"
                class="pl-2 pb-4 space-y-2 text-gray-400 text-sm w-full"
              >
                <li v-for="link in section.links" :key="link.name.toString()">
                  <a
                    :href="link.rout.toString()"
                    class="hover:text-white transition"
                    >{{ link.name }}</a
                  >
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <div class="text-white hidden md:flex flex-col mx-5 items-start">
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
        <div
          class="text-white hidden md:flex flex-col mx-5 items-start justify-start"
        >
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
          <img src="/images/TgQr.png" class="w-40 md:flex hidden h-40" />
        </div>
      </Container>

      <Container class="flex flex-col items-center py-[40px]">
        <div
          class="border-solid border border-[rgba(217, 217, 217, 0.5)] opacity-40 rounded-sm w-full mb-10"
        />
        <span class="text-white font-rubik opacity-40"
          >COPYRIGHT © 2025 All rights Reserved</span
        >
      </Container>
    </Container>
    <Container class="md:flex hidden py-[40px] mx-[63px]">
      <button @click="scrollToTop"><Icon icon="UpPage"></Icon></button>
    </Container>
  </Container>
</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* запас по высоте */
  opacity: 1;
}
</style>
