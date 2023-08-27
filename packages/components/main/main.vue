<template>
  <div
    class="ql-main"
    :class="[layoutClass, heightClass, widthClass]"
    :style="{ width: computedWidth, height: computedHeight }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      layout: {
        type: String,
        default: 'default',
        validator: (value) =>
          ['default', 'center', 'right', 'left', 'top', 'bottom'].includes(
            value
          )
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
        return `ql-main-${this.layout}`
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
          'ql-main-height': this.high !== 'auto'
        }
      },
      widthClass() {
        return {
          auto: this.wide === 'auto',
          'ql-main-width': this.wide !== 'auto'
        }
      }
    }
  }
</script>

<style scoped>
  .ql-main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    word-wrap: break-word;
  }

  .ql-main-center {
    justify-content: center;
  }

  .ql-main-right {
    align-items: flex-end;
  }

  .ql-main-left {
    align-items: flex-start;
  }

  .ql-main-top {
    align-items: flex-start;
  }

  .ql-main-bottom {
    justify-content: flex-end;
  }

  .ql-main-height {
    height: 0;
  }

  .ql-main-width {
    width: 0;
  }
</style>
