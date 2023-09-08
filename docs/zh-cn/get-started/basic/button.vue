<template>
  <ql-button @click="handleClick">Click Me</ql-button>
</template>

<script setup>
import { QlButton } from '@qionglou/components/button'

const handleClick = () => {
  // 在按钮被点击时执行的操作
  console.log('Button Clicked!')
}
</script>