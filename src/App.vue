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
    class="flex-col w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(25,0,246,0.2)_50%,rgba(0,0,0,0.7)_100%)]"
  >
    <Header />
    <SearchPanel />
    <HeroBlock class="md:mb-[60px]" />

    <div class="md:block hidden">
      <Container class="flex gap-4 w-full overflow-x-auto mb-[1%] px-[260px]">
        <ServiceCard v-for="(card, i) in [...row1]" :key="i" :model="card" />
      </Container>
      <Container class="flex gap-4 w-full overflow-x-auto mb-[4%] px-[260px]">
        <ServiceCard v-for="(card, i) in [...row2]" :key="i" :model="card" />
      </Container>
    </div>
    <div class="md:hidden items-center flex flex px-[20px]">
      <Container class="flex flex-col gap-4 w-full mb-[20px] overflow-x-auto">
        <ServiceCard v-for="(card, i) in [...row1]" :key="i" :model="card" />
      </Container>
      <Container class="flex flex-col gap-4 w-full overflow-x-auto">
        <ServiceCard v-for="(card, i) in [...row2]" :key="i" :model="card" />
      </Container>
    </div>

    <Footer />
  </Container>
</template>
