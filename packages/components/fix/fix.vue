<template>
  <div class="ql-fix" :class="positionClass" :style="{ zIndex: zIndex }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'QlFix',
    props: {
      position: {
        type: String,
        default: 'top',
        validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
      },
      zIndex: {
        type: Number,
        default: 100
      }
    },
    computed: {
      positionClass() {
        return `ql-fix-${this.position}`
      }
    }
  })
</script>

<style scoped>
</style>
