<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps({
  indentLeft: { type: String, default: "260" },
  indentTop: { type: String, default: "0" },
});

const containerStyle = reactive({
  padding: `${props.indentTop}px ${props.indentLeft}px`,
});
</script>
<template>
  <div class="container" >
    <slot></slot>
  </div>
</template>

<style>
.container {
  display: flex;
  padding: 20px 10%;
}
</style>
