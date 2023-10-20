<template>
  <div class="demo">
    <ql-table :columns="columns" :data="data" pageNum="10" conHig="small"/>
  </div>
</template>

<script setup lang="ts">
import { QlTable } from '@qionglou/components/table'

const columns = [
  { key: 'id', label: 'Column 1' , width: 130},
  { key: 'name', label: 'Column 2' , width: 110},
  { key: 'name', label: 'Column 3' , width: 110},
  { key: 'name', label: 'Column 4' , width: 110},
  { key: 'name', label: 'Column 5' , width: 110},
  { key: 'name', label: 'Column 6' , width: 110},
  { key: 'name', label: 'Column 7' , width: 110},
  { key: 'name', label: 'Column 8' , width: 110},
  { key: 'name', label: 'Column 8-2' , width: 110},
  { key: 'name', label: 'Column 8-3' , width: 110},
  { key: 'name', label: 'Column 8-4' , width: 110},
  { key: 'name', label: 'Column 8-5' , width: 110},
  { key: 'name', label: 'Column 8-6' , width: 110},
  { key: 'name', label: 'Column 8-7' , width: 110},
  { key: 'name', label: 'Column 9-2' , width: 110},
  { key: 'name', label: 'Column 9-3' , width: 110},
  { key: 'name', label: 'Column 9-4' , width: 110},
  { key: 'name', label: 'Column 9-5' , width: 110},
  { key: 'name', label: 'Column 9-6' , width: 110},
  { key: 'name', label: 'Column 9-7' , width: 110},
  { key: 'more', label: 'Column 9', fixed: true, width: 110, titleFix: true}
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