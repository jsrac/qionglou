# Dialog

Dialog 组件是一个可定制的对话框组件，用于在页面上展示自定义的弹出内容。

```vue
<script setup></script>

<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
    <ql-dialog :visible="dialogVisible" @close="closeDialog">
      <template v-slot:title> Custom Dialog Title </template>
      <p>This is the content of the dialog.</p>
    </ql-dialog>
  </div>
</template>

<script setup>
  import { QlDialog } from '@qionglou/components/dialog' // 导入 QlButton 组件
  import { ref } from 'vue'

  const dialogVisible = ref(false)

  const openDialog = () => {
    dialogVisible.value = true
  }

  const closeDialog = () => {
    dialogVisible.value = false
  }
</script>
```

## 基本用法

使用 `<ql-dialog>` 标签来创建一个对话框。你可以通过不同的属性来定制对话框的外观和行为。

```vue
<template>
  <ql-dialog :visible="dialogVisible" @close="closeDialog">
    <template v-slot:title> Custom Dialog Title </template>
    <p>This is the content of the dialog.</p>
  </ql-dialog>
</template>

<script setup>
  import { QlDialog } from '@/components' // 导入 QlDialog 组件
  import { ref } from 'vue'

  const dialogVisible = ref(false)

  const closeDialog = () => {
    dialogVisible.value = false
  }
</script>
```

## Props

以下是可用的属性列表：

`visible`：控制对话框是否可见。
`title`：对话框的标题。
`fullscreen`：是否以全屏模式显示对话框。
`center`：是否在屏幕中央显示对话框。
`customClass`：自定义的样式类名。

## 插槽

`title` 插槽：用于自定义对话框的标题内容。
`默认插槽`：对话框的主要内容可以通过默认插槽来自定义。

## Emits
