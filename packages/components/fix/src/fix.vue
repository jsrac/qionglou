<template>
  <!-- Fixed container -->
  <!-- 固定容器 -->
  <div :class="`${positionClass} ql-fix`" :style="{ zIndex: zIndex }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Props } from "./props";

const props = defineProps(Props)
const { position, zIndex } = props;

// Compute the class based on the position prop
// 根据 position 属性计算样式类
const positionClass = computed(() => {
  return [`ql-fix-${position}`];
});
</script>
