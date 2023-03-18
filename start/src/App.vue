<script setup>
  import FineHeader from '../../packages/qionglou/fineHeader/fineHeader.vue'
  import FinePer from '../../packages/qionglou/finePer/finePer.vue'

  const customWidth = {
    1: '10%',
    2: '20%'
  }
  defineExpose({ customWidth });
</script>

<template>
  <fine-per wide="10">
    <fine-header
        :col="customWidth"
    >
      <div>1</div>
      <div>2</div>
    </fine-header>
  </fine-per>
</template>

<style></style>
