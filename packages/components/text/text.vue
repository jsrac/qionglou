<template>
  <div
    class="ql-text"
    :class="[weightClass, fontClass]"
    :style="{ fontSize: computedSize, color: color }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      weight: {
        type: String,
        default: 'regular',
        validator: (value) =>
          ['demiLight', 'regular', 'medium', 'bold'].includes(value)
      },
      size: {
        type: [String, Number],
        default: 'medium',
        validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0)
      },
      color: {
        type: String,
        default: 'black'
      },
      font: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    },
    computed: {
      weightClass() {
        return `ql-text-${this.weight}`
      },
      fontClass() {
        return `ql-text-custom-font-${this.getValidFontName(
          this.font
        )}-${this.getValidUrl(this.url)}`
      },
      computedSize() {
        if (typeof this.size === 'number') {
          return `${this.size}px`
        } else {
          // Map size options to pixel values
          const sizeOptions = {
            small: '14px',
            medium: '16px',
            large: '18px'
          }
          return sizeOptions[this.size] || this.size // Return the size if it's not a valid option
        }
      }
    },
    methods: {
      getValidFontName(name) {
        // Remove special characters and spaces, and limit the length
        return name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 20)
      },
      getValidUrl(url) {
        // Remove special characters and slashes, and limit the length
        return url.replace(/[^a-zA-Z0-9]/g, '').substring(0, 20)
      }
    },
    mounted() {
      if (this.url && this.font) {
        const styleId = `ql-text-custom-font-${this.getValidFontName(
          this.font
        )}-${this.getValidUrl(this.url)}`
        let style = document.getElementById(styleId)

        if (!style) {
          style = document.createElement('style')
          style.id = styleId
          document.head.appendChild(style)
        }

        style.textContent = `
        @import url('${this.url}');
        .ql-text-custom-font-${this.getValidFontName(
          this.font
        )}-${this.getValidUrl(this.url)} {
          font-family: '${this.font}', sans-serif !important;
        }
      `
      }
    }
  }
</script>

<style scoped>
  .ql-text {
    font-family: 'Inter', sans-serif;
    display: -webkit-box;
  }
  .ql-text-demiLight {
    font-weight: 300;
  }

  .ql-text-regular {
    font-weight: 400;
  }

  .ql-text-medium {
    font-weight: 500;
  }

  .ql-text-bold {
    font-weight: 700;
  }
</style>
