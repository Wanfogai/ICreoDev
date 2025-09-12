<script setup lang="ts">
import { ref } from "vue";
import { Icon, UISelect } from "../../ui";
import { Container } from "..";

const categoryType = ref("Элементы");
const options = [
  { value: "Elements", text: "Элементы" },
  { value: "humans", text: "Люди" },
  { value: "drugs", text: "Наротики" },
];
</script>
<template>
  <Container
    class="relative z-20 justify-between mt-[20px] md:mt-0 md:py-[20px] md:px-[260px]"
  >
    <div
      class="flex gap-2 border-solid md:border-2 rounded-b-[12px] border-[2px] md:border-slate-700 border-gray-900 md:rounded-2xl px-4 py-5 items-center w-full"
    >
      <UISelect
        v-model="categoryType"
        :items="options"
        class="font-rubik text-lg order-4 md:order-1"
      />

      <div
        class="flex border-solid order-3 md:order-2 border h-6 border-white rounded-2xl md:mx-5 md:mr-3 opacity-15"
      />
      <Icon icon="Search" class="md:mr-2 w-[30px] order-2 md:order-3"></Icon>
      <input
        type="text"
        placeholder="Поиск"
        class="w-full font-rubik order-1 md:order-4 text-white bg-transparent border-none outline-none"
      />
    </div>
  </Container>
</template>
<style lang="scss" scoped></style>
