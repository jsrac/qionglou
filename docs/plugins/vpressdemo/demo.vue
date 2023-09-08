<script>
import { computed, defineAsyncComponent, ref } from "vue";
const modules = import.meta.glob("../../../**/*.vue");
const timerMap = new Map();

export default {
  props: {
    codeStr: String,
    htmlStr: String,
    description: String,
    codePath: String,
    language: { default: "vue", type: String },
  },

  setup(props, content) {
    const { codePath, codeStr, htmlStr, description } = props;
    const { slots } = content;
    const isExpanded = ref(false); // whether expanded
    const isHover = ref(false); // whether hover state
    const hasSlot = computed(() => (slots?.default ? true : false));
    const decodedCodeStr = computed(() => decodeURIComponent(codeStr ?? ""));
    const decodedHtmlStr = computed(() => decodeURIComponent(htmlStr ?? ""));
    const decodedDesc = computed(() => decodeURIComponent(description ?? ""));
    // define the demo component
    const demoSlot =
      codePath && modules[codePath]
        ? defineAsyncComponent(modules[codePath])
        : null;

    // handle click event of control section
    const onClickControl = () => {
      isExpanded.value = !isExpanded.value;
      isHover.value = isExpanded.value;
    };

    // handle click event of copy button
    const onCopy = (e) => {
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
    };

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
  <div
    :class="['__vpdemo', isHover && '__vpdemo-hover']"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Demo Component -->
    <div class="__vpdemo-slot">
      <slot v-if="hasSlot"></slot>
      <component :is="demoSlot" v-else-if="codePath" />
      <div v-html="decodedCodeStr" v-else></div>
      <!-- Desc -->
      <div
        class="__vpdemo-show_desc"
        v-show="decodedDesc"
        v-html="decodedDesc"
      ></div>
    </div>
    <!-- Demo Codes -->
    <div class="__vpdemo-show" v-show="isExpanded">
      <!-- Copy -->
      <div class="__vpdemo-show-copy" title="copy" @click.stop="onCopy"></div>
      <!-- Code -->
      <div
        :class="['__vpdemo-show-code', 'language-' + language]"
        v-html="decodedHtmlStr"
      ></div>
    </div>
    <!-- Control Section -->
    <div class="__vpdemo-control" @click="onClickControl">
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
      <transition name="text-slide">
        <span v-show="isHover" class="__vpdemo-control-tip">{{
          isExpanded ? "Collapse" : "Expand"
        }}</span>
      </transition>
    </div>
    <!-- Buttons -->
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

.__vpdemo-hover {
  box-shadow: var(--vpdemo-shadow-2);
}

.__vpdemo-hover .__vpdemo-control {
  color: var(--vp-c-brand);
  background-color: var(--vpdemo-c-brand-dimm);
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
  background-color: var(--vp-code-block-bg);
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

.__vpdemo-show-code {
  margin-bottom: 0 !important;
}

.__vpdemo-show-copy {
  position: absolute;
  right: 8px;
  z-index: 2;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-block-bg);
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: opacity 0.25s;
}

.__vpdemo-show-copy-done {
  border-radius: 0 4px 4px 0;
  background-color: var(--vp-code-copy-code-hover-bg);
  background-image: var(--vp-icon-copied);
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
  font-weight: 500;
  color: var(--vp-code-copy-code-active-text);
  background-color: var(--vp-code-copy-code-hover-bg);
  white-space: nowrap;
  content: "Copied";
}

.__vpdemo-show pre {
  margin: 0;
  padding: 1.25rem 1.5rem;
  background-color: inherit !important;
}

.__vpdemo-show-code pre.shiki {
  padding-top: 0 !important;
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
