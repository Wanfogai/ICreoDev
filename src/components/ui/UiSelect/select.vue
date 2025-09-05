<template>
  <div class="dropdown">
    <button @click="open = !open" class="dropdown-btn">
      <span>{{ selected }}</span>
      <span class="arrow" :class="{ open: open }">▼</span>
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

const items = ["Элементы", "Наркота", "Люди"];
const selected = ref(items[0]);
const open = ref(false);

function select(item) {
  selected.value = item;
  open.value = false;
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  width: 95px;
  font-family: "Rubik", sans-serif;
}

/* Кнопка */
.dropdown-btn {
  display: flex;
  justify-content: space-between;
  font-family: "Rubik", sans-serif;
  align-items: center;
  width: 100%;
  background: transparent; /* кнопка прозрачная */
  color: white;
  border: none;
  cursor: pointer;
  padding: 0px 0px;
  font-size: 14px;
  
}

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
