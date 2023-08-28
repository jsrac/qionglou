# Text

`ql-text` 组件允许您自定义文本的字体、字重、大小和颜色，以满足不同的设计和排版需求。您可以配合字体的 CDN 来进行使用，如 [CDN|Font](https://www.cdnfonts.com/) 中所提供的字体名称和 URL。

## Props

| 属性名 | 类型           | 默认值    | 说明                                                                 |
| ------ | -------------- | --------- | -------------------------------------------------------------------- |
| weight | String         | 'regular' | 设置文本的字重，可选值：'demiLight'、'regular'、'medium'、'bold'     |
| size   | String, Number | 'medium'  | 设置文本的字体大小，可选值：'small'、'medium'、'large'，或传入像素值 |
| color  | String         | 'black'   | 设置文本的颜色                                                       |
| font   | String         | ''        | 设置自定义字体的名称，用于加载外部字体                               |
| url    | String         | ''        | 设置外部字体的 URL，用于加载自定义字体                               |

## 插槽

`ql-text` 组件支持默认插槽，您可以在组件标签中插入您的文本内容。

## 使用示例

```vue
<template>
  <div>
    <ql-text weight="bold" size="small"> This text has a custom font. </ql-text>
    <ql-text
      size="medium"
      font="BOOWIE"
      url="https://fonts.cdnfonts.com/css/boowie"
      color="#00000073"
    >
      This text has a custom font.
    </ql-text>
    <ql-text
      font="Marioline"
      url="https://fonts.cdnfonts.com/css/marioline"
      size="2em"
      color="#b0b0b0"
    >
      This text has a custom font.
    </ql-text>
  </div>
  <div></div>
</template>

<script setup>
  import { QlText } from '@qionglou/components/text' // 导入 QlButton 组件
</script>

<style></style>
```

在上述示例中，`ql-text` 组件用于定制文本样式。您可以根据需要设置字体、字重、大小和颜色。如果需要加载自定义字体，请提供字体名称和 URL。
