<template>
  <div class="table">
    <div class="header-row">
      <div v-for="column in columns" :key="column.key" class="column">
        {{ column.label }}
      </div>
    </div>
    <div class="body" ref="body" @scroll="handleScrollThrottled">
      <div class="body-content" :style="{ height: bodyHeight + 'px' }">
        <div v-for="(row, index) in visibleData" :key="row.id" class="row" :ref="'rowRef_' + index">
          <div v-for="column in columns" :key="column.key" class="column">
            {{ row[column.key] }}
          </div>
        </div>
      </div>
    </div>
    <ql-pagination v-model:current="currentPage" :total="totalPages" />
    <ql-pagination v-model:current="currentPage" :total="totalPages" layout="abridge" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted , defineProps} from 'vue';
import { updateCurrentPage } from '../../pagination/src/updateCurrentPage';
import QlPagination from "../../pagination";
import { Props } from './props';
const props = defineProps(Props);
const { data, columns, pageNum } = props;

const rows = ref([]);
const isScrolling = ref(false);
const pageSize = pageNum;
const currentPage = ref(1);
const body = ref<HTMLElement | null>(null);
const totalPages = computed(() => Math.ceil(data.length / pageSize));
const bodyHeight = ref(pageSize * 30);

onMounted(() => {
  rows.value = Array.from(document.querySelectorAll('.row'));
  const rowHeight = getRowHeight();
  if (rowHeight > 0) {
    bodyHeight.value = pageSize * rowHeight;
  }
});

onUnmounted(() => {
  rows.value = [];
});

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

const handleScroll = () => {
  if (body.value && !isScrolling.value) {
    const scrollTop = body.value.scrollTop;
    const scrollHeight = body.value.scrollHeight;
    const clientHeight = body.value.clientHeight;
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    if (atBottom && currentPage.value !== totalPages.value) {
      isScrolling.value = true;
      currentPage.value++;
      body.value.scrollTop = 0;
      updateCurrentPage(currentPage.value);
    } else {
      const rowHeight = getRowHeight();
      if (rowHeight > 0) {
        const start = Math.floor(scrollTop / rowHeight);
        const newPage = Math.ceil(start / pageSize) + 1;
        if (newPage !== currentPage.value) {
          currentPage.value = newPage;
          updateCurrentPage(newPage);
        }
      }
    }
  }
  isScrolling.value = false;
};

const throttle = (func, wait) => {
  let timeout;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(...args);
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

button {
  margin: 0 5px;
}
</style>
