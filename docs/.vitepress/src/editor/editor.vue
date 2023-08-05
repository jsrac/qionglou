<script setup lang="ts">
  import * as monaco from 'monaco-editor'
  import { onMounted, onUnmounted, ref } from 'vue'

  const editorContainer = ref(null)
  // Monaco Editor 初始化配置
  const editorOptions = {
    value: 'const temp = 1', // 初始代码
    language: 'javascript', // 编辑器语言，可以根据需求设置
    theme: 'vs-dark', // 主题，可以根据需求设置
    readOnly: false // 是否只读，可以根据需求设置
  }

  // Monaco Editor 实例
  let editorInstance

  // 监听组件挂载
  onMounted(() => {
    // 创建 Monaco Editor 实例
    editorInstance = monaco.editor.create(editorContainer, editorOptions)
  })

  // 监听组件销毁
  onUnmounted(() => {
    // 销毁 Monaco Editor 实例
    editorInstance.dispose()
  })
</script>

<template>
  <div ref="editorContainer" class="monaco-editor-container"></div>
</template>

<style scoped lang="scss">
  .monaco-editor-container {
    width: 100%;
    height: 300px; /* 可根据需求设置编辑器高度 */
  }
</style>
