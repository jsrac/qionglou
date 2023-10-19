<template>
  <div class="demo">
    <ql-table :columns="columns" :data="data" pageNum="10" conHig="small"/>
  </div>
</template>

<script setup lang="ts">
import { QlTable } from '@qionglou/components/table'

const columns = [
  { key: 'id', label: 'Column 1' },
  { key: 'name', label: 'Column 2' },
  { key: 'name', label: 'Column 3' },
  { key: 'name', label: 'Column 4' },
  { key: 'name', label: 'Column 5' },
  { key: 'name', label: 'Column 6' },
  { key: 'name', label: 'Column 7' },
  { key: 'name', label: 'Column 8' },
  { key: 'name', label: 'Column 8-2' },
  { key: 'name', label: 'Column 8-3' },
  { key: 'name', label: 'Column 8-4' },
  { key: 'name', label: 'Column 8-5' },
  { key: 'name', label: 'Column 8-6' },
  { key: 'name', label: 'Column 8-7' },
  { key: 'name', label: 'Column 9-2' },
  { key: 'name', label: 'Column 9-3' },
  { key: 'name', label: 'Column 9-4' },
  { key: 'name', label: 'Column 9-5' },
  { key: 'name', label: 'Column 9-6' },
  { key: 'name', label: 'Column 9-7' },
  { key: 'more', label: 'Column 9', fixed: true}
];

const generateRandomData = (count: number) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `Person ${i}`,
      more: 'delete',
      age: Math.floor(Math.random() * 100) + 1 // 随机生成 1 到 100 的年龄
    });
  }

  return data;
};

const data = generateRandomData(60);
</script>

<style scoped>

</style>