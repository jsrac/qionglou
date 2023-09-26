<template>
  <!-- Divide component wrapper -->
  <!-- 分割组件包装器 -->
  <div v-if="type === 'text'" class="ql-divide aid-back text-line-center">
    <ql-text
             :weight="weight"
             :color="borderColor.font"
             :style="[themeStyle]"
    >
      {{ text }}
    </ql-text>
  </div>
  <div v-else-if="type === 'line'" class="ql-divide aid-back text-line-center">
  </div>
  <div v-else-if="type === 'icon'">
    <div class="ql-divide aid-back text-line-center">
      <ql-icon
          :src="src"
          :wide="wide"
          :layout="layout"
          :color="borderColor.font"
          :weight="weight"
      >
        {{ text }}
      </ql-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

defineOptions({ name: 'QlDivide' })
import { Props } from './props';
import QlText from "../../text/src/text.vue";
import QlIcon from "../../icon/src/icon.vue";


const props = defineProps(Props)
const { text, theme, color, width, weight , type, wide, src, layout, url, font} = props

const themeStyle = computed(() => {
  const themeStyle = {
    default: {
      paddingRight: '15px',
      paddingLeft: "15px"
    },
    dotted: {
      paddingRight: '15px',
      paddingLeft: "15px"
    }
  };
  // If type has a corresponding style in typeStyles, the corresponding style is returned; otherwise, an empty object
  // is returned
  // 如果 type 在 typeStyles 中有对应的样式，则返回对应的样式；否则返回空对象
  return themeStyle[theme] || {};
});

const widthStyle = computed(() => {
  const widthStyle = {
    center: {
      left: '50%',
      right: "50%"
    },
    left: {
      left: '95%',
      right: '5%'
    },
    right: {
      left: '5%',
      right: '95%'
    }
  };
  return widthStyle[width] || {};
});
// Compute border color
// 计算边框颜色
const borderColor = computed(() => {
  const colorStyle = {
    default: {
      font: '#9c9c9c',
      border: "#e3e3e3"
    }
  };
  return colorStyle[color] || {};
});

// Inject global styles
// 注入全局样式
const customStyle = `
  .ql-divide {
    display: flex;
    align-items: center;
    margin: 16px 0;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    border-block-start: 0 ${borderColor.value.border};
  }

  :where(.aid-back).ql-divide.text-line-center::before {
    position: relative;
    width: ${widthStyle.value.right};
    border-block-start: 1px solid transparent;
    border-block-start-color: inherit;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
    border-style: ${theme === 'dotted' ? 'dashed' : 'double'};
  }
  :where(.aid-back).ql-divide.text-line-center::after {
    position: relative;
    width: ${widthStyle.value.left};
    border-block-start: 1px solid transparent;
    border-block-start-color: inherit;
    border-block-end: 0;
    transform: translateY(50%);
    content: '';
    border-style: ${theme === 'dotted' ? 'dashed' : 'double'};
  }
`;

// Append style to <head>
// 添加样式到<head>中
const style = document.createElement('style');
style.innerHTML = customStyle;
document.head.appendChild(style);

</script>

<style scoped>

</style>