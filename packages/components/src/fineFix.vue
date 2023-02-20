<template>
  <div class="fine-fix" :class="positionClass" :style="{ zIndex: zIndex }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FineFix",
  props: {
    position: {
      type: String,
      default: "top",
      validator: (value) => ["top", "bottom", "left", "right"].includes(value)
    },
    zIndex: {
      type: Number,
      default: 100
    }
  },
  computed: {
    positionClass() {
      return `fine-fix-${this.position}`
    }
  }
};
</script>

<style scoped>
.fine-fix {
  position: fixed;
}

.fine-fix-top {
  top: 0;
}

.fine-fix-bottom {
  bottom: 0;
}

.fine-fix-left {
  left: 0;
}

.fine-fix-right {
  right: 0;
}
</style>