<template>
  <div class="pagination">
    <button @click="goToPage(1)">首页</button>
    <button @click="prevPage" :disabled="current === 1">上一页</button>
    <template v-if="layout === 'abridge'">
      <span v-if="displayedPages[0] > 2">...</span>
      <button
          v-for="page in displayedPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: current === page }"
      >
        {{ page }}
      </button>
      <span v-if="displayedPages[displayedPages.length - 1] < total - 1">...</span>
    </template>
    <template v-else>
      <button
          v-for="page in total"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: current === page }"
      >
        {{ page }}
      </button>
    </template>
    <button @click="nextPage" :disabled="current === total">下一页</button>
    <button @click="goToPage(total)">尾页</button>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, provide, ref, watch } from 'vue';
import { Props } from './props';
const props = defineProps(Props);
import { currentPage, tableName } from './updateCurrentPage.ts';

let { current, total, layout } = props;

const instance = getCurrentInstance();

const calculateDisplayedPages = () => {
  const totalPages = total;
  const thisPage = current
  const numAdjacent = 2;
  let startPage = Math.max(1, thisPage - numAdjacent);
  let endPage = Math.min(totalPages, thisPage + numAdjacent);

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

const displayedPages = ref(calculateDisplayedPages());
watch([current, total], () => {
  displayedPages.value = calculateDisplayedPages();
});

const changePage = (page, name) => {
    if (page >= 1 && page <= total) {
      current = page;
      displayedPages.value = calculateDisplayedPages();
      instance.emit('update:current', current);
    }
};


const goToPage = (page) => changePage(page, tableName.value);

const prevPage = () => changePage(current - 1, tableName.value);

const nextPage = () => changePage(current + 1, tableName.value);

const newCurrent = ref(current);

watch(currentPage, (newPage) => {
  console.log('tableName!!!!!!!!!!!!!!!!!!:', tableName, newPage);
  if (newPage >= 1 && newPage <= total) {
    current = newPage;
    displayedPages.value = calculateDisplayedPages();
    instance.emit('update:current', current);
  }
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

button.active {
  font-weight: bold;
}
</style>
