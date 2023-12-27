<template>
  <div class="ql-button-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { buttonGroupProps } from './button-group'

  defineProps(buttonGroupProps)
  defineOptions({
    name: 'QlButtonGroup'
  })
</script>

<style scoped></style>
