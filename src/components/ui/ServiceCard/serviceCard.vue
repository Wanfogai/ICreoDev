<template>
  <div class="px-[16px] w-[159px] pt-[12px] relative md:hidden flex">
    <span class="md:hidden flex font-unbounded text-white font-bold mr-3">
      {{ model.text }}
    </span>

    <div
      class="absolute inset-0 rounded-[20px] p-[1px] h-[125px] bg-gradient-to-b from-white/30 to-[#04002f4d]"
      style="
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      "
    ></div>
  </div>

  <div
    class="relative flex pb-[20px] px-[40px] md:min-h-[260px] min-h-[89px] md:w-auto w-[159px] items-end rounded-[20px] overflow-hidden"
    :style="CardStyle"
  >
    <!-- Градиентная рамка -->
    <div
      class="absolute inset-0 rounded-[20px] p-[1px] bg-gradient-to-b from-white/30 to-[#04002f4d]"
      style="
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      "
    ></div>
    <!-- Контент -->
    <UiButton
      class="relative z-10 py-[30px] w-full hidden md:flex bg-[rgba(255,255,255,0.7)] rounded-[100px] flex justify-center border-white border-[1px]"
    >
      <span class="font-unbounded text-2xl font-bold mr-3">
        {{ model.text }}
      </span>
      <Icon icon="GoTo" />
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { UiButton } from "../UIButton";
import { Icon } from "../UIIcon";
import ServiceCardModel from "./models/ServiceCardModel";

const props = defineProps({
  model: {
    type: ServiceCardModel,
    default: new ServiceCardModel("none", "Кнопка", 90, true),
  },
});

const CardStyle = computed(() => {
  const style: Record<string, string> = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (props.model.background) {
    style.backgroundImage = `url(/images/${props.model.background})`;
  }

  if (props.model.autoWrap) {
    style.flex = "1 1 100%";
  } else {
    style.flex = `1 1 ${props.model.size}%`;
  }

  return style;
});
</script>
