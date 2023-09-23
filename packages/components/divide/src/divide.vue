<template>
  <div class="ql-divide">
    <ql-text style="padding-right: 15px;background-color: white"
             weight="medium"
             color="#9c9c9c"
    >
      {{ text }}
    </ql-text>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'QlDivide' })
import { Props } from './props';
import QlText from "../../text/src/text.vue";

const props = defineProps(Props)
const { text } = props


</script>

<style scoped>

</style>