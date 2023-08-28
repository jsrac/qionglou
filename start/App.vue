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
