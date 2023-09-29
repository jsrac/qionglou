<script>
// Import Vue APIs and Theme style
// 导入 Vue API 和 Theme style
import '../../../packages/themes/index.scss';
import { computed, defineAsyncComponent, ref } from "vue";

// Import demo components dynamically
// 动态导入demo组件
const modules = import.meta.glob("../../../**/*.vue");

// Map to store timers
// 映射表存储定时器
const timerMap = new Map();

export default {
  // Component props
  // 组件属性
  props: {
    codeStr: String,
    htmlStr: String,
    description: String,
    codePath: String,
    language: { default: "vue", type: String },
  },
  // Component setup
  // 组件配置
  setup(props, content) {
    // Destructure props and slots
    // 解构属性和插槽
    const { codePath, codeStr, htmlStr, description } = props;
    const { slots } = content;
    // Whether expanded
    // 是否展开
    const isExpanded = ref(false); // whether expanded
    // Whether hovered
    // 是否悬停
    const isHover = ref(false); // whether hover state
    // Has default slot
    // 是否有默认插槽
    const hasSlot = computed(() => (slots?.default ? true : false));
    // Decode prop strings
    // 解码属性字符串
    const decodedCodeStr = computed(() => decodeURIComponent(codeStr ?? ""));
    const decodedHtmlStr = computed(() => decodeURIComponent(htmlStr ?? ""));
    const decodedDesc = computed(() => decodeURIComponent(description ?? ""));
    // Async load demo component
    // 异步加载演示组件
    const demoSlot =
      codePath && modules[codePath]
        ? defineAsyncComponent(modules[codePath])
        : null;

    // Click handler for control
    // 控制区点击处理器
    const onClickControl = () => {
      isExpanded.value = !isExpanded.value;
      isHover.value = isExpanded.value;
    };

    // Click handler for copy
    // 复制点击处理器
    const onCopy = (e) => {
      // ...copy logic
      try {
        navigator.clipboard.writeText(decodedCodeStr.value);
        let el = e.target;
        if (el.tagName && el.tagName.toUpperCase() !== "DIV") {
          el = el.parentNode;
        }
        const cls = `${el.className}-done`;
        el.classList.add(cls);
        clearTimeout(timerMap.get(el));
        const timer = setTimeout(() => {
          el.classList.remove(cls);
          el.blur();
          timerMap.delete(el);
        }, 1500);
        timerMap.set(el, timer);
      } catch (err) {
        console.log("failed to do copy", err);
      }
      // ...style handling logic
    };
    // Expose component state and methods
    // 暴露组件状态和方法
    return {
      isHover,
      codePath,
      hasSlot,
      demoSlot,
      isExpanded,
      decodedCodeStr,
      decodedHtmlStr,
      decodedDesc,
      onCopy,
      onClickControl,
    };
  },
};
</script>

<template>
  <!-- Demo wrapper -->
  <!-- 演示包裹器 -->
  <div
    :class="['__vpdemo', isHover && '__vpdemo-hover']"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Slot or dynamic component -->
    <!-- 插槽或动态组件 -->
    <div class="__vpdemo-slot">
      <slot v-if="hasSlot"></slot>
      <component :is="demoSlot" v-else-if="codePath" />
      <div v-html="decodedCodeStr" v-else></div>
      <!-- Description -->
      <!-- 描述 -->
      <div
        class="__vpdemo-show_desc"
        v-show="decodedDesc"
        v-html="decodedDesc"
      ></div>
    </div>
    <!-- Expanded code block -->
    <!-- 展开的代码块 -->
    <div class="__vpdemo-show" v-show="isExpanded">
      <!-- Copy button -->
      <!-- 复制按钮 -->
      <div class="__vpdemo-show-copy" title="copy" @click.stop="onCopy"></div>
      <!-- Code block -->
      <!-- 代码块 -->
      <div
        :class="['__vpdemo-show-code', 'language-' + language]"
        v-html="decodedHtmlStr"
      ></div>
    </div>
    <!-- Control section -->
    <!-- 控制区 -->
    <div class="__vpdemo-control" @click="onClickControl">
      <!-- Animated arrow icon -->
      <!-- 动画箭头图标 -->
      <transition name="arrow-slide">
        <i
          :class="[
            '__vpdemo-control-icon',
            isExpanded
              ? '__vpdemo-control-icon_up'
              : '__vpdemo-control-icon_down',
          ]"
        ></i>
      </transition>
      <!-- Animated text -->
      <!-- 动画文本 -->
      <transition name="text-slide">
        <span v-show="isHover" class="__vpdemo-control-tip">{{
          isExpanded ? "Collapse" : "Expand"
        }}</span>
      </transition>
    </div>
    <!-- Extra control buttons -->
    <!-- 额外控制按钮 -->
    <div
      class="__vpdemo-control-code"
      title="code"
      @click.stop="onClickControl"
    >
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"
        ></path>
      </svg>
    </div>
    <div class="__vpdemo-control-copy" title="copy" @click.stop="onCopy">
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <rect width="12" height="12" x="8" y="8" rx="2"></rect>
          <path
            d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<style>
