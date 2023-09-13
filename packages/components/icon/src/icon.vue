<template>
  <!-- Icon container -->
  <!-- 图标容器 -->
  <div class="icon-container">
    <div v-if="type === 'font'" class="ql-icon_font">
      <!-- Render Font Icon using QlText component -->
      <!-- 使用 QlText 组件渲染字体图标 -->
      <ql-text
          :style="{ width: widthSize, height: highSize }"
          :class="[aniClass]"
          :url="url"
          :font="font"
          :color="color"
      >
        {{ src }}
      </ql-text>
      <!-- Render additional text for the icon -->
      <!-- 渲染图标的附加文本-->
      <ql-text
          :weight="weight"
          :size="size"
          :color="color"
          :url="url"
          :font="font"
      >
        {{ alt }}
      </ql-text>
    </div>
    <div v-else-if="type === 'img'" class="ql-icon">
      <!-- Render Image Icon with optional QlText component -->
      <!-- 使用可选的 QlText 组件渲染图片图标-->
      <img :src="src" :alt="alt" :style="{ width: widthSize, height: highSize }" />
      <!-- Render additional text for the icon -->
      <!-- 渲染图标的附加文本-->
      <ql-text
          :weight="weight"
          :size="size"
          :color="color"
          :url="url"
          :font="font"
      >
        {{ alt }}
      </ql-text>
    </div>
    <div v-else>
      <!-- Error message for unknown icon type -->
      <!-- 未知图标类型的错误消息 -->
      <p>Icon: Error Type</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Props } from "./props";
import QlText from "../../text";

defineOptions({name: 'QlIcon'})

const { src, type, alt, weight, size, ani, wide, high, font, url, color } = defineProps(Props);

// Calculate width size
// 计算宽度尺寸
const widthSize = computed(() => {
  if (typeof wide === 'number') {
    return `${wide}px`
  } else {
    // Map size options to pixel values
    // 将尺寸选项映射为像素值
    const sizeOptions: Record<string, string> = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }
    return sizeOptions[wide] || wide // Return the size if it's not a valid option
                                     // 如果不是有效选项，则返回尺寸本身
  }
})

// Calculate height size
// 计算高度尺寸
const highSize = computed(() => {
  if (typeof high === 'number') {
    return `${high}px`
  } else {
    // Map size options to pixel values
    // 将尺寸选项映射为像素值
    const sizeOptions: Record<string, string> = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }
    return sizeOptions[high] || high // Return the size if it's not a valid option
                                    // 如果不是有效选项，则返回尺寸本身
  }
})

// Calculate animation class based on animation type
// 根据动画类型计算动画类名
const aniClass = computed(() => {
  if (ani === 'rotate') {
    return 'rotate-animation';
  } else if (ani === 'linear') {
    return 'linear-animation';
  } else {
    return '';
  }
})
</script>

<style scoped>
</style>
