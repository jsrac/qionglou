<template>
  <div class="demo">
    <ql-table :columns="columns" :data="data" pageNum="10" conHig="none" />
    <ql-table :columns="columns" :data="data" pageNum="10" conHig="small"/>
  </div>
</template>

<script setup lang="ts">
import { QlTable } from '@qionglou/components/table'

const columns = [
  { key: 'name', label: 'Name' ,width: '36em'},
  { key: 'age', label: 'Age' ,width: '8em'}
];

const generateRandomData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `Person ${i}`,
      age: Math.floor(Math.random() * 100) + 1 // 随机生成 1 到 100 的年龄
    });
  }

  return data;
};

const data = generateRandomData(60);

</script>

<style scoped>
.demo {
  padding: 0;
}
</style>