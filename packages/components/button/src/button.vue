<template>
  <component
    ref="_ref"
    is="button"
    :type="attrType"
    :class="['ql-button', ...typeClass]"
    @click="handleClick"
    @keyup="handleKeyup"
    @keydown="handleKeydown"
    @blur="handleBlur"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
    </template>
    <ql-icon v-if="icon || $slots.icon">
      {{ icon }}
      <slot v-if="!icon" name="icon" />
    </ql-icon>
    <span v-if="$slots.default">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
  import { computed, ref, useSlots } from 'vue'
  import { buttonProps, buttonEmits } from './button'
  import { QlIcon } from '@qionglou/components/icon'

  const props = defineProps(buttonProps)
  const emits = defineEmits(buttonEmits)

  defineOptions({
    name: 'ql-button',
    inheritAttrs: false
  })

  const _ref = ref<HTMLButtonElement>()
  const slots = useSlots()

  defineExpose({
    ref: _ref.value
  })

  const typeClass = computed(() => {
    return [
      `ql-button--` + props.type,
      `ql-button--` + props.size
    ]
  })

  const handleClick = (e: MouseEvent): void => {
    if (!props.disabled && !props.loading) {
      emits('click', e)
    }
  }

  const enterPressedRef = ref(false)

  const handleKeyup = (e: KeyboardEvent): void => {
    switch (e.key) {
      case 'Enter':
        if (!props.keyboard)
          return
        enterPressedRef.value = false
    }
  }

  const handleKeydown = (e: KeyboardEvent): void => {
    switch (e.key) {
      case 'Enter':
        if (!props.keyboard || props.loading) {
          e.preventDefault()
          return
        }
        enterPressedRef.value = true
    }
  }

  const handleBlur = (): void => {
    enterPressedRef.value = false
  }
</script>
