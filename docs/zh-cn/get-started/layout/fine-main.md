# fine-main 组件文档

`fine-main` 组件是一个用于设置主要内容区域布局的组件。通过传递不同的属性，你可以实现不同的布局和尺寸效果。

## 使用示例

```vue
<template>
  <div class="fine-main">
    <fine-main layout="center" site="center" wide="800px" high="600px">
      <!-- 在此插入你的内容 -->
      Hello,world
    </fine-main>
  </div>
</template>

<script setup>
  import { FineMain } from '@qionglou/components/fineMain' // 导入 QlButton 组件
</script>

<style scoped>
  .fine-main {
    border: 1px solid red;
  }
</style>
```

## Props

| 属性名   | 类型     | 默认值      | 描述                         |
| -------- | -------- | ----------- | ---------------------------- |
| `layout` | `String` | `'default'` | 定义主要内容区域的布局。     |
| `site`   | `String` | `'center'`  | 定义主要内容区域的对齐方式。 |
| `wide`   | `String` | `'auto'`    | 定义主要内容区域的宽度。     |
| `high`   | `String` | `'auto'`    | 定义主要内容区域的高度。     |

## 示例

### 居中布局

```vue
<template>
  <fine-main layout="center" site="center" wide="800px" high="600px">
    <!-- 在此插入你的内容 -->
  </fine-main>
</template>
```

### 右对齐布局

```vue
<template>
  <fine-main layout="right" site="center" wide="800px" high="600px">
    <!-- 在此插入你的内容 -->
  </fine-main>
</template>
```

## 注意事项

- 你可以使用 `layout` 属性来设置主要内容区域的布局，可选值为 `'default', 'center', 'right', 'left', 'top', 'bottom'`。
- 你可以使用 `site` 属性来设置主要内容区域的对齐方式，可选值为 `'center', 'left', 'right'`。
- 你可以使用 `wide` 属性来设置主要内容区域的宽度，可传递具体数值或 `'auto'`。
- 你可以使用 `high` 属性来设置主要内容区域的高度，可传递具体数值或 `'auto'`。

```

```
