<template>
  <div class="table">
    <!-- 表头 -->
    <div class="header-row">
      <div v-for="column in columns" :key="column.key" class="column">
        {{ column.label }}
      </div>
    </div>
    <!-- 表体 -->
    <div :style="tableHeight" ref="body" @scroll="handleScrollThrottled">
      <div class="body-content" :style="{ height: bodyHeight + 'px' }">
        <div v-for="(row, index) in visibleData" :key="row.id" class="row" :ref="'rowRef_' + index">
          <div v-for="column in columns" :key="column.key" class="column">
            {{ row[column.key] }}
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <ql-pagination ref="pagination" v-model:current="currentPage" :total="totalPages" @update:current="handleScroll" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { updateCurrentPage } from '../../pagination/src/updateCurrentPage';
import QlPagination from "../../pagination";
import { Props } from './props';
const props = defineProps(Props);
const { data, columns, pageNum, conHig, name} = props;

const rows = ref([]); // 存储表格行
const isScrolling = ref(false);
const pageSize: number = +pageNum; // 每页显示的行数
const currentPage = ref(1); // 当前页数
const body = ref<HTMLElement | null>(null); // 表体的 DOM 元素
const totalPages = computed(() => Math.ceil(data.length / pageSize));
const bodyHeight = ref(pageSize * 30); // 表体的高度，假设每行高度为30像素

const visibleData = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return data.slice(start, end);
});

const tableHeight = computed(() => {
  if (conHig === 'none') {
    return {
      maxHeight: 'fit-content',
      overflowY: 'clip'
    };
  } else {
    const sizeOptions = {
      small: {
        overflowY: 'auto',
        maxHeight: '400px',
      },
      medium: {
        padding: '16px'
      },
      large: {
        padding: '10px 64px'
      },
      mini: {
        padding: '4px'
      }
    };
    return sizeOptions[conHig] || 'padding:' + conHig;
  }
})

onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('.row')); // 获取所有行并保存在 rows 变量中
  const rowHeight = getRowHeight();
  if (rowHeight > 0) {
    bodyHeight.value = pageSize * rowHeight; // 设置表体高度，假设每行高度为30像素
  }
});

onUnmounted(() => {
  rows.value = [];
});

const getRowHeight = () => {
  if (rows.value.length > 0) {
    const firstRow = rows.value[0];
    return firstRow.clientHeight;
  }
  return 0;
};

const handleScroll = () => {
  if (props.conHig === 'none') return;

  // 原有的 handleScroll 逻辑
  if (body.value && !isScrolling.value) {
    const scrollTop = body.value.scrollTop;
    const scrollHeight = body.value.scrollHeight;
    const clientHeight = body.value.clientHeight;
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    if (atBottom && currentPage.value !== totalPages.value) {
      isScrolling.value = true;
      currentPage.value = currentPage.value + 1;
      body.value.scrollTop = 0;
      updateCurrentPage(currentPage.value, name);
    } else {
      const rowHeight = getRowHeight();
      if (rowHeight > 0) {
        const start = Math.floor(scrollTop / rowHeight);
        const newPage = Math.ceil(start / pageSize) + 1;
        if (newPage !== currentPage.value) {
          currentPage.value = newPage;
          updateCurrentPage(newPage, name);
        }
      }
    }
  }
  isScrolling.value = false;
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
  margin: auto;
}

.header-row {
  display: flex;
  background-color: #ffffff;
  font-weight: bold;
  height: 57px;
  box-shadow: 0px 7px 14px 0px rgb(230 230 230 / 25%);
  align-items: center;
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
  border-bottom: 1px solid #f4f4f4;
  height: 58px;
  align-items: center;
}

button {
  margin: 0 5px;
}
</style>
