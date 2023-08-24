# Drawer 组件文档

Drawer 组件是一个可以从屏幕边缘滑出的侧边栏，用于展示导航、设置等内容。

```angular2html
<template>
  <div>
    <button @click="openDrawer">Open Drawer</button>
    <q-drawer :visible="drawerVisible" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawerVisible = ref(false);

const openDrawer = () => {
  drawerVisible.value = true;
}
</script>
```

## 基本用法

使用 `<q-drawer>` 标签来创建一个抽屉。你可以通过不同的属性来定制抽屉的外观和行为。

```vue
<template>
  <div>
    <button @click="openDrawer">Open Drawer</button>
    <q-drawer :visible="drawerVisible" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const drawerVisible = ref(false)

  const openDrawer = () => {
    drawerVisible.value = true
  }
</script>
```

## Props

以下是可用的属性列表：

`visible`：控制抽屉是否可见。
