<template>
  <div>
    <ql-button @click="handleClick" size="large" text="Default" />
    <ql-button @click="handleClick" text="Primary" type="primary" />
    <ql-button @click="handleClick" text="Success" type="success" />
    <ql-button @click="handleClick" text="Warning" type="warning" />
    <ql-button @click="handleClick" text="Danger" type="danger" />
  </div>
</template>

<script setup lang="ts">
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