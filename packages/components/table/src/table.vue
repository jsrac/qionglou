<template>
  <div :class="applyStyles('table')">
    <div :style="tableHeight" ref="body" @scroll="handleScrollThrottled">
      <div
          :class="[
            { [applyStyles('fixedColumnTrue')]: columns.some(column => column.titleFix)},
            applyStyles('headerRow')
          ]"
      >
        <div
            v-for="column in columns"
            :key="column.key"
            :style="{ width: columnWidth(column)}"
            :class="{ [applyStyles('fixedColumn')]: column.fixed }"
        >
          <ql-text
              :url="url"
              :font="font"
              :color="color"
              :weight="weight">
            {{ column.label }}
          </ql-text>
        </div>
      </div>
      <div :style="{ height: bodyHeight + 'px' }">
        <div v-for="(row, index) in visibleData" :key="row.id" :class="applyStyles('row')" :ref="'rowRef_' + index">
          <div v-for="column in columns" :key="column.key" :style="{ width: columnWidth(column) }" :class="[{ [applyStyles('fixedColumn')]: column.fixed }, applyStyles('column')]">
            <ql-text
                :url="url"
                :font="font"
                :color="color"
                :weight="weight">
              {{ row[column.key] }}
            </ql-text>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <ql-pagination ref="pagination" v-model:current="currentPage" :total="totalPages" :layout="pageShow" :site='site' :url="url"
                   :font="font"
                   :color="color"
                   :weight="weight"/>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted, provide} from 'vue';
import QlPagination from "../../pagination";
import QlText from "../../text";
import { css } from '@emotion/css';

import { Props } from './props';
const props = defineProps(Props);
const { data, columns, pageNum, conHig, pageShow, site, url, font, color, weight, mate } = props;
const scrollPage = ref(1);

const mateStyles = ref(mate);

console.log('mateStyles',mateStyles)
const applyStyles = (styleType) => {
  switch(styleType) {
    case 'table':
      return css`
        margin: auto;
        ${mate && css(mate.table)}
      `;
    case 'headerRow':
      return css`
        display: flex;
        background-color: #ffffff;
        font-weight: bold;
        height: 57px;
        box-shadow: 0px 7px 14px 0px rgb(230 230 230 / 25%);
        width: max-content;
        align-items: center;
        ${mate && css(mate.headerRow)}
      `;
    case 'row':
      return css`
        display: flex;
        height: 58px;
        width: max-content;
        align-items: center;
        ${mate && css(mate.row)}
      `;
    case 'column':
      return css`
        margin: 0;
        ${mate && css(mate.column)}
      `;
    case 'fixedColumn':
      return css`
        position: sticky;
        left: 0;
        display: flex;
        right: 0px;
        height: inherit;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 2px 14px -1px rgb(236 236 236);
        ${mate && css(mate.fixedColumn)}
      `;
    case 'fixedColumnTrue':
      return css`
        position: sticky;
        z-index: 1;
        top: 0px;
        ${mate && css(mate.fixedColumnTrue)}
      `;
    default:
      return '';
  }
};

const rows = ref([]); // 存储表格行
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
      overflow: 'auto',
    };
  } else {
    const sizeOptions = {
      small: {
        overflow: 'auto',
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

const columnWidth = (column) => {
  if (typeof column.width === 'string') {
    return column.width;
  } else if (typeof column.width === 'number') {
    return column.width + 'px';
  } else {
    return '110px';
  }
};

const getRowHeight = () => {
  if (rows.value.length > 0) {
    const firstRow = rows.value[0];
    return firstRow.clientHeight;
  }
  return 0;
};


const handleScroll = () => {
  if (props.conHig === 'none' || currentPage.value >= totalPages.value) return;

  const scrollTop = body.value?.scrollTop || 0;
  const scrollHeight = body.value?.scrollHeight || 0;
  const clientHeight = body.value?.clientHeight || 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight;

  if (atBottom && currentPage.value !== totalPages.value) {
    currentPage.value += 1;
    body.value.scrollTop = 0; // 将滚动位置重置为顶部
    scrollPage.value = currentPage.value; // 更新 scrollPage 的值，通知分页组件
  }
};

provide('scrollPage', currentPage);

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
provide('scrollPage', scrollPage);

const handleScrollThrottled = throttle(handleScroll, 200);

</script>

<style scoped>

::-webkit-scrollbar {
  width: 1px;
}
::-webkit-scrollbar {
  height: 1px; /* 设置横向滚动条的高度 */
}
::-webkit-scrollbar-track {
  background-color: rgba(241, 241, 241, 0);
}

::-webkit-scrollbar-thumb {
  background-color: #d9d6d6;
  border-radius: 6px;
}
.dark ::-webkit-scrollbar-thumb {
  background-color: #2e2e32;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #9b9b9b;
}

</style>