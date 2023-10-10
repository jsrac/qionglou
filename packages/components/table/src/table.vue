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
    <ql-pagination v-model:current="currentPage" :total="totalPages" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import QlPagination from "../../pagination";

// 使用 ref 创建响应式变量
const rows = ref([]);
const isScrolling = ref(false);

// 在组件挂载时执行
onMounted(() => {
  // 获取所有行并保存在 rows 变量中
  rows.value = Array.from(document.querySelectorAll('.row'));
  const rowHeight = getRowHeight();
  if (rowHeight > 0) {
    // 设置表体高度，假设每行高度为30像素
    bodyHeight.value = pageSize * rowHeight;
  }
});

// 在组件销毁时执行
onUnmounted(() => {
  // 清空 rows 变量
  rows.value = [];
});

// 生成随机数据的函数
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

// 生成一亿条数据
const data = generateRandomData(90);

// 定义列的接口类型
interface Column {
  key: string;
  label: string;
  width?: number; // 可选的列宽度属性
  sortable?: boolean; // 可选的可排序属性
}

// 列的配置信息
const columns: Column[] = [
  { key: 'name', label: '姓名', width: 150, sortable: true },
  { key: 'age', label: '年龄', width: 80, sortable: false }
];

// 每页显示的行数
const pageSize: number = 10;

// 当前页数，使用 ref 创建响应式变量
const currentPage = ref(1);

// 表体的 DOM 元素，使用 ref 创建响应式变量
const body = ref<HTMLElement | null>(null);

// 计算总页数
const totalPages = computed(() => Math.ceil(data.length / pageSize));

// 表体的高度，假设每行高度为30像素，使用 ref 创建响应式变量
const bodyHeight = ref(pageSize * 30);

// 计算当前显示的数据
const visibleData = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return data.slice(start, end);
});


// 获取第一行的高度
const getRowHeight = () => {
  if (rows.value.length > 0) {
    const firstRow = rows.value[0];
    return firstRow.clientHeight;
  }
  return 0;
};

// 处理滚动事件
// 处理滚动事件的回调函数
const handleScroll = () => {
  if (body.value && !isScrolling.value) {
    const scrollTop = body.value.scrollTop;
    const scrollHeight = body.value.scrollHeight;
    const clientHeight = body.value.clientHeight;
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    if (atBottom && currentPage.value !== totalPages.value && !isScrolling.value) {
      isScrolling.value = true;
      currentPage.value = currentPage.value + 1;
      body.value.scrollTop = 0;

      // 使用 requestAnimationFrame 替代 setTimeout
      requestAnimationFrame(() => {
        isScrolling.value = false;
      });
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
  isScrolling.value = false;
};

// 函数节流
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

// 对处理滚动事件进行节流
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