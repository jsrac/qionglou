# Loading

`ql-loading` 组件是一个用于显示加载状态的组件。它可以显示一个旋转的加载图标以及可选的加载文本。

## 使用示例

```vue
<template>
  <div>
    <ql-loading :visible="isLoading" text="Loading..." />
    <button @click="toggleLoading">Toggle Loading</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import QlLoading from '@/components/loading.vue'

  const isLoading = ref(false)

  const toggleLoading = () => {
    isLoading.value = !isLoading.value
  }
</script>
```

## Props

| 属性名       | 类型      | 默认值  | 描述                                                     |
| ------------ | --------- | ------- | -------------------------------------------------------- |
| `visible`    | `Boolean` | `false` | 控制加载组件是否可见。                                   |
| `fullscreen` | `Boolean` | `false` | 是否在全屏模式下显示加载组件。                           |
| `text`       | `String`  | `''`    | 自定义加载文本。当提供时，加载文本将显示在加载图标下方。 |

## 示例

### 基本用法

```vue
<template>
  <ql-loading :visible="isLoading" />
</template>

<script setup>
  import { ref } from 'vue'

  const isLoading = ref(true)
</script>
```

### 全屏加载

```vue
<template>
  <ql-loading :visible="isLoading" fullscreen />
</template>

<script setup>
  import { ref } from 'vue'

  const isLoading = ref(true)
</script>
```

### 自定义加载文本

```vue
<template>
  <ql-loading :visible="isLoading" text="Please wait..." />
</template>

<script setup>
  import { ref } from 'vue'

  const isLoading = ref(true)
</script>
```

## CSS 类名

`QlLoading` 组件会根据传入的属性自动添加一些 CSS 类名，以便于样式定制。以下是相关的 CSS 类名列表：

- `q-loading`: 加载组件的主容器。
- `q-loading--visible`: 在加载状态下可见。
- `full-screen`: 全屏模式下的样式。
