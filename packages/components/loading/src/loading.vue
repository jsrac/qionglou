<template>
  <div v-if="props.visible" :class="loadingClass">
    <div class="q-loading__container">
      <div class="q-loading__icon">
        <svg viewBox="25 25 50 50" class="q-loading__circular">
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            class="q-loading__path"
          ></circle>
        </svg>
      </div>
      <div class="q-loading__text">
        <template v-if="props.text">
          {{ props.text }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { Props } from './props'

  defineOptions({ name: 'QlLoading' })
  const props = defineProps(Props)

  const loadingClass = computed(() => {
    const { visible, fullscreen } = props
    console.log(props)

    return {
      'q-loading': true,
      'q-loading--visible': visible,
      'full-screen': fullscreen
    }
  })
</script>

<style scoped></style>
