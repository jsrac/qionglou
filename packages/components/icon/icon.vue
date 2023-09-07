<template>
  <!-- Icon container -->
  <div class="icon-container">
    <div v-if="type === 'font'" class="ql-icon_font">
      <!-- Render Font Icon using QlText component -->
      <ql-text
          :style="{ color: color, width: widthSize, height: highSize }"
          :class="[ aniClass ]"
          :url='url'
          :font="font"
      >
        {{ src }}
      </ql-text>
      <!-- Render additional text for the icon -->
      <ql-text
          :weight="weight"
          :size="size"
          :color="color"
          :url='url'
          :font="font"
      >
        {{ alt }}
      </ql-text>
    </div>
    <div v-else-if="type === 'img'" class="ql-icon">
      <!-- Render Image Icon with optional QlText component -->
      <img :src="src" :alt="alt" :style="{ width: widthSize, height: highSize }" />
      <!-- Render additional text for the icon -->
      <ql-text
          :weight="weight"
          :size="size"
          :color="color"
          :url='url'
          :font="font"
      >
        {{ alt }}
      </ql-text>
    </div>
    <div v-else>
      <!-- Error message for unknown icon type -->
      <p>Icon: Error Type</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QlText from "../text/text.vue";

export default defineComponent({
  name: 'QlIcon',
  components: {
    QlText
  },
  props: {
    // Source for the icon
    src: {
      type: String,
      required: true
    },
    // Type of icon (font or image)
    type: {
      type: String,
      default: 'img'
    },
    // Alternative text for the icon
    alt: {
      type: String,
      default: ''
    },
    // Font weight (e.g., regular, bold)
    weight: {
      type: String,
      default: 'regular',
      validator: (value) =>
          ['demiLight', 'regular', 'medium', 'bold'].includes(value)
    },
    // Size of the icon (small, medium, large)
    size: {
      type: [String, Number],
      default: 'medium',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0)
    },
    // Animation type (none, rotate, linear)
    ani: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'rotate', 'linear'].includes(value)
    },
    // Width of the icon
    wide: {
      type: [String, Number],
      default: 'medium',
      validator: (value) =>
          ['small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0)
    },
    // Height of the icon
    high: {
      type: [String, Number],
      default: 'none',
      validator: (value) =>
          ['none', 'small', 'medium', 'large'].includes(value) ||
          (typeof value === 'number' && value >= 0)
    },
    // Font for text
    font: {
      type: String,
      default: ''
    },
    // URL for font import
    url: {
      type: String,
      default: ''
    },
    // Text color
    color: {
      type: String,
      default: 'black'
    },
  },
  computed: {
    // Calculate the width size
    widthSize() {
      if (typeof this.wide === 'number') {
        return `${this.wide}px`
      } else {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px'
        }
        return sizeOptions[this.wide] || this.wide // Return the size if it's not a valid option
      }
    },
    // Calculate the height size
    highSize() {
      if (typeof this.high === 'number') {
        return `${this.high}px`
      } else  {
        // Map size options to pixel values
        const sizeOptions = {
          small: '14px',
          medium: '16px',
          large: '18px'
        }
        return sizeOptions[this.high] || this.high // Return the size if it's not a valid option
      }
    },
    // Determine the animation class
    aniClass() {
      if (this.ani === 'rotate') {
        return 'rotate-animation';
      } else if (this.ani === 'linear') {
        return 'linear-animation';
      } else {
        return '';
      }
    }
  }
});
</script>

<style scoped>
</style>
