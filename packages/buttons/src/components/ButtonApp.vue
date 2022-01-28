<template>
  <button :class="[computeStyle]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType, toRefs, computed } from 'vue';

enum EStyleButton {
  BORDER = 'BORDER',
  PLAIN = 'PLAIN'
}

const props = defineProps({
  style: { type: String as unknown as PropType<EStyleButton>, default: 'PLAIN' },
  primary: { type: String, default: 'blue-500' }
})

const { style, primary } = toRefs(props);

const computeStyle = computed(() => {

  if (style.value === EStyleButton.PLAIN) {
    return `rounded p-2 px-5 bg-${primary.value} text-white hover:shadow-lg transform hover:scale-105 duration-300 whitespace-nowrap`
  }
  else if (style.value === EStyleButton.BORDER) {
    return `rounded p-2 px-5 border border-${primary.value} text-white hover:shadow-lg transform hover:scale-105 duration-300 whitespace-nowrap`;
  }

  return 'bg-red-500'
})

</script>
