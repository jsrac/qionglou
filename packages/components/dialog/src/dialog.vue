<template>
  <div :class="dialogClass" v-show="props.visible">
    <div class="dialog__wapper">
      <div class="dialog__header">
        <div class="dialog__title">
          <slot name="title">{{ props.title }}</slot>
        </div>
        <div class="dialog__close">
          <i class="q-icon-close" @click="emit('close')">x</i>
        </div>
      </div>
      <div class="dialog__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Props, Emits } from './props'
  import { computed } from 'vue'

  defineOptions({ name: 'QlDialog' })
  const props = defineProps(Props)
  const emit = defineEmits(Emits)

  const dialogClass = computed(() => {
    return [
      'q-dialog',
      props.fullscreen ? 'q-dialog-fullscreen' : '',
      props.center ? 'q-dialog-center' : '',
      props.customClass ? props.customClass : ''
    ]
  })

  // const dialogStyle = computed(() => {
  //   return {
  //     width: props.ts.width,
  //     height: props.ts.height,
  //     top: props.ts.top,
  //     left: props.ts.left,
  //     zIndex: props.ts.zIndex,
  //   }
  // })
</script>
