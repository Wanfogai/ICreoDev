<script setup lang="ts"></script>
<template>
  <div class="button-container">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
</style>
