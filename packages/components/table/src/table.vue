<template>
  <div class="table">
    <!-- 表头 -->
    <div class="header-row">
      <div v-for="column in columns" :key="column.key" class="column">
        {{ column.label }}
      </div>
    </div>
    <!-- 表体 -->
    <div class="body" ref="body" @scroll="handleScrollThrottled">
      <div class="body-content" :style="{ height: bodyHeight + 'px' }">
        <div v-for="(row, index) in visibleData" :key="row.id" class="row" :ref="'rowRef_' + index">
          <div v-for="column in columns" :key="column.key" class="column">
            {{ row[column.key] }}
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const rows = ref([]);
const isScrolling = ref(false);

onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('.row'));
  const rowHeight = getRowHeight();
  if (rowHeight > 0) {
    // 设置行高
    // 这里假设每行高度为30像素
    bodyHeight.value = pageSize * rowHeight;
  }
});

onUnmounted(() => {
  rows.value = [];
});

const data: { id: number, name: string, age: number }[] = [
  { id: 1, name: 'John Doe', age: 1 },
  { id: 2, name: 'Jane Smith', age: 2 },
  { id: 3, name: 'John Doe', age: 3 },
  { id: 4, name: 'Jane Smith', age: 4 },
  { id: 5, name: 'John Doe', age: 5 },
  { id: 6, name: 'Jane Smith', age: 6 },
  { id: 7, name: 'John Doe', age: 7 },
  { id: 8, name: 'Jane Smith', age: 9 },
  { id: 9, name: 'John Doe', age: 10 },
  { id: 10, name: 'Jane Smith', age: 11 },
  { id: 11, name: 'John Doe', age: 12 },
  { id: 12, name: 'Jane Smith', age: 13 },
  { id: 13, name: 'John Doe', age: 14 },
  { id: 14, name: 'Jane Smith', age: 15 },
  { id: 15, name: 'John Doe', age: 16 },
  { id: 16, name: 'Jane Smith', age: 17 },
  { id: 17, name: 'John Doe', age: 18 },
  { id: 18, name: 'Jane Smith', age: 19 },
  { id: 19, name: 'John Doe', age: 20 },
  { id: 20, name: 'Jane Smith', age: 21 },
  { id: 21, name: 'John Doe', age: 22 },
  { id: 22, name: 'Jane Smith', age: 23 },
  { id: 23, name: 'John Doe', age: 24 },
  { id: 24, name: 'Jane Smith', age: 25 },
  { id: 25, name: 'John Doe', age: 26 },
  // Copy the previous data entries to reach a total of 30 entries.
  { id: 26, name: 'John Doe', age: 27 },
  { id: 27, name: 'Jane Smith', age: 28 },
  { id: 28, name: 'John Doe', age: 29 },
  { id: 29, name: 'Jane Smith', age: 30 },
  { id: 30, name: 'John Doe', age: 31 },
];

interface Column {
  key: string;
  label: string;
  width?: number; // 可选的列宽度属性
  sortable?: boolean; // 可选的可排序属性
}

const columns: Column[] = [
  { key: 'name', label: '姓名', width: 150, sortable: true },
  { key: 'age', label: '年龄', width: 80, sortable: false }
];

const pageSize: number = 10;
const currentPage = ref(1);
const body = ref<HTMLElement | null>(null);

const totalPages = computed(() => Math.ceil(data.length / pageSize));

const bodyHeight = ref(pageSize * 30); // 假设每行高度为30像素

const visibleData = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return data.slice(start, end);
});

const getRowHeight = () => {
  if (rows.value.length > 0) {
    const firstRow = rows.value[0];
    return firstRow.clientHeight;
  }
  return 0;
};

const getRowHeightByIdx = (index) => {
  const row = rows.value[index];
  return row ? row.clientHeight : 0;
};

const handleScroll = () => {
  if (body.value && !isScrolling.value) {
    const scrollTop = body.value.scrollTop;
    const scrollHeight = body.value.scrollHeight;
    const clientHeight = body.value.clientHeight;
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    if (atBottom && currentPage.value !== totalPages.value) {
      isScrolling.value = true;
      setTimeout(() => {
        console.log('yes');
        currentPage.value = currentPage.value + 1; // 将当前页面增加1
      }, 1000); // 等待1秒显示 "yes"，然后加载下一页
    } else {
      const rowHeight = getRowHeight();
      if (rowHeight > 0) {
        const start = Math.floor(scrollTop / rowHeight);
        const newPage = Math.ceil(start / pageSize) + 1;
        if (newPage !== currentPage.value) {
          currentPage.value = newPage;
        }
      }
    }
  }
  // 在处理完滚动事件后将其设置回 false
  isScrolling.value = false;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const throttle = (func, wait) => {
  let timeout;

  return function() {
    const context = this;
    const args = arguments;

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
};

const handleScrollThrottled = throttle(handleScroll, 200);

</script>
<style scoped>
.table {
  border: 1px solid #ccc;
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.header-row {
  display: flex;
  background-color: #f0f0f0;
}

.column {
  flex: 1;
  padding: 8px;
}

.body {
  overflow-y: auto;
  max-height: 300px;
}

.body-content {
}

.row {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.pagination {
  text-align: center;
  margin-top: 10px;
}

button {
  margin: 0 5px;
}
</style>