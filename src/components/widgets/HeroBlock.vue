<script setup lang="ts">
import { Container } from ".";
import { UiButton } from "../ui";
</script>
<template>
  <Container
    class="bg-black font-unbounded flex flex-col items-center rounded-[32px] mx-[260px] mt-[100px] h-min bg-[linear-gradient(90deg,rgba(0,0,0,0.49)_0%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0.5)_100%),url('/src/assets/images/HeroBack.png')] bg-cover bg-center"
  >
    <div
      class="absolute left-[130px] -rotate-[9deg] bg-[#7728ff4d] backdrop-blur-md text-white rounded-[32px] px-8 py-5 flex items-center text-2xl font-bold"
    >
      Умеешь создавать крутые вещи?
    </div>
    <Container class="flex font-bold text-5xl mb-[80px]">
      <Container>
        <span
          class="text-white flex flex-col items-start pt-[237px] px-[80px] pl-[83px] leading-[60px]"
          ><span>Стань автором</span>
          <span class="text-[#7728ff]">ЗАРАБАТЫВАЙ!</span>
        </span>
      </Container>
      <Container>
        <span
          class="text-white flex flex-col items-end pt-[237px] pr-[80px] pl-[83px] leading-[60px]"
          ><span>Не трать время</span>
          <span class="text-[#7728ff]">ПОЛЬЗУЙСЯ!</span>
        </span>
      </Container>
    </Container>
    <Container class="flex flex-col items-center">
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
