<template>
  <div class="relative inline-block font-rubik w-24">
    <button @click="open = !open" class="flex justify-between font-rubik content-center w-full bg-transparent text-white border-none cursor-pointer p-0 text-sm">
      <span>{{ selected }}</span>
      <span class="arrow" :class="{ open: open }">
        <Icon icon="Arrow"></Icon>
      </span>
    </button>

    <ul v-if="open" class="dropdown-list">
      <li
        v-for="item in items"
        :key="item"
        @click="select(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "../UIIcon";

const items = ["Элементы", "Наркота", "Люди"];
const selected = ref(items[0]);
const open = ref(false);

function select(item) {
  selected.value = item;
  open.value = false;
}
</script>

<style scoped>

/* Список */
.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  width: 100%;
  background: #1e1e1e;
  color: white;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  overflow: hidden;
  z-index: 10;

  /* убираем отступы и маркеры */
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-list li {
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-list li:hover {
  background: #333;
}

/* Стрелка */
.arrow {
  transition: transform 0.2s;
}

.arrow.open {
  transform: rotate(180deg);
}
</style>
