<script setup lang="ts">
import { Container } from ".";
import { UiButton } from "../ui";
</script>
<template>
  <Container
    class="font-unbounded mb-[40px] flex flex-col items-center md:rounded-[32px] md:mx-[260px] md:mt-[100px] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.49)_0%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0.5)_100%),url('/images/HeroBack.png')] bg-cover bg-center"
  >
    <div
      class="hidden md:flex absolute left-[199px] -rotate-[8deg] bg-[#7728ff4d] backdrop-blur-md text-white rounded-[32px] px-8 py-5 flex items-center text-2xl font-bold"
    >
      Умеешь создавать крутые вещи?
    </div>
    <Container
      class="md:flex flex md:flex-row items-center z-10 w-full flex-col font-bold text-[20px] md:text-5xl md:mb-[80px]"
    >
      <Container class="w-full">
        <span
          class="text-white flex flex-col md:pt-[237px] md:px-[80px] m-[16px] md:pl-[83px] md:leading-[60px]"
          ><span>Стань автором</span>
          <span class="text-[#7728ff]">ЗАРАБАТЫВАЙ!</span>
        </span>
      </Container>
      <UiButton
        class="md:hidden font-bold font bg-white text-[16px] px-[20px] py-[12px] rounded-[100px] w-max"
        >Регистрация</UiButton
      >
      <Container class="w-full">
        <span
          class="text-white flex flex-col items-end md:pt-[237px] md:pr-[80px] m-[16px] md:pl-[83px] md:leading-[60px]"
          ><span>Не трать время</span>
          <span class="text-[#7728ff]">ПОЛЬЗУЙСЯ!</span>
        </span>
      </Container>
    </Container>
    <div
      class="md:hidden absolute top-[93px] w-full h-[320px] overflow-hidden z-0 opacity-50"
    >
      <img
        src="/images/HeroBack.png"
        alt=""
        class="absolute w-[613px] min-h-[342px] mt-[35px] object-cover object-[50%_%]"
      />

      <div
        class="absolute inset-0"
        style="
          background: radial-gradient(
              56.85% 63.35% at 50% 50%,
              rgba(0, 0, 0, 0.1) 0%,
              rgba(4, 1, 45, 0.6) 99%
            ),
            linear-gradient(
              180deg,
              rgba(4, 1, 0, 1) 0%,
              rgba(4, 1, 46, 0.2) 20%,
              rgba(4, 1, 46, 0.1) 81.68%,
              rgba(0, 0, 0, 1) 100%
            );
        "
      ></div>
    </div>

    <Container class="md:flex hidden flex-col items-center">
      <span class="font-medium text-2xl text-white mb-6 font-rubik"
        >Видео, звуки, гифки, шаблоны, футажи, motion-ассеты — всё в одном
        месте</span
      >
      <UiButton
        class="text-2xl font-bold font bg-white px-8 py-5 rounded-[100px] w-max mb-[40px]"
        >Регистрация</UiButton
      >
    </Container>
  </Container>
</template>
