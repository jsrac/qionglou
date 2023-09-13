<template>
  <!-- Conditional div with dynamic class and style bindings
  条件性的div，带有动态的类和样式绑定 -->
  <div
      :class="{ on: on }"
      :style="{
      width: computedWidth,
      marginTop: computedTop,
      marginBottom: computedBottom,
      marginLeft: computedLeft,
      marginRight: computedRight
    }"
  >
    <!-- Slot for content
    内容插槽 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { PropsType } from './props';

// Define the component options
// 定义组件选项
defineOptions({ name: 'QlPer' })

// Define props from parent
// 从父级定义props
const props = defineProps<PropsType>();

// Compute the width based on the 'wide' prop.
// 根据'wide' prop计算宽度。
const computedWidth = computed(() => {
  return props.wide + props.unit;
});

// Compute the left margin based on the 'left' prop.
// 根据'left' prop计算左边距。
const computedLeft = computed(() => {
  if (typeof props.left === 'number') {
    // Return left margin as pixels
    // 以像素形式返回左边距
    return `${props.left}px`;
  } else {
    // Map size options to pixel values
    // 将大小选项映射到像素值
    const sizeOptions = {
      none: '0px',
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    // Use provided value if not in options, default to 'small'
    // 如果选项中没有，则使用提供的值，默认为“小”
    return sizeOptions[props.left] || props.left;
  }
});

// Similar computed functions for other margin values
// 其他边距值的类似计算函数

const computedRight = computed(() => {
  if (typeof props.right === 'number') {
    return `${props.right}px`;
  } else {
    const sizeOptions = {
      none: '0px',
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    return sizeOptions[props.right] || props.right;
  }
});

const computedTop = computed(() => {
  if (typeof props.top === 'number') {
    return `${props.top}px`;
  } else {
    const sizeOptions = {
      none: '0px',
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    return sizeOptions[props.top] || props.top;
  }
});

const computedBottom = computed(() => {
  if (typeof props.bottom === 'number') {
    return `${props.bottom}px`;
  } else {
    const sizeOptions = {
      none: '0px',
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    return sizeOptions[props.bottom] || props.bottom;
  }
});
</script>
