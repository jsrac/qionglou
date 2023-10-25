<template>
  <div
      class="ql-text"
      :class="[fontClass, themeClass, { 'inline-block-layout': props.layout === 'justify' }]"
      :style="{ fontSize: computedSize, color: props.color, fontWeight: weightClass, textAlign: textLayout, lineHeight: lineClass, ...customStyles }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

import { computed, defineProps, onMounted } from 'vue';

// Import props.ts interface
// 导入属性接口
import { Props } from "./props";

// Define component name
// 定义组件名称
defineOptions({
  name: 'QlText'
});

// Get props.ts
// 获取属性
const props = defineProps(Props)

// Compute theme class
// 计算主题样式类
const themeClass = computed(() => {
  return typeof props.theme === 'string' ? `ql-text-theme-${props.theme}` : '';
});

// Compute custom styles
// 计算自定义样式
const customStyles = computed(() => {
  return typeof props.theme === 'object' ? props.theme : {};
});

// Compute text layout
// 计算文本布局
const textLayout = computed(() => {
  const layoutOptions = {
    center: 'center',
    left: 'left',
    right: 'right',
    justify: 'justify',
  };
  return layoutOptions[props.layout] || props.layout;
});

// Compute font weight
// 计算字体粗细
const weightOptions = {
  demiLight: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};
const weightClass = computed(() => {
  return typeof props.weight === 'number' ? `${props.weight}` : weightOptions[props.weight] || props.weight;
});

// Compute font class
// 计算字体样式类
const fontClass = computed(() => {
  return `ql-text-custom-font-${getValidFontName(props.font)}-${getValidUrl(props.url)}`;
});

// Compute font size
// 计算字体大小
const sizeOptions = {
  small: '14px',
  medium: '16px',
  large: '18px',
};
const computedSize = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : sizeOptions[props.size] || props.size;
});

// Compute line height
// 计算行高
const lineOptions = {
  small: '14px',
  medium: '16px',
  large: '18px',
  bigger: '25px'
};
const lineClass = computed(() => {
  return typeof props.high === 'number' ? `${props.high}px` : lineOptions[props.high] || props.high;
});

// Filter invalid characters
// 过滤无效字符
const getValidFontName = (name: string): string => {
  return name.replace(/[^\w]/g, '').substring(0, 20);
};

const getValidUrl = (url: string): string => {
  return url.replace(/[^\w]/g, '').substring(0, 20);
};

// Apply custom font on mount
// 挂载时应用自定义字体
onMounted(() => {

  // Check if custom font provided
  // 检查是否提供了自定义字体
  if (props.url && props.font) {

    // Generate style ID
    // 生成样式ID
    const styleId = `ql-text-custom-font-${getValidFontName(props.font)}-${getValidUrl(props.url)}`;

    // Get existing style element
    // 获取已存在的样式元素
    let style = document.getElementById(styleId);

    // Create if not exists
    // 若不存在则创建
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }

    // Set CSS content
    // 设置CSS内容
    style.textContent = `
        @import url('${props.url}');
        .ql-text-custom-font-${getValidFontName(props.font)}-${getValidUrl(props.url)} {
          font-family: '${props.font}', sans-serif !important;
        }
      `;

  }

});

</script>

<style scoped>

</style>