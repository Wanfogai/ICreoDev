<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <!-- Кнопка-бургер -->
  <button
    @click="isOpen = !isOpen"
    class="relative w-8 h-8 flex flex-col justify-between items-center p-1 z-20 md:hidden"
  >
    <!-- Линия 1 -->
    <span
      :class="[
        'block w-7 h-0.5 bg-white rounded transition-all duration-300',
        isOpen ? 'rotate-[45deg] translate-y-2' : '',
      ]"
    ></span>

    <!-- Линия 2 -->
    <span
      :class="[
        'block w-7 h-0.5 bg-white rounded transition-all duration-300',
        isOpen ? 'opacity-0' : '',
      ]"
    ></span>

    <!-- Линия 3 -->
    <span
      :class="[
        'block w-7 h-0.5 bg-white rounded transition-all duration-300',
        isOpen ? '-rotate-[45deg] -translate-y-[15px]' : '',
      ]"
    ></span>
  </button>

  <!-- Выезжающее меню -->
  <transition name="slide">
    <div
      v-show="isOpen"
      class="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900 to-black shadow-xl z-40 flex flex-col"
    >
      <!-- Кнопка-крестик внутри меню -->
      <button
        @click="isOpen = false"
        class="self-end m-4 mt-[30px] w-8 h-8 flex flex-col justify-between items-center"
      >
        <span
          class="block w-7 h-0.5 bg-white rounded rotate-[45deg] translate-y-2"
        ></span>
        <span
          class="block w-7 h-0.5 bg-white rounded -rotate-45 -translate-y-[20px]"
        ></span>
      </button>

      <!-- Навигация -->
      <nav class="flex flex-col gap-6 text-lg text-white px-6 mt-6">
        <a href="#">Аудио</a>
        <a href="#">Живая съёмка</a>
        <a href="#">Шаблоны AE</a>
        <a href="#">Ассеты сайта</a>
        <a href="#">FAQ</a>
      </nav>
    </div>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
