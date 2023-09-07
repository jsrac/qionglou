<template>
  <!-- Main container -->
  <div
      class="ql-main"
      :class="[layoutClass, heightClass, widthClass]"
      :style="{ width: computedWidth, height: computedHeight, background: color }"
  >
    <!-- Slot content -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QlMain',
  props: {
    // Layout style (default, center, right, left, top, bottom)
    layout: {
      type: String,
      default: 'default',
      validator: (value) =>
          ['default', 'center', 'right', 'left', 'top', 'bottom'].includes(value)
    },
    // Background color
    color: {
      type: String,
      default: '',
    },
    // Site alignment (center, left, right)
    site: {
      type: String,
      default: 'center',
      validator: (value) => ['center', 'left', 'right'].includes(value)
    },
    // Width of the container
    wide: {
      type: String,
      default: 'auto'
    },
    // Height of the container
    high: {
      type: String,
      default: 'auto'
    }
  },
  computed: {
    // Calculate the layout class
    layoutClass() {
      return `ql-main-${this.layout}`
    },
    // Calculate the width
    computedWidth() {
      return this.wide
    },
    // Calculate the height
    computedHeight() {
      return this.high
    },
    // Calculate the height class
    heightClass() {
      return {
        auto: this.high === 'auto',
        'ql-main-height': this.high !== 'auto'
      }
    },
    // Calculate the width class
    widthClass() {
      return {
        auto: this.wide === 'auto',
        'ql-main-width': this.wide !== 'auto'
      }
    }
  }
});
</script>

<style scoped>
</style>
