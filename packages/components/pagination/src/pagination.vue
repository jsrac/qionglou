<template>
  <div class="pagination">
    <!-- 首页按钮 -->
    <button @click="goToPage(1)">首页</button>
    <!-- 上一页按钮 -->
    <button @click="prevPage" :disabled="currentPage === 1">上一页</button>

    <!-- 使用 abridge 布局时显示的页码 -->
    <template v-if="layout === 'abridge'">
      <!-- 显示第一页按钮 -->
      <button v-if="displayedPages[0] !== 1">1</button>
      <!-- 显示省略号 -->
      <span v-if="displayedPages[0] > 2">...</span>
      <!-- 显示页码按钮 -->
      <button
          v-for="page in displayedPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <!-- 显示省略号 -->
      <span v-if="displayedPages[displayedPages.length - 1] < total - 1">...</span>
      <!-- 显示最后一页按钮 -->
      <button v-if="displayedPages[displayedPages.length - 1] !== total">{{ total }}</button>
    </template>

    <!-- 使用非 abridge 布局时显示的页码 -->
    <template v-else>
      <button
          v-for="page in total"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </template>

    <!-- 下一页按钮 -->
    <button @click="nextPage" :disabled="currentPage === total">下一页</button>
    <!-- 尾页按钮 -->
    <button @click="goToPage(total)">尾页</button>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, onMounted, provide, ref, watch } from 'vue';
const { current, total, layout, showSeparator } = defineProps(['current', 'total', 'layout', 'showSeparator']);
import { currentPage } from './updateCurrentPage.ts';

const instance = getCurrentInstance();


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

const displayedPages = ref(calculateDisplayedPages());

// 监听当前页和总页数的变化，重新计算需要显示的页码
watch([current, total], () => {
  currentPage.value = current;
  displayedPages.value = calculateDisplayedPages();
});
// 在父组件提供一个方法用于更新当前页
const provideCurrentPage = () => {
  instance?.appContext.app.emit('update:current', currentPage.value);
};

onMounted(() => {
  provide('provideCurrentPage', provideCurrentPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= total) {
    currentPage.value = page; // 更新当前页数
    instance.emit('update:current', page); // 向父组件发送更新事件
  }
};
watch(currentPage, (newValue) => {
  instance.emit('update:current', newValue);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    instance.emit('update:current', currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < total) {
    currentPage.value++;
    instance.emit('update:current', currentPage.value);
  }
};

// 在组件挂载时执行
onMounted(() => {
  provide('provideCurrentPage', provideCurrentPage);
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
