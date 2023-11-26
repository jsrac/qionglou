<template>
  <div :style="[pagShowStyle]" v-if="!arrow">
    <ql-button
        @click="goToPage(1)"
        v-if="current !== 1"
        type="text"
        v-html="svgCodes.first"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
    />
    <ql-button
        @click="prevPage"
        :disabled="current === 1"
        v-if="current !== 1"
        v-html="svgCodes.prev"
        type="text"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
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
          :url="url"
          :font="font"
          :style="{ color: current === page ? stateStyles.primary.color : (current === page ? stateStyles.primary.color : color) }"
          :weight="weight"
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
          :url="url"
          :font="font"
          :color="color"
          :weight="weight"
      />
    </template>
    <ql-button
        @click="nextPage"
        v-if="current < total"
        :disabled="current === total"
        type="text"
        v-html="svgCodes.next"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
    />
    <ql-button
        v-if="current < total"
        @click="goToPage(total)"
        type="text"
        v-html="svgCodes.end"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
    />
  </div>
  <div :style="[pagShowStyle]" v-if="arrow">
    <ql-button
        @click="goToPage(1)"
        v-if="current !== 1"
        type="text"
        :text="textSize.first"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
    />
    <ql-button
        @click="prevPage"
        :disabled="current === 1"
        v-if="current !== 1"
        :text="textSize.prev"
        type="text"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
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
          :url="url"
          :font="font"
          :style="{ color: current === page ? stateStyles.primary.color : (current === page ? stateStyles.primary.color : color) }"
          :weight="weight"
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
          :url="url"
          :font="font"
          :color="color"
          :weight="weight"
      />
    </template>
    <ql-button
        @click="nextPage"
        v-if="current < total"
        :disabled="current === total"
        type="text"
        :text="textSize.next"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
    />
    <ql-button
        v-if="current < total"
        @click="goToPage(total)"
        type="text"
        :text="textSize.last"
        :url="url"
        :font="font"
        :color="color"
        :weight="weight"
    />
  </div>
</template>

<script setup>
import {computed, defineProps, getCurrentInstance, inject, provide, ref, toRef, watch} from 'vue';
import { Props } from './props';
import QlButton from "../../button";

const props = defineProps(Props);

let { current, total, layout, site, url, font, color, weight, arrow, selected } = props;
const propsRef = toRef(props, 'source')

const instance = getCurrentInstance();

const applyReactStyles = (effect) => {
  if (arrow && arrow[effect]) {
    Object.assign(arrow[effect]);
  }
};
const svgCodes = computed(() => {
  if (typeof propsRef.value === 'object') {
    return propsRef.value;
  } else {
    const source = {
      prev: `
      <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0H13L3 9.5L13 19H10L0 9.5L10 0Z" fill="#B3B3B3"/>
      </svg>
    `,
      first: `
      <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.92308 0H10L3.07692 6.5L10 13H6.92308L0 6.5L6.92308 0Z" fill="#007FFF"/>
      </svg>
    `,
      next: `
      <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0H0L10 9.5L0 19H3L13 9.5L3 0Z" fill="#B3B3B3"/>
      </svg>
    `,
      end: `
      <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.07692 0H0L6.92308 6.5L0 13H3.07692L10 6.5L3.07692 0Z" fill="#007FFF"/>
      </svg>
    `
    };
    return source || {};
  }
});

const textSize = computed(() => {
  if (typeof arrow === 'object') {
    return arrow;
  } else {
    const textOptions = {
      first: '首页',
      prev: '上一页',
      next: '下一页',
      last: '尾页'
    }
    return textOptions || {};
  }
})

const stateStyles = computed(() => {
  if (typeof selected === 'object') {
    return selected;
  } else {
    const styleOptions = {
      primary: {
        fontWeight: '500',
        color: 'rgb(0 120 255)'
      }
    }
    return styleOptions || {};
  }
})

const pagShowStyle = computed(() => {
  if (typeof site === 'object') {
    return site;
  } else {
    const pagStyles = {
      center: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '10px'
      },
      right: {
        alignItems: 'center',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'end',
      },
      left: {
        display: 'flex',
        alignItems: 'inherit',
        marginTop: '10px',
        justifyContent: 'flex-start'
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
</style>