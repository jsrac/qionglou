<template>
  <div :class="buttonStyle">
    <slot></slot>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { Props } from './props'

  const name = 'q-button'
  const props = defineProps(Props)

  const buttonStyle = computed(() => {
    const { type, size, plain, round, circle, disabled } = props

    return {
      [`q-button--${type}`]: type,
      [`q-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }
  })
</script>
