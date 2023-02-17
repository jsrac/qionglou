<template>
  <div :class="{ 'on': on }" :style="{width: computedWidth}"><slot></slot></div>
</template>

<script>
export default {
  name: "finePer",
  props: {
    wide: {
      type: Number,
      default: 10
    },
    unit: {
      type: String,
      default: "0%"
    },
    on: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    computedWidth() {
      // 返回 wide+unit 也就是 wide 传入的 Number + 单位（默认为 %
      return this.wide + this.unit;
    }
  }
}
</script>

<style scoped>
.on {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #e5e5e5;
}
</style>