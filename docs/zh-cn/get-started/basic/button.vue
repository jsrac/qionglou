<template>
  <div>
    <ql-button @click="handleClick" loading="true" size="large">Click Me</ql-button>
    <ql-button @click="handleClick">Click Me</ql-button>
    <ql-button @click="handleClick" loading="true" size="small">Click Me</ql-button>
    <ql-button @click="handleClick" loading="true" size="mini">Click Me</ql-button>
    <ql-button @click="handleClick" loading="true" size="5px 20px 5px 20px">Click Me</ql-button>
  </div>
</template>

<script setup>
import { QlButton } from '@qionglou/components/button'

const handleClick = () => {
  // 在按钮被点击时执行的操作
  console.log('Button Clicked!')
}
</script>

<style scoped>
  div {
    margin-right: 12px;
  }
</style>