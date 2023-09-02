# per

`ql-per` 组件是一个用于设置元素宽度的组件。通过传递不同的属性，你可以实现不同宽度的元素。

## 使用示例

```vue
<template>
  <div class="fine-per">
    <ql-per wide="10" unit="%" on="true">
      <!-- 在此插入你的内容 -->
      Hello
    </ql-per>
  </div>
</template>

<script setup>
  import { QlPer } from 'packages/components/per' // 导入 QlButton 组件
</script>
```

## Props

| 属性名 | 类型      | 默认值  | 描述                                                |
| ------ | --------- | ------- | --------------------------------------------------- |
| `wide` | `String`  | `'10'`  | 定义元素的宽度值。                                  |
| `unit` | `String`  | `'0%'`  | 定义元素宽度的单位。                                |
| `on`   | `Boolean` | `false` | 定义元素是否显示边框，`true` 显示，`false` 不显示。 |

::: tip

- 你可以使用 `wide` 属性来设置元素的宽度值。
- 你可以使用 `unit` 属性来设置元素宽度的单位，默认为 `%`。
- 你可以使用 `on` 属性来设置元素是否显示边框，`true` 为显示，`false` 为不显示。
  :::

## 示例

### 显示边框的元素

```vue
<template>
  <ql-per :wide="50" :unit="%" :on="true">
    <!-- 在此插入你的内容 -->
  </ql-per>
</template>
```

### 不显示边框的元素

```vue
<template>
  <ql-per :wide="80" :unit="%" :on="false">
    <!-- 在此插入你的内容 -->
  </ql-per>
</template>
```
