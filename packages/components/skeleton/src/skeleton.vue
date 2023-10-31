<template>
  <div class="ql-skeleton" v-if="loading">
    <slot name="template"></slot>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

defineOptions({ name: 'QlSkeleton' })

export interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: true
})
</script>

<style scoped>
.ql-skeleton {
}
</style>
