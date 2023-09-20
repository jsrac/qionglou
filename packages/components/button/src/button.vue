<template>
  <!-- Conditional div with dynamic class and style bindings
  条件性的div，带有动态的类和样式绑定 -->
  <transition>
    <div class="ql-button"
         ref="buttonRef"
         @mouseenter="applyHoverStyle"
         @mouseleave="resetStyle"
         @mousedown="handleMouseDown"
         @mouseup="handleMouseUp"
         :style="[buttomSize ,typeStyle]"
    >
      <ql-text
          :url="url"
          :font="font"
          :color="color"
          :weight="weight">
        {{ text }}
      </ql-text>
    </div>
  </transition>
</template>

<script setup lang="ts">
import QlText from "../../text";

import { computed, ref } from "vue";
import {Props, Emits} from './props';
import {MouseEvent} from "happy-dom";

defineOptions({name: 'QlButton'})

const buttonRef = ref<HTMLElement | null>(null);

// Define props.ts and emits
// 定义属性和发射器
const props = defineProps(Props)
const emits = defineEmits(Emits)

// Handle click event
// 处理点击事件
const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}

const { type, size, text, url, weight, font, color, plain, round, circle, disabled, link } = props

const buttomSize = computed(() => {
  if (size === 'normal') {
    return {
      padding: '10px 15px 10px 15px'
    };
  } else {
    const sizeOptions = {
      small: {
        padding: '7px'
      },
      medium: {
        padding: '16px'
      },
      large: {
        padding: '10px 64px'
      },
      mini: {
        padding: '4px'
      }
    };
    return sizeOptions[size] || 'padding:'+size;
  }
})
const typeStyle = computed(() => {
  if (type === 'default') {
    return {
      border: '1.5px solid #DADCE0',
      fontWeight: '500',
      color: 'rgb(0 120 255)',
      borderRadius: '4px !important'
    };
  } if (type === 'primary'){
    return {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(0, 120, 255)',
      borderRadius: '4px !important'
    };
  } else {
    const typeOptions = {
      small: '7px',
      medium: '16px',
      large: '10px 64px',
      mini: '4px'
    };
    return typeOptions[type] || type;
  }
})
const applyHoverStyle = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (type === 'primary') {
    target.style.opacity = '0.8';
    target.style.transition = 'color 0.54s, opacity 0.25s'
  } else {
    target.style.opacity = '0.6';
    target.style.backgroundColor = '#0060ff08'
    target.style.transition = 'color 0.54s, opacity 0.25s'
  }
}

const resetStyle = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (type === 'primary') {
    target.style.opacity = '1';
    target.style.transition = 'color 0.54s, opacity 0.25s'
  } else {
    target.style.opacity = '1';
    target.style.backgroundColor = '#0060ff00'
    target.style.transition = 'color 0.54s, opacity 0.25s'
  }
}

const handleMouseDown = () => {
  const target = buttonRef.value
  if (type === 'primary') {
    target.style.boxShadow = '5px 4px 5px #dadce0'
    target.style.transition = 'color 0.25s, opacity 0.25s'
    target.style.opacity = '0.6'
  } else {
    const typeOptions = {
      primary: '7px',
      medium: '16px',
      large: '10px 64px',
      mini: '4px'
    };
    return typeOptions[type] || type;
  }
}
const handleMouseUp = () => {
  const target = buttonRef.value
  if (type === 'primary') {
    target.style.backgroundColor = 'rgb(0, 120, 255)'
    target.style.transition = 'color 0.54s, opacity 0.25s'
    target.style.boxShadow = ''
  } else {

  }
}
</script>