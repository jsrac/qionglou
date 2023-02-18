<template>
  <div :style="containerStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "fineHeader",
  props: {
    // 间距
    gap: {
      type: Number,
      default: 0
    },
    // 列
    column: {
      type: Number,
      default: 1
    },
    // 列数
    breakpoint: {
      type: Object,
      default: () => ({
        320: 1,
        425: 2,
        768: 3,
        1024: 4,
        1920: 5
      })
    }
  },
  data() {
    return {
      columnCount: 1
    }
  },
  computed: {
    containerStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.columnCount}, minmax(0, 1fr))`,
        gridGap: `${this.gap}px`
      }
    }
  },
  mounted() {
    this.updateColumnCount()

    // 添加窗口大小变化的事件监听器
    window.addEventListener('resize', this.updateColumnCount)
  },
  beforeDestroy() {
    // 在组件销毁之前，需要移除窗口大小变化的事件监听器
    window.removeEventListener('resize', this.updateColumnCount)
  },
  methods: {
    updateColumnCount() {
      // 获取当前窗口宽度
      const windowWidth = window.innerWidth

      // 遍历 breakpoint 对象，查找当前宽度下应该使用的列数
      for (const [breakpoint, columnCount] of Object.entries(this.breakpoint)) {
        if (windowWidth <= parseInt(breakpoint)) {
          this.columnCount = columnCount
          break
        }
      }

      // 如果没有找到对应的列数，则使用默认列数
      if (this.columnCount < 1) {
        this.columnCount = this.column
      }
    }
  }
};
</script>

<style scoped>

</style>
