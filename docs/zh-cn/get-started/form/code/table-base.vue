<template>
  <div class="demo">
    <ql-table :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { QlTable } from '@qionglou/components/table'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' }
];
const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];
</script>

<style scoped>
.demo {
  padding: 0;
}
</style>