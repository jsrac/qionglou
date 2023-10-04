<template>
  <div class="demo">
    <ql-divide
        wide="100px"
        src="https://github.com/jsrac/qionglou/assets/57232813/e5701966-595f-417f-a588-1c46bd89fffc"
    />
    <ql-button class="button"
               @click="handleClick"
               size="normal"
               text="Default"
               type="api"
               api="/docs/zh-cn/buttom/buttom-api"
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
    <ql-divide
        wide="100px"
        src="https://github.com/jsrac/qionglou/assets/57232813/e5701966-595f-417f-a588-1c46bd89fffc"
    />
    <div class="buttom-icon">
      <ql-button
          class="button"
          @click="handleClick"
          type="icon"
          wide="60px"
          src="https://github.com/jsrac/qionglou/assets/57232813/117e82a5-cbb5-4678-82b5-b1d37a3d2926"
      />
      <ql-button
          class="button"
          @click="handleClick"
          text="Close with comment"
          type="icon" wide="25px"
          src="/docs/zh-cn/buttom/icon-alt.svg"
          :layout="layoutStyle.layout"
      />
    </div>
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
    transform: scale(0.9)
  }
  .demo .button {
    margin: 3px !important;
  }
  .buttom-icon {
    display: flex;
    align-items: center;
  }
</style>