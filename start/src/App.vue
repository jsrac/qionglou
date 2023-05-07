<script setup>
  import { ref } from 'vue'
  import Qdialog from '../../packages/qionglou/dialog/src/dialog.vue'

  const visible = ref(false)

  function close() {
    visible.value = false
  }

  function open() {
    visible.value = true
  }
</script>

<template>
  <div>
    <button @click="open()">打开</button>
    <Qdialog
      v-model:visible="visible"
      title="标题"
      width="500px"
      height="500px"
      :center="true"
      :fullscreen="false"
      @close="close()"
    >
      <div>内容</div>
    </Qdialog>
  </div>
</template>

<style></style>
