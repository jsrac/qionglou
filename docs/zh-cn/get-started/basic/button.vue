<template>
  <div>
    <ql-button @click="handleClick" size="large" text="Click Me" />
    <ql-button @click="handleClick" text="Click Me" type="primary"/>
    <ql-button @click="handleClick" size="small" text="Click Me"/>
    <ql-button @click="handleClick" size="mini" text="Click Me"/>
    <ql-button @click="handleClick" size="5px 20px 5px 20px" text="Click Me"/>
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