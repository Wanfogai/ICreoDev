<script setup lang="ts">
import { onMounted, ref, watch, type PropType } from "vue";
import { IconTypeEnum } from "./enums/IconTypeEnum";

const props = defineProps({
  icon: { type: String as PropType<IconTypeEnum>, required: true },
});

const currentIcon = ref("");

const icons = import.meta.glob("../../../assets/icons/*Icon.svg", {
  eager: true,
  import: "default",
});

onMounted(async () => {
  const key = `../../../assets/icons/${props.icon}Icon.svg`;
  currentIcon.value = icons[key] as string;
});

watch(
  () => props.icon,
  async (newIcon) => {
    if (!newIcon) return;
    const key = `../../../assets/icons/${newIcon}Icon.svg`;
    currentIcon.value = icons[key] as string;
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex">
    <img :src="currentIcon" :alt="'icon:' + icon" />
  </div>
</template>
