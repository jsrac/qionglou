# Button

Button 组件是一个可定制的按钮组件，可以根据不同的需求添加不同的样式和功能。

<demo src="./button.vue" desc="Description: The Hello World `v-model` Demo"></demo>

## 基本用法

使用 `<ql-button>` 标签来创建一个按钮。你可以通过不同的属性来定制按钮的外观和行为。

```vue
<template>
  <ql-button @click="handleClick">Click Me</ql-button>
</template>

<script setup>
  import { QlButton } from '@/components' // 导入 QlButton 组件

  const handleClick = () => {
    // 在按钮被点击时执行的操作
    console.log('Button Clicked!')
  }
</script>
```

## Props

以下是可用的属性列表：

| 参数     | 说明             | 类型    | 可选值                               | 默认值  |
| -------- | ---------------- | ------- | ------------------------------------ | ------- |
| type     | 按钮的类型       | String  | primary / success / warning / danger | primary |
| size     | 按钮的尺寸       | String  | small / medium / large               | small   |
| plain    | 是否为基础按钮   | Boolean |                                      | false   |
| round    | 是否为圆角按钮   | Boolean |                                      | false   |
| circle   | 是否为圆形按钮   | Boolean |                                      | false   |
| disabled | 是否禁用按钮     | Boolean |                                      | false   |
| link     | 是否为链接按钮   | Boolean |                                      | false   |
| loading  | 是否为加载中状态 | Boolean |                                      | false   |

## Emits

`click`：按钮被点击时触发的事件。

## 插槽

默认插槽：按钮的内容可以通过默认插槽来自定义。

```vue
<template>
  <ql-button>
    <span>Custom Content</span>
  </ql-button>
</template>
```
