# fix

`ql-fix` 组件是一个用于固定定位的容器组件。你可以通过传递不同的位置和 `zIndex` 属性来控制组件的定位和层级。

## 使用示例

```vue
<template>
  <div>
    <ql-fix position="top" :zIndex="100">
      <p>This is a fixed content at the top.</p>
    </ql-fix>
    <ql-fix position="bottom" :zIndex="100">
      <p>This is a fixed content at the bottom.</p>
    </ql-fix>
  </div>
</template>

<script setup>
  import FineFix from '@/components/FineFix.vue'
</script>
```

## Props

| 属性名     | 类型     | 默认值  | 描述                                                                |
| ---------- | -------- | ------- | ------------------------------------------------------------------- |
| `position` | `String` | `'top'` | 定义组件的位置，可选值为 `'top'`、`'bottom'`、`'left'`、`'right'`。 |
| `zIndex`   | `Number` | `100`   | 控制组件的层级，数值越大越在上层。                                  |

## 示例

### 顶部定位

```vue
<template>
  <ql-fix position="top" :zIndex="100">
    <p>This is a fixed content at the top.</p>
  </ql-fix>
</template>
```

### 底部定位

```vue
<template>
  <ql-fix position="bottom" :zIndex="100">
    <p>This is a fixed content at the bottom.</p>
  </ql-fix>
</template>
```

### 左侧定位

```vue
<template>
  <ql-fix position="left" :zIndex="100">
    <p>This is a fixed content at the left.</p>
  </ql-fix>
</template>
```

### 右侧定位

```vue
<template>
  <ql-fix position="right" :zIndex="100">
    <p>This is a fixed content at the right.</p>
  </ql-fix>
</template>
```
