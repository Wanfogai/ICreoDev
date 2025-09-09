<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps({
  indentLeft: { type: String, default: "0" },
  indentTop: { type: String, default: "0" },
});

const containerStyle = reactive({
  padding: `${props.indentTop} ${props.indentLeft}`,
});
</script>
<template>
  <div :style="containerStyle" class="">
    <slot></slot>
  </div>
</template>
