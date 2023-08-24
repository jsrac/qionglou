# fine-header 组件文档

`fine-header` 组件是一个用于创建网格布局容器的组件。你可以通过传递 `col` 和 `gap` 属性来设置网格的列数和间距。

## 使用示例

```vue
<template>
  <fine-header
    :col="{
      auto: '1fr 1fr',
      tablet: '1fr 1fr 1fr',
      desktop: '1fr 1fr 1fr 1fr'
    }"
    :gap="20"
  >
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </fine-header>
</template>

<script setup>
  import { FineHeader } from '@qionglou/components/fineHeader' // 导入 QlButton 组件
</script>
```

## Props

| 属性名 | 类型     | 默认值 | 描述                         |
| ------ | -------- | ------ | ---------------------------- |
| `gap`  | `String` | `'0'`  | 定义网格间距。               |
| `col`  | `Object` | -      | 定义不同分辨率下的网格列数。 |
