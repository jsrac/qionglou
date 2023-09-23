<template>
  <!-- Conditional div with dynamic class and style bindings
  条件性的div，带有动态的类和样式绑定 -->
  <div class="ql-button"
       ref="buttonRef"
       @mouseenter="applyReactStyles('hover')"
       @mouseleave="applyReactStyles('reset')"
       @mousedown="applyReactStyles('active')"
       @mouseup="applyReactStyles('mouseUp')"
       :style="[buttomSize, typeStyle, customStyles]"
  >
    <ql-text
        :url="url"
        :font="font"
        :color="color"
        :weight="weight">
      {{ text }}
    </ql-text>
  </div>
</template>

<script setup lang="ts">
import QlText from "../../text";

import { computed, ref } from "vue";
import { Props, Emits } from './props';
import { MouseEvent } from "happy-dom";

defineOptions({ name: 'QlButton' })

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

const { type, react, size, text, url, weight, font, color, plain, round, circle, disabled, link } = props
const reactStyles = ref(react);

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
    return sizeOptions[size] || 'padding:' + size;
  }
})

const typeStyle = computed(() => {
  const typeStyles = {
    default: {
      border: '1.5px solid #DADCE0',
      fontWeight: '500',
      color: 'rgb(0 120 255)',
      borderRadius: '4px !important',
    },
    primary: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(0, 120, 255)',
      borderRadius: '4px !important',
    },
    success: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#00dc5c',
      borderRadius: '4px !important',
    },
    warning: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#fdbf00',
      borderRadius: '4px !important',
    },
    danger: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#ff0a0a',
      borderRadius: '4px !important',
    }
  };

  // 如果 type 在 typeStyles 中有对应的样式，则返回对应的样式；否则返回空对象
  return typeStyles[type] || {};
});


const customStyles = computed(() => {
  if (typeof type === 'object') {
    return type;
  } else {
    return {};
  }
});
const applyReactStyles = (effect) => {
  const target = buttonRef.value;
  const styles = reactStyles.value;
  if (styles && styles[effect]) {
    Object.assign(target.style, styles[effect]);
  }
};
</script>
