<template>
  <div
    class="fine-main"
    :class="[layoutClass, heightClass, widthClass]"
    :style="{ width: computedWidth, height: computedHeight }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FineMain',
    props: {
      layout: {
        type: String,
        default: 'default',
        validator: (value) =>
          ['default', 'center', 'right', 'left', 'top', 'bottom'].includes(value)
      },
      site: {
        type: String,
        default: 'center',
        validator: (value) => ['center', 'left', 'right'].includes(value)
      },
      wide: {
        type: String,
        default: 'auto'
      },
      high: {
        type: String,
        default: 'auto'
      }
    },
    computed: {
      layoutClass() {
        return `fine-main-${this.layout}`
      },
      computedWidth() {
        return this.wide
      },
      computedHeight() {
        return this.high
      },
      heightClass() {
        return {
          auto: this.high === 'auto',
          'fine-main-height': this.high !== 'auto'
        }
      },
      widthClass() {
        return {
          auto: this.wide === 'auto',
          'fine-main-width': this.wide !== 'auto'
        }
      }
    }
  }
</script>

<style scoped>
  .fine-main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    word-wrap: break-word;
  }

  .fine-main-center {
    justify-content: center;
  }

  .fine-main-right {
    align-items: flex-end;
  }

  .fine-main-left {
    align-items: flex-start;
  }

  .fine-main-top {
    align-items: flex-start;
  }

  .fine-main-bottom {
    justify-content: flex-end;
  }

  .fine-main-height {
    height: 0;
  }

  .fine-main-width {
    width: 0;
  }
</style>
