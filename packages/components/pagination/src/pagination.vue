<template>
  <div class="pagination">
    <button @click="goToPage(1)">首页</button>
    <button @click="prevPage" :disabled="currentPage === '1'">上一页</button>
    <template v-if="layout === 'abridge'">
      <button v-if="displayedPages[0] !== 1">1</button>
      <span v-if="displayedPages[0] > 2">...</span>
      <button v-for="page in displayedPages" :key="page" @click="goToPage(page)">
        {{ page }}
      </button>
      <span v-if="displayedPages[displayedPages.length - 1] < total - 1">...</span>
      <button v-if="displayedPages[displayedPages.length - 1] !== total">{{ total }}</button>
    </template>
    <template v-else>
      <button v-for="page in total" :key="page" @click="goToPage(page)">
        {{ page }}
      </button>
    </template>
    <button @click="nextPage" :disabled="current === total">下一页</button>
    <button @click="goToPage(total)">尾页</button>
  </div>
</template>

<script setup>
import {defineProps, ref, getCurrentInstance, watch, watchEffect} from 'vue';
import { Props } from './props';
defineOptions({ name: 'QlPagination' })
const props = defineProps(Props)

const { current, total, layout, showSeparator } = props
const currentPage = ref(current);
const instance = getCurrentInstance();

// 根据当前页和总页数计算需要显示的页码
const displayedPages = ref([]);
watch(() => current, (newValue) => {
  currentPage.value = newValue;
});

// 计算当前显示的页码
const calculateDisplayedPages = () => {
  const totalPages = total;
  const currentPage = current;
  const numAdjacent = 2;

  let startPage = Math.max(1, currentPage - numAdjacent);
  let endPage = Math.min(totalPages, currentPage + numAdjacent);

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (startPage > 1) {
    pages.unshift('...');
    pages.unshift(1);
  }

  if (endPage < totalPages) {
    pages.push('...');
    pages.push(totalPages);
  }

  return pages;
};
watchEffect(() => {
  displayedPages.value = calculateDisplayedPages();
});

const goToPage = (page) => {
  if (page >= 1 && page <= total) {
    currentPage.value = page; // 更新当前页数
    instance.emit('update:current', page); // 向父组件发送更新事件
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    if (!displayedPages.value.includes(currentPage.value)) {
      // 如果当前页不在显示的页码中，需要更新显示的页码
      displayedPages.value = calculateDisplayedPages();
    }
    instance.emit('update:current', currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < total) {
    currentPage.value++;
    if (!displayedPages.value.includes(currentPage.value)) {
      // 如果当前页不在显示的页码中，需要更新显示的页码
      displayedPages.value = calculateDisplayedPages();
    }
    instance.emit('update:current', currentPage.value);
  }
};

// 监听当前页和总页数的变化，重新计算需要显示的页码
watch([current, total], () => {
  displayedPages.value = calculateDisplayedPages();
});
</script>

<style scoped>
.pagination {
  text-align: center;
  margin-top: 10px;
}

button {
  margin: 0 5px;
}
</style>