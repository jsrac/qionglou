<template>
  <div class="ql-table-column" :style="{ width: columnWidth() }">
    <slot name="header" :column="column" />
    <slot name="default" :row="row" :column="column" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface TableColumnProps {
  column: {
    key: string;
    label: string;
    width?: string | number;
  };
  row?: {
    [key: string]: any;
  };
}

const props = defineProps<TableColumnProps>();

const column = props.column;
const row = props.row;

const columnWidth = () => {
  if (typeof column.width === "string") {
    return column.width;
  } else if (typeof column.width === "number") {
    return column.width + "px";
  } else {
    return "110px";
  }
};
</script>
