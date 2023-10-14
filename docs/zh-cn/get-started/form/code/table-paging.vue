<template>
  <div class="demo">
    <ql-table :columns="columns" :data="datas" pageNum="10" conHig="small" />
  </div>
</template>

<script setup lang="ts">
import { QlTable } from '@qionglou/components/table'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' }
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
const datas = generateRandomData(30);
</script>

<style scoped>
.demo {
  padding: 0;
}
</style>