<script setup lang="ts">
import { Icon, IconTypeEnum, UiButton } from "./components/ui";
import { Header, SearchPanel } from "./components/widgets";
</script>

<template>
  <Header class="head"></Header>
  <SearchPanel/>
</template>

<style scoped>
.head{
  margin-bottom: 20px;
}

.select{
 background-color: black;
  color: #fff;
  border: none;
  font-size: 16px;
}

</style>
