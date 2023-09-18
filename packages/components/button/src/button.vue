<template>
  <!-- Conditional div with dynamic class and style bindings
  条件性的div，带有动态的类和样式绑定 -->
  <transition>
    <div class="ql-button"
    :style="{
      padding: buttomSize,
      background: typeStyle
    }"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {Props, Emits} from './props';

defineOptions({name: 'QlButton'})

// Define props.ts and emits
// 定义属性和发射器
const props = defineProps(Props)
const emits = defineEmits(Emits)

// Handle click event
// 处理点击事件
const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}

const { type, size, plain, round, circle, disabled, link } = props

const buttomSize = computed(() => {
  if (size === 'normal') {
    return `10px 15px 10px 15px`;
  } else {
    const sizeOptions = {
      small: '7px',
      medium: '16px',
      large: '10px 64px',
      mini: '4px'
    };
    return sizeOptions[size] || size;
  }
})
const typeStyle = computed(() => {
})
</script>