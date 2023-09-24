<template>
  <div class="ql-divide aid-back text-line-center">
    <ql-text
             weight="medium"
             color="#9c9c9c"
             :style="[themeStyle]"
    >
      {{ text }}
    </ql-text>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { createStyles } from '@emotion/vue';

defineOptions({ name: 'QlDivide' })
import { Props } from './props';
import QlText from "../../text/src/text.vue";

const props = defineProps(Props)
const { text, theme } = props

const themeStyle = computed(() => {
  const themeStyle = {
    default: {
      paddingRight: '15px',
      paddingLeft: "15px"
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
  return themeStyle[theme] || {};
});
</script>

<style scoped>

</style>