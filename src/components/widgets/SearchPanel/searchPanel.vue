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
  <Container class="justify-between" indent-top="20px" indent-left="10%">
    <div
      class="flex border-solid border-2 border-slate-700 rounded-2xl px-4 py-5 items-center w-full"
    >
      <div>
        <UISelect
          v-model="categoryType"
          :items="options"
          class="font-rubik text-lg"
        />
      </div>
      <div
        class="flex border-solid border h-5 border-white rounded-2xl mx-5 opacity-20"
      />
      <div class="flex w-full">
        <Icon icon="Search" class="mr-5"></Icon>
        <input
          type="text"
          placeholder="Поиск"
          class="w-full font-rubik text-white bg-transparent border-none outline-none"
        />
      </div>
    </div>
  </Container>
</template>
<style lang="scss" scoped></style>
