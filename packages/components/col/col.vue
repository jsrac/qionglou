<template>
  <div :style="containerStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = {
    gap: {
      type: String,
      default: () => '0'
    },
    col: {
      type: Object
    }
  }

  const containerStyle = computed(() => {
    const { col, gap } = props
    return {
      display: 'grid',
      gridTemplateColumns: `${Object.values(col).join(' ')}`,
      gridGap: `${gap}px`
    }
  })
</script>

<style scoped></style>
