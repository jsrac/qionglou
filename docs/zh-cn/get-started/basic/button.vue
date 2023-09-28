<template>
  <div class="demo">
    <ql-divide wide="100px" src="https://github.com/jsrac/qionglou/assets/57232813/e5701966-595f-417f-a588-1c46bd89fffc" />
    <ql-button class="button" @click="handleClick" size="large" text="Default" :react="reactStyles" />
<!--    <ql-button class="button" @click="handleClick" size="normal" text="Default" type="api" url="https://e8d5a602-113e-478a-bf2b-0f6ca83dd51c.mock.pstmn.io" />-->
    <ql-button class="button" @click="handleClick" text="Primary" type="primary" />
    <ql-button class="button" @click="handleClick" text="Success" type="success" />
    <ql-button class="button" @click="handleClick" text="Warning" type="warning" />
    <ql-button class="button" @click="handleClick" text="Danger" :type="typeStyles.danger" />
  </div>
</template>

<script setup lang="ts">
import { QlButton } from '@qionglou/components/button'
import { QlDivide } from '@qionglou/components/divide'

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
  .demo {
    padding: 0;
    transform: scale(0.9)
  }
  .demo .button {
    margin: 3px !important;
  }
</style>