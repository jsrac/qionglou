<template>
  <!-- Render custom text component -->
  <div
      class="ql-text"
      :class="[fontClass, themeClass, { 'inline-block-layout': layout === 'justify' }]"
      :style="{ fontSize: computedSize, color: color, fontWeight: weightClass, textAlign: textLayout, lineHeight: lineClass, ...customStyles }"
  >
    <!-- Slot for content -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'QlText',
  props: {
    theme: {
      type: [String, Object],
      default: 'default'
    },
    // Font weight (e.g., regular, bold)
    weight: {
      type: [String, Number],
      default: 'regular',
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
    high: {
      type: [String, Number],
      default: 'bigger',
      validator: (value) =>
          ['small', 'medium', 'large', 'bigger'].includes(value) ||
          (typeof value === 'number' && value >= 0),
    },
    // URL for custom font import
    url: {
      type: String,
      default: '',
    },
    // Text layout
    layout: {
      type: [String],
      default: 'left',
      validator: (value) =>
          ['center', 'left', 'right', 'justify'].includes(value)
    }
  },
  computed: {
    themeClass() {
      if (typeof this.theme === 'string') {
        // Return predefined theme class based on string input
        return `ql-text-theme-${this.theme}`
      } else {
        // Return custom styles from the object
        return ''
      }
    },
    // Custom styles as an object
    customStyles() {
      if (typeof this.theme === 'object') {
        return this.theme;
      } else {
        return {};
      }
    },
    // Calculate Layout
    textLayout() {
      const layoutOptions: Record<string, string> = {
        center: 'center',
        left: 'left',
        right: 'right',
        justify: 'justify',
      };
      return layoutOptions[this.layout] || this.layout; // Use provided value if not in options
    },
    // Calculate font weight class
    weightClass() {
      if (typeof this.weight === 'number') {
        return `${this.weight}`;
      } else {
        // Map weight options to numeric values
        const weightOptions: Record<string, string> = {
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
        const sizeOptions: Record<string, string> = {
          small: '14px',
          medium: '16px',
          large: '18px',
        };
        return sizeOptions[this.size] || this.size; // Use provided value if not in options
      }
    },
    lineClass() {
      if (typeof this.high === 'number') {
        return `${this.high}px`;
      } else {
        // Map size options to pixel values
        const sizeOptions: Record<string, string> = {
          small: '14px',
          medium: '16px',
          large: '18px',
          bigger: '25px'
        };
        return sizeOptions[this.high] || this.high; // Use provided value if not in options
      }
    }
  },
  methods: {
    // Remove special characters and limit font name length
    getValidFontName(name: string): string {
      return name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);
    },
    // Remove special characters and limit URL length
    getValidUrl(url: string): string {
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
</style>
