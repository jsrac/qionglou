<template>
  <!-- Grid container, used to wrap grid items -->
  <!-- 栅格容器，用于包裹栅格项目 -->
  <div :style="containerStyle">
    <!-- Default slot, used to place grid items -->
    <!-- 默认插槽，用于放置栅格项目 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { Props } from "./props";

// Create a reactive reference to store the number of columns
// 创建一个响应式引用以存储列数
const columnCount = ref(1)

// Set component options, specifying the component name as 'QlCol'
// 设置组件选项，将组件名称指定为'QlCol'
defineOptions({name: 'QlCol'})

// Receive properties passed down from the parent component
// 接收从父组件传递下来的属性
const props = defineProps(Props)

// Computed property to dynamically generate style object
// 计算属性，动态生成样式对象
const containerStyle = computed(() => {
  const { col, gap } = props

  // Get the current window width
  // 获取当前窗口宽度
  const windowWidth = window.innerWidth

  // Initialize the matching column count
  // 初始化匹配的列数
  let matchingCol: unknown = 1

  // Iterate through the resolution configurations to find the matching maximum resolution
  // 遍历分辨率配置以找到匹配的最大分辨率
  for (const [breakpoint, value] of Object.entries(col)) {
    if (windowWidth >= parseInt(breakpoint)) {
      matchingCol = value
    } else {
      break
    }
  }

  // Update the column count
  // 更新列数
  columnCount.value = matchingCol

  console.log('=>',columnCount.value)

  // Return the style object
  // 返回样式对象
  return {
    display: 'grid',
    gridTemplateColumns: `${columnCount.value}`, // Set gridTemplateColumns based on the number of columns
    // 根据列数设置gridTemplateColumns
    gridGap: `${gap}`
  }
})

// Event handler when the component is mounted
// 组件挂载时的事件处理程序
onMounted(() => {
  window.addEventListener('resize', () => {
    updateColumnCount()
  })
})

// Event handler before the component is destroyed
// 组件销毁前的事件处理程序
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    updateColumnCount()
  })
})

// Function to update the column count
// 更新列数的函数
function updateColumnCount() {
  columnCount.value = 1 // Reset to the default number of columns
  // 重置为默认列数
}

// Watch for changes in the 'col' property and update the column count accordingly
// 监听'col'属性的变化，并相应地更新列数
watch(() => props.col, () => {
  updateColumnCount()
})
</script>

<style scoped></style>
