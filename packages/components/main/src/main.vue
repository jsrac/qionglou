<template>
  <!-- Main container 主容器 -->
  <div
      class="ql-main"
      :class="[layoutClass, heightClass, widthClass, SiteClass]"
      :style="{ width: computedWidth, height: computedHeight, background: color }"
  >
    <!-- Slot content 插槽内容 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { PropsType } from './props';

defineOptions({ name: 'QlMain' })

const props = defineProps<PropsType>();

// Compute the layout class based on the 'layout' prop.
// 根据'layout' prop计算布局类。
const layoutClass = computed(() => {
  return `ql-main-${props.layout}`;
});

// Compute the site class based on the 'site' prop.
// 根据'site' prop计算位置类。
const SiteClass = computed(() => {
  return `ql-main-site-${props.site}`;
});

// Compute the width based on the 'wide' prop.
// 根据'wide' prop计算宽度。
const computedWidth = computed(() => {
  return props.wide;
});

// Compute the height based on the 'high' prop.
// 根据'high' prop计算高度。
const computedHeight = computed(() => {
  return props.high;
});

// Compute the height class based on the 'high' prop.
// 根据'high' prop计算高度类。
const heightClass = computed(() => {
  return {
    auto: props.high === 'auto',
    'ql-main-height': props.high !== 'auto'
  };
});

// Compute the width class based on the 'wide' prop.
// 根据'wide' prop计算宽度类。
const widthClass = computed(() => {
  return {
    auto: props.wide === 'auto',
    'ql-main-width': props.wide !== 'auto'
  };
});
</script>

<style scoped>
</style>
