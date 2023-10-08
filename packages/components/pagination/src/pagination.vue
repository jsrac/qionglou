<template>
  <div class="pagination">
    <button @click="goToPage(1)">首页</button>
    <button @click="prevPage" :disabled="current === '1'">上一页</button>
    <button v-for="page in total" :key="page" @click="goToPage(page)">
      {{ page }}
    </button>
    <button @click="nextPage" :disabled="current === total">下一页</button>
    <button @click="goToPage(total)">尾页</button>
  </div>
</template>

<script setup>
import { defineProps, ref, getCurrentInstance} from 'vue';
import { Props } from './props';
defineOptions({ name: 'QlPagination' })
const props = defineProps(Props)

const { current, total } = props
const currentPage = ref(current);
const instance = getCurrentInstance();

const goToPage = (page) => {
  if (page >= 1 && page <= total) {
    currentPage.value = page; // 更新当前页数
    instance.emit('update:current', page); // 向父组件发送更新事件
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    instance.emit('update:current', currentPage.value); // 向父组件发送更新事件
  }
};

const nextPage = () => {
  if (currentPage.value < total) {
    currentPage.value++;
    instance.emit('update:current', currentPage.value); // 向父组件发送更新事件
  }
};
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
