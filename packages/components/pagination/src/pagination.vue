<template>
  <div :style="[pagShowStyle]">
    <ql-button
        @click="goToPage(1)"
        v-if="current !== 1"
        text="首页"
        type="text"
    />
    <ql-button
        @click="prevPage"
        :disabled="current === 1"
        v-if="current !== 1"
        text="上一页"
        type="text"
    />
    <template v-if="layout === 'abridge'">
      <span v-if="displayedPages[0] > 2">...</span>
      <ql-button
          v-for="page in displayedPages"
          :key="page"
          @click="goToPage(page)"
          :state="current === page ? stateStyles.primary : 'default'"
          :class="{ active: current === page }"
          type="text"
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
          type="text"
          :text="page"
      />
    </template>
    <ql-button
        @click="nextPage"
        :disabled="current === total"
        type="text"
        text="下一页"
    />
    <ql-button
        @click="goToPage(total)"
        type="text"
        text="尾页"
    />
  </div>
</template>

<script setup>
import {computed, defineProps, getCurrentInstance, inject, provide, ref, watch} from 'vue';
import { Props } from './props';
import QlButton from "../../button";

const props = defineProps(Props);

let { current, total, layout, site } = props;

const instance = getCurrentInstance();

const stateStyles = {
  primary: {
    fontWeight: '500',
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(0 120 255)',
    borderRadius: '4px !important',
  }
};
const pagShowStyle = computed(() => {
  if (typeof site === 'object') {
  return site;
} else {
  const pagStyles = {
    center: {
      textAlign: 'center',
      marginTop: '10px'
    },
    right: {
      textAlign: 'end',
      marginTop: '10px'
    },
    left: {
      textAlign: 'inherit',
      marginTop: '10px'
    }
  };
  return pagStyles[site] || {};
}
});

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
  changePage(current + 1)
});

</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>