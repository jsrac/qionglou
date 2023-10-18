<template>
  <div class="demo">
    <ql-button
        class="button"
        @click="handleClick"
        size="large"
        text="Default"
        :react="reactStyles"
    />
    <ql-button
        class="button"
        @click="handleClick"
        text="Primary"
        state="primary"
    />
    <ql-button
        class="button"
        @click="handleClick"
        text="Success"
        state="success"
    />
    <ql-button
        class="button"
        @click="handleClick"
        text="Warning"
        state="warning"
    />
    <ql-button
        class="button"
        @click="handleClick"
        text="Danger"
        :state="typeStyles.danger"
    />
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
    transition: 'color 0.25s, opacity 0.25s',
    opacity: '0.6'
  },
  mouseUp: {
    opacity: '1',
    transition: 'color 0.54s, opacity 0.25s',
  }
};
const typeStyles = {
  danger: {
    fontWeight: '500',
    color: 'rgb(255,255,255)',
    backgroundColor: '#ff0a0a',
    borderRadius: '4px !important',
  },
  layout: {
    marginLeft: '8px !important',
    background: 'red'
  }
  // ... more type style
};
const layoutStyle = {
  layout: {
    marginLeft: '8px !important',
  }
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
  }
  .demo .button {
    margin: 3px !important;
  }
</style>