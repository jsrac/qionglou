<template>
  <!-- Conditional div with dynamic class and style bindings -->
  <div :class="{ on: on }" :style="{ width: computedWidth, marginTop: computedTop, marginBottom: computedBottom, marginLeft: computedLeft, marginRight: computedRight }">
    <!-- Slot for content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
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
      default: 'small',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // Other margin values (bottom, right, left)
    bottom: {
      type: [String, Number],
      default: 'small',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    right: {
      type: [String, Number],
      default: 'small',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    left: {
      type: [String, Number],
      default: 'small',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
  },
  computed: {
    computedWidth() {
      // Return wide + unit (e.g., '10%')
      return this.wide + this.unit;
    },
    computedLeft() {
      if (typeof this.left === 'number') {
        // Return left margin as pixels
        return `${this.left}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.left] || this.left;
      }
    },
    computedRight() {
      if (typeof this.right === 'number') {
        // Return right margin as pixels
        return `${this.right}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.right] || this.right;
      }
    },
    computedTop() {
      if (typeof this.top === 'number') {
        // Return top margin as pixels
        return `${this.top}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.top] || this.top;
      }
    },
    computedBottom() {
      if (typeof this.bottom === 'number') {
        // Return bottom margin as pixels
        return `${this.bottom}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        // Use provided value if not in options, default to 'small'
        return sizeOptions[this.bottom] || this.bottom;
      }
    }
  },
};
</script>
