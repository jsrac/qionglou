<template>
  <div class="pagination">
    <ql-button
        @click="goToPage(1)"
        v-if="current !== 1"
        text="首页"
    />
    <ql-button
        @click="prevPage"
        :disabled="current === 1"
        v-if="current !== 1"
        text="上一页"
    />
    <template v-if="layout === 'abridge'">
      <span v-if="displayedPages[0] > 2">...</span>
      <ql-button
          v-for="page in displayedPages"
          :key="page"
          @click="goToPage(page)"
          :state="current === page ? 'primary' : 'default'"
          :class="{ active: current === page }"
          :text="page"
      >
      </ql-button>
      <span v-if="displayedPages[displayedPages.length - 1] < total - 1">...</span>
    </template>
    <template v-else>
      <ql-button
          v-for="page in total"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: current === page }"
          :text="page"
      />
    </template>
    <ql-button
        @click="nextPage"
        :disabled="current === total"
        text="下一页"
    />
    <ql-button
        @click="goToPage(total)"
        text="尾页"
    />
  </div>
</template>

<script setup>
import {defineProps, getCurrentInstance, inject, provide, ref, watch} from 'vue';
import { Props } from './props';
import QlButton from "../../button";

const props = defineProps(Props);

let { current, total, layout } = props;

const instance = getCurrentInstance();

const calculateDisplayedPages = () => {
  const totalPages = total;
  const thisPage = current;
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

const provideCurrentPage = () => {
  instance?.appContext.app.emit('update:current', current);
};

provide('provideCurrentPage', provideCurrentPage);

const changePage = (page) => {
  if (page >= 1 && page <= total) {
    current = page;
    displayedPages.value = calculateDisplayedPages();
    instance.emit('update:current', current);
  }
};

const goToPage = (page) => changePage(page);

const prevPage = () => changePage(current - 1);

const nextPage = () => changePage(current + 1);



const scrollPage = inject('scrollPage');

watch(scrollPage, (newPage) => {
  console.log('scrollPage 变化了，新值为:', newPage);
  changePage(current + 1)
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