:root {
  --vpdemo-c-divider-light: rgba(60, 60, 60, 0.12);
  --vpdemo-shadow-2: 0 3px 12px rgba(0, 0, 0, 0.07),
    0 1px 4px rgba(0, 0, 0, 0.07);
  --vpdemo-c-brand: #8eecc2;
  --vpdemo-c-brand-dimm: #fafafa;
  --vpdemo-c-text-2: rgba(60, 60, 60, 0.7);
  --vpdemo-c-gray-light-2: #c7c7c7;
}

.__vpdemo {
  position: relative;
  margin: 10px 0;
  border: solid 1px var(--vpdemo-c-divider-light);
  border-radius: 3px;
  transition: 0.2s;
}
.dark .__vpdemo {
  border: 1px solid #2E2E32;
}
.__vpdemo-hover {
  box-shadow: var(--vpdemo-shadow-2);
}

.__vpdemo-hover .__vpdemo-control {
  color: var(--vp-c-brand);
  background-color: var(--vpdemo-c-brand-dimm);
}

.dark .__vpdemo-hover .__vpdemo-control {
  color: var(--vp-c-brand);
  background-color: #222225;
}
.__vpdemo-hover .__vpdemo-control-icon {
  transform: translateX(-40px);
}

.__vpdemo-slot {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
  overflow: auto;
}

.__vpdemo-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
}

.__vpdemo-show {
  position: relative;
  border-top: solid 1px var(--vpdemo-c-divider-light);
  background-color: #16161800;
}
.dark .__vpdemo-show_desc {
  border-top: dashed 1px #2E2E32;
}
.__vpdemo-show_desc {
  border-top: dashed 1px var(--vpdemo-c-divider-light);
  box-sizing: border-box;
  line-height: 28px;
  color: var(--vpdemo-c-text-2);
  word-break: break-word;
  margin-top: 20px;
  margin-bottom: -15px;
  /* background-color: var(--vp-c-bg-soft); */
  font-size: 80%;
}
.dark .__vpdemo-show_desc {
  color: #DFDFD8;
}
.dark .__vpdemo-show {
  border-top: solid 1px #52525952;
  background-color: #16161800
}
.__vpdemo-show-code {
  margin-bottom: 0 !important;
}
.dark .__vpdemo-show-copy {
  background-color: #1e1e20;
  border: 1px solid #2F2F32 !important;
}
.__vpdemo-show-copy {
  margin-top: 1.5em;
  position: absolute;
  right: 8px;
  z-index: 2;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: #EFEFEF;
  border: 1px solid #ff000000;
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: opacity 0.25s;
}

.__vpdemo-show-copy-done {
  border-radius: 0 4px 4px 0;
  background-color: #EFEFEF;
  border: 1px solid #D9D9DA;
  background-image: var(--vp-icon-copied);
}
.dark .__vpdemo-show-copy-done:before {
  background-color: #1e1e20 !important;
}
.__vpdemo-show-copy-done:before {
  position: relative;
  left: -65px;
  display: block;
  border-radius: 4px 0 0 4px;
  padding-top: 8px;
  width: 64px;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #808080;
  background-color: #EFEFEF;
  white-space: nowrap;
  content: "Copied";
}
.__vpdemo-show-copy:hover {
  border: 1px solid #D9D9DA;
  transition: border-color 0.25s, background-color 0.25s;
}


.__vpdemo-show pre {
  margin: 0;
  padding: 1.25rem 1.5rem;
  background-color: inherit !important;
}

.dark .__vpdemo-control {
  border-top: 1px solid #2E2E32;
}
/* styles of control section */
.__vpdemo-control {
  border-top: 1px solid var(--vpdemo-c-divider-light);
  height: 36px;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--vpdemo-c-gray-light-2);
  cursor: pointer;
  position: relative;
}

.__vpdemo-control-icon {
  display: inline-block;
  position: absolute;
  top: 50%;
  font-size: 16px;
  transition: 0.3s;
}

.__vpdemo-control-icon_up:before {
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-bottom: 7px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -8.5px;
  margin-left: -6px;
}

.__vpdemo-control-icon_down:before {
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top: 7.5px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2px;
  margin-left: -6px;
}

.__vpdemo-control-tip {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 36px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}

.__vpdemo-control-code {
  position: absolute;
  bottom: 9px;
  left: 20px;
  cursor: pointer;
}

.__vpdemo-control-copy {
  position: absolute;
  bottom: 9px;
  left: 50px;
  cursor: pointer;
}

.__vpdemo-control-copy-done {
  color: var(--vp-c-brand);
}

.__vpdemo .text-slide-enter,
.__vpdemo .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
