<script setup lang="ts">
import { ServiceCard } from "./components";
import ServiceCardModel from "./components/ui/ServiceCard/models/ServiceCardModel";
import {
  Header,
  SearchPanel,
  Container,
  Footer,
  HeroBlock,
} from "./components/widgets";

const row1 = [
  new ServiceCardModel("LiveRec.jpg", "Живая съёмка", 100, true),
  new ServiceCardModel("Gifs.jpg", "Гифки", 75, false),
  new ServiceCardModel("DoneTemplate.jpg", "Готовые шаблоны", 150, true),
];

const row2 = [
  new ServiceCardModel("Animations.jpg", "Анимации", 33, true),
  new ServiceCardModel("Futa.jpg", "Футажи", 150, false),
  new ServiceCardModel("Sounds.jpg", "Звуки", 33, true),
];
</script>

<template>
  <Container
    class="flex-col bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(25,0,246,0.2)_50%,rgba(0,0,0,0.7)_100%)]"
  >
    <Header class="head" />
    <SearchPanel />
    <HeroBlock class="mb-[60px]" />

    <Container
      indent-left="260px"
      class="flex gap-4 w-full overflow-x-auto mb-[1%]"
    >
      <ServiceCard v-for="(card, i) in [...row1]" :key="i" :model="card" />
    </Container>
    <Container
      indent-left="260px"
      class="flex gap-4 w-full overflow-x-auto mb-[4%]"
    >
      <ServiceCard v-for="(card, i) in [...row2]" :key="i" :model="card" />
    </Container>

    <Footer />
  </Container>
</template>

<style scoped>
.head {
  margin-bottom: 20px;
}
</style>
