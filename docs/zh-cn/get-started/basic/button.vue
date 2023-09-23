<template>
  <div>
    <ql-button @click="handleClick" size="large" text="Default" :react="reactStyles" />
    <ql-button @click="handleClick" text="Primary" type="primary" />
    <ql-button @click="handleClick" text="Success" type="success" />
    <ql-button @click="handleClick" text="Warning" type="warning" />
    <ql-button @click="handleClick" text="Danger" :type="typeStyles.danger" />
  </div>
</template>

<script setup lang="ts">
import { QlButton } from '@qionglou/components/button'
const reactStyles = {
  hover: {
    backgroundColor: '#0078ff0a',
    opacity: '0.8',
    transition: 'color 0.54s, opacity 0.25s'
  },
  reset: {
    backgroundColor: '#0078ff00',
    opacity: '1',
    transition: 'color 0.54s, opacity 0.25s'
  },
  active: {
    boxShadow: '5px 5px 14px #bababb54',
    transition: 'color 0.25s, opacity 0.25s',
    opacity: '0.6'
  },
  mouseUp: {
    transition: 'color 0.54s, opacity 0.25s',
    boxShadow: ''
  }
};
const typeStyles = {
  danger: {
    fontWeight: '500',
    color: 'rgb(255,255,255)',
    backgroundColor: '#ff0a0a',
    borderRadius: '4px !important',
  },
  // ... more type style
};

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