<template>
  <div ref="wrapper" class="relative inline-block font-rubik min-w-max">
    <button
      @click="toggle"
      class="flex items-center justify-between gap-2 w-full bg-transparent text-white cursor-pointer text-base"
    >
      <span>{{ selected }}</span>
      <span
        class="transition-transform duration-200 inline-block"
        :class="{ 'rotate-180': open }"
      >
        <Icon icon="Arrow" />
      </span>
    </button>

    <transition
      enter-active-class="transition transform ease-out duration-150"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition transform ease-in duration-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <ul
        v-show="open"
        class="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#1e1e1e] text-white rounded-md z-10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.4)] list-none min-w-max"
      >
        <li
          v-for="item in items"
          :key="item"
          @click="select(item)"
          class="px-3 py-2 cursor-pointer hover:bg-[#333] transition-colors"
        >
          {{ item.text }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, useModel } from "vue";
import { Icon } from "../UIIcon";

const model = defineModel({ type: [String, Number, null], default: null });

const props = defineProps({
  items: { type: Array, default: () => [] },
});

const selected = ref(props.items[0].text);
const open = ref(false);
const wrapper = ref(null);

function toggle() {
  open.value = !open.value;
}
function select(item) {
  selected.value = item.text;
  model.value = item.value;
  open.value = false;
}
function handleClickOutside(e) {
  if (wrapper.value && !wrapper.value.contains(e.target)) open.value = false;
}
onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside)
);
</script>
