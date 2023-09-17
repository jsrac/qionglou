<template>
  <!-- Apply transition for animations -->
  <!-- 使用过渡动画效果 -->
  <transition>
    <component :class="buttonStyle" @click="handleClick">
      <!-- Render icon if provided -->
      <!-- 若传入图标，则渲染图标 -->
      <div v-if="props.icon">
        <i :class="`ql-icon-${props.icon}`"></i>
      </div>
      <!-- Render default slot content if not onlyIcon -->
      <!-- 若非只有图标，则渲染默认插槽内容 -->
      <slot v-if="!props.onlyIcon"></slot>
    </component>
  </transition>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Props, Emits } from './props'

  // Define component options
  // 定义组件选项
  defineOptions({ name: 'QlButton' })

  // Define props.ts and emits
  // 定义属性和发射器
  const props = defineProps(Props)
  const emits = defineEmits(Emits)

  // Handle click event
  // 处理点击事件
  const handleClick = (evt: MouseEvent) => {
    emits('click', evt)
  }

  // Calculate button style based on props.ts
  // 根据属性计算按钮样式
  const buttonStyle = computed(() => {
    const { type, size, plain, round, circle, disabled, link } = props

    return {
      'ql-button': true,
      [`ql-button--${type}`]: type,
      [`ql-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-link': link,
      loading: props.loading
    }
  })
</script>

<style>

</style>