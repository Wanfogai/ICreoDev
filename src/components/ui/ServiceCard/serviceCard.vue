<template>
  <div
    class="flex pb-[20px] px-[40px] min-h-[260px] items-end border-[1px] border-white rounded-[20px]"
    :style="CardStyle"
  >
    <UiButton
      class="py-[30px] w-full bg-[rgba(255,255,255,0.7)] rounded-[100px] flex justify-center border-white border-[1px]"
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
    style.backgroundImage = `url(/src/assets/images/${props.model.background})`;
  }

  if (props.model.autoWrap) {
    style.flex = "1 1 100%";
  } else {
    style.flex = `1 1 ${props.model.size}%`;
  }

  return style;
});
</script>
