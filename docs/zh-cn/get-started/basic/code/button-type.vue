<template>
  <div class="demo">
    <div class="buttom-icon">
      <ql-button
          class="button"
          type="icon"
          wide="60px"
          src="https://github.com/jsrac/qionglou/assets/57232813/117e82a5-cbb5-4678-82b5-b1d37a3d2926"
      />
      <ql-button class="button"
                 size="normal"
                 text="Default"
                 type="api"
                 api="/docs/zh-cn/buttom/buttom-api"
                 :react="reactStyles"
      />
      <ql-button
          class="button"
          text="Close with comment"
          type="icon" wide="25px"
          src="/docs/zh-cn/buttom/icon-alt.svg"
          :layout="layoutStyle.layout"
      />
      <ql-button
        type="font"
        text="c"
        font="Fontalicious"
        url="https://fonts.cdnfonts.com/css/fontalicious-thingbats"
        :layout="layoutStyle.layout"
        color="red"
        >
        <ql-text
            font="Joystix"
            url="https://fonts.cdnfonts.com/css/joystix">like</ql-text>
      </ql-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QlButton } from '@qionglou/components/button'
import { QlText } from '@qionglou/components/text'

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
    transition: 'color 0.54s, opacity 0.25s'
  }
};
const layoutStyle = {
  layout: {
    marginLeft: '8px !important',
  }
  // ... more type style
};
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' }
];
const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];
</script>

<style scoped>
  .demo {
    padding: 0;
  }
  .demo .button {
    margin: 3px !important;
  }
  .buttom-icon {
    display: flex;
    align-items: center;
  }
</style>