<script setup lang="ts">
import { Icon, IconTypeEnum, UiButton } from "./components/ui";
import { Header, SearchPanel,Container, Footer } from "./components/widgets";
</script>

<template>
 <Container class="flex-col bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(25,0,246,1)_50%,rgba(0,0,0,1)_100%)]">


 
  <Container class=" bg-black justify-between" indent-top="20px" indent-left="10%" marginx-10>
  <Header class="head"></Header>
  </Container>
  <Container class=" justify-between" indent-top="20px" indent-left="10%" marginx-10>
    <SearchPanel class="w-full"/>
  </Container>
    
      <Footer/>
    
  
   </Container>
</template>

<style scoped>
.head{
  margin-bottom: 20px;
}
</style>
