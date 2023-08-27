<template>
  <div class="ql-fix" :class="positionClass" :style="{ zIndex: zIndex }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      position: {
        type: String,
        default: 'top',
        validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
      },
      zIndex: {
        type: Number,
        default: 100
      }
    },
    computed: {
      positionClass() {
        return `ql-fix-${this.position}`
      }
    }
  }
</script>

<style scoped>
  .ql-fix {
    position: fixed;
  }

  .ql-fix-top {
    top: 0;
  }

  .ql-fix-bottom {
    bottom: 0;
  }

  .ql-fix-left {
    left: 0;
  }

  .ql-fix-right {
    right: 0;
  }
</style>
