<template>
  <!-- Conditional div with dynamic class and style bindings -->
  <div
      :class="{ on: on }"
      :style="{
      width: computedWidth,
      marginTop: computedTop,
      marginBottom: computedBottom,
      marginLeft: computedLeft,
      marginRight: computedRight
    }"
  >
    <!-- Slot for content -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'QlPer',
  props: {
    // Width value
    wide: {
      type: String,
      default: '10',
    },
    // Width unit (e.g., %, px)
    unit: {
      type: String,
      default: '%',
    },
    // Toggle class 'on' based on boolean value
    on: {
      type: Boolean,
      default: false,
    },
    // Top margin value
    top: {
      type: [String, Number],
      default: 'none',
      validator: (value) =>
          ['none', 'small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // Bottom margin value
    bottom: {
      type: [String, Number],
      default: 'none',
      validator: (value) =>
          ['none' ,'small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // Right margin value
    right: {
      type: [String, Number],
      default: 'none',
      validator: (value) =>
          ['none', 'small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // Left margin value
    left: {
      type: [String, Number],
      default: 'none',
      validator: (value) =>
          ['none', 'small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
  },
  computed: {
    // Calculate the width
    computedWidth() {
      // Return wide + unit (e.g., '10%')
      return this.wide + this.unit;
    },
    // Calculate the left margin
    computedLeft() {
      if (typeof this.left === 'number') {
        // Return left margin as pixels
        return `${this.left}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          none: '0px',
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.left] || this.left;
      }
    },
    // Calculate the right margin
    computedRight() {
      if (typeof this.right === 'number') {
        // Return right margin as pixels
        return `${this.right}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          none: '0px',
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.right] || this.right;
      }
    },
    // Calculate the top margin
    computedTop() {
      if (typeof this.top === 'number') {
        // Return top margin as pixels
        return `${this.top}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          none: '0px',
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.top] || this.top;
      }
    },
    // Calculate the bottom margin
    computedBottom() {
      if (typeof this.bottom === 'number') {
        // Return bottom margin as pixels
        return `${this.bottom}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          none: '0px',
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.bottom] || this.bottom;
      }
    }
  },
});
</script>
