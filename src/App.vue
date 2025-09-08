<script setup lang="ts">
import {
  Header,
  SearchPanel,
  Container,
  Footer,
  HeroBlock,
} from "./components/widgets";
</script>

<template>
  <Container
    class="flex-col bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(25,0,246,0.2)_50%,rgba(0,0,0,0.7)_100%)]"
  >
    <Header class="head"></Header>
    <SearchPanel />
    <HeroBlock />
    <Footer />
  </Container>
</template>

<style scoped>
.head {
  margin-bottom: 20px;
}
</style>
