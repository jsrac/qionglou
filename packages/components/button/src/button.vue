<template>
  <transition>
    <component :class="buttonStyle" @click="handleClick">
      <div v-if="props.icon">
        <i :class="`ql-icon-${props.icon}`"></i>
      </div>
      <slot v-if="!props.onlyIcon"></slot>
    </component>
  </transition>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Props, Emits } from './props'

  defineOptions({ name: 'QlButton' })
  const props = defineProps(Props)
  const emits = defineEmits(Emits)

  const handleClick = (evt: MouseEvent) => {
    emits('click', evt)
  }

  const buttonStyle = computed(() => {
    const { type, size, plain, round, circle, disabled, link } = props

    return {
      'ql-button': true,
      [`ql-button--${type}`]: type,
      [`ql-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-link': link,
      loading: props.loading
    }
  })
</script>
