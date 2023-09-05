<template>
  <!-- Render custom text component -->
  <div
      class="ql-text"
      :class="[fontClass]"
      :style="{ fontSize: computedSize, color: color, fontWeight: weightClass }"
  >
    <!-- Slot for content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // Font weight (e.g., regular, bold)
    weight: {
      type: [String, Number],
      default: 'medium',
      validator: (value) =>
          ['demiLight', 'regular', 'medium', 'bold'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // Font size (small, medium, large)
    size: {
      type: [String, Number],
      default: 'medium',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // Text color
    color: {
      type: String,
      default: 'black',
    },
    // Custom font name
    font: {
      type: String,
      default: '',
    },
    // URL for custom font import
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    // Calculate font weight class
    weightClass() {
      if (typeof this.weight === 'number') {
        return `${this.weight}`;
      } else {
        // Map weight options to numeric values
        const weightOptions = {
          demiLight: '300',
          regular: '400',
          medium: '500',
          bold: '700',
        };
        return weightOptions[this.weight] || this.weight; // Use provided value if not in options
      }
    },
    // Generate custom font class name
    fontClass() {
      return `ql-text-custom-font-${this.getValidFontName(this.font)}-${this.getValidUrl(this.url)}`;
    },
    // Calculate font size in pixels
    computedSize() {
      if (typeof this.size === 'number') {
        return `${this.size}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        return sizeOptions[this.size] || this.size; // Use provided value if not in options
      }
    },
  },
  methods: {
    // Remove special characters and limit font name length
    getValidFontName(name) {
      return name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);
    },
    // Remove special characters and limit URL length
    getValidUrl(url) {
      return url.replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);
    },
  },
  mounted() {
    // Apply custom font styles if both font name and URL are provided
    if (this.url && this.font) {
      const styleId = `ql-text-custom-font-${this.getValidFontName(this.font)}-${this.getValidUrl(this.url)}`;
      let style = document.getElementById(styleId);

      if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
      }

      style.textContent = `
        @import url('${this.url}');
        .ql-text-custom-font-${this.getValidFontName(this.font)}-${this.getValidUrl(this.url)} {
          font-family: '${this.font}', sans-serif !important;
        }
      `;
    }
  },
};
</script>

<style scoped>
/* Default styling for text component */
.ql-text {
  font-family: 'Inter', sans-serif;
  display: -webkit-box;
}
</style>
