<template>
  <div class="demo">
    <ql-button
        class="button"
        size="large"
        text="Default"
        :react="reactStyles"
        v-if="!loading"
    />
    <ql-skeleton :loading="loading" ref="skeletonRef">
      <template #template>
        <!-- 骨架屏的模板 -->
        <!-- 这里可以自由发挥，根据具体需要添加骨架屏的元素和样式 -->
        <ql-skeleton-item variant="image" style="width: 240px;height: 240px" />
        <div style="padding: 14px">
          <ql-skeleton-item variant="h3" style="width: 50%" />
          <div
              style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <ql-skeleton-item variant="text" style="margin-right: 16px" />
            <ql-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
    </ql-skeleton>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { QlButton } from '@qionglou/components/button'
import { QlSkeleton } from '@qionglou/components/skeleton'
import { QlSkeletonItem } from '@qionglou/components/skeletonItem'

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 10000);
});

const reactStyles = {
  hover: {
    backgroundColor: '#0078ff0a',
    opacity: '0.8',
    transition: 'color 0.54s, opacity 0.25s'
  },
  reset: {
    backgroundColor: '#0078ff00',
    opacity: '1',
    transition: 'color 0.54s, opacity 0.25s'
  },
  active: {
    transition: 'color 0.25s, opacity 0.25s',
    opacity: '0.6'
  },
  mouseUp: {
    opacity: '1',
    transition: 'color 0.54s, opacity 0.25s',
  }
};
</script>

<style scoped>
.demo {
  padding: 0;
}
.demo .button {
  margin: 3px !important;
}
</style>
