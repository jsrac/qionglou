<template>
  <div class="ql-skeleton-item" :style="{width: width, height: height}"></div>
</template>

<script setup lang="ts">
import {computed, defineProps} from 'vue';
defineOptions({ name: 'QlSkeletonItem' })
import { Props } from './props';
const props = defineProps(Props)
const { variant, width, height} = props
</script>

<style scoped>
@keyframes loading {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.ql-skeleton-item {
  background-color: #f2f2f2;
  animation: loading 1.5s infinite;
}
</style>
