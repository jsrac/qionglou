<template>
  <!-- Conditional div with dynamic class and style bindings
  条件性的div，带有动态的类和样式绑定 -->
  <div class="ql-button" v-if="type === 'icon'">
    <ql-icon type="img" :src="src" :wide="wide">
    </ql-icon>
  </div>
  <div class="ql-button" v-else-if="type === 'default'"
       ref="buttonRef"
       @mouseenter="applyReactStyles('hover')"
       @mouseleave="applyReactStyles('reset')"
       @mousedown="applyReactStyles('active')"
       @mouseup="applyReactStyles('mouseUp')"
       :style="[buttomSize, stateStyle, customStyles, buttonData.apiStyle]"
  >
    <ql-text
        :url="url"
        :font="font"
        :color="color"
        :weight="weight">
      {{ buttonData.text }}
    </ql-text>
  </div>
</template>

<script setup lang="ts">
import QlText from "../../text";
import QlIcon from "../../icon";
import { computed, ref, onMounted, watch } from "vue";
import { Props, Emits } from './props';
import { MouseEvent } from "happy-dom";
import {src} from "gulp";

// Define component options
// 定义组件选项
defineOptions({ name: 'QlButton' })

// Create a reference to the button element
// 创建对按钮元素的引用
const buttonRef = ref<HTMLElement | null>(null);

// Define props.ts and emits
// 定义属性和发射器
const props = defineProps(Props)
const emits = defineEmits(Emits)

// Handle click event
// 处理点击事件
const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}

// Destructure props for easier access
// 解构属性以便更容易访问
const { type, state ,react, size, src, text, url, weight, font, color, plain, round, circle, disabled, link , api, wide} = props
const reactStyles = ref(react);

// Create a reactive object to store button data
// 创建一个响应式对象来存储按钮数据
const buttonData = ref({
  text: "",
  classes: {},
  class: "",
  state: "",
  apiStyle: {}
});

// Compute button size based on prop value
// 根据属性值计算按钮大小
const buttomSize = computed(() => {
  if (size === 'normal') {
    return {
      padding: '10px 15px 10px 15px'
    };
  } else {
    const sizeOptions = {
      small: {
        padding: '7px'
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
    return sizeOptions[size] || 'padding:' + size;
  }
})

// Compute button state specific styles
// 根据按钮类型计算特定样式
const stateStyle = computed(() => {
  const stateStyles = {
    default: {
      border: '1.5px solid #DADCE0',
      fontWeight: '500',
      color: 'rgb(0 120 255)',
      borderRadius: '4px !important',
    },
    primary: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(0, 120, 255)',
      borderRadius: '4px !important',
    },
    success: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#00dc5c',
      borderRadius: '4px !important',
    },
    warning: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#fdbf00',
      borderRadius: '4px !important',
    },
    danger: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#ff0a0a',
      borderRadius: '4px !important',
    }
  };
    return stateStyles[state] || {};
});

// Compute styles based on the API response
// 根据 API 响应计算样式
const computeApiStyle = () => {
  const stateStyles = {
    default: {
      border: '1.5px solid #DADCE0',
      fontWeight: '500',
      color: 'rgb(0 120 255)',
      borderRadius: '4px !important',
    },
    primary: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(0, 120, 255)',
      borderRadius: '4px !important',
    },
    success: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#00dc5c',
      borderRadius: '4px !important',
    },
    warning: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#fdbf00',
      borderRadius: '4px !important',
    },
    danger: {
      fontWeight: '500',
      color: 'rgb(255,255,255)',
      backgroundColor: '#ff0a0a',
      borderRadius: '4px !important',
    }
  };
  return stateStyles[buttonData.value.state] || {};
};


// Compute custom styles if state is an object
// 如果 state 是对象，则计算自定义样式
const customStyles = computed(() => {
  if (typeof state === 'object') {
    return state;
  } else {
    return {};
  }
});

// Apply react styles based on effect
// 根据效果应用 react 样式
const applyReactStyles = (effect) => {
  const target = buttonRef.value;
  const styles = reactStyles.value;
  if (styles && styles[effect]) {
    Object.assign(target.style, styles[effect]);
  }
};

// Create a reactive variable to store API response data
// 创建一个响应式变量来存储 API 响应数据
const apiData = ref({});

// Define a function to handle API data
// 定义一个函数来处理 API 数据
const handleApiData = (data) => {
  if (type === "api") {
    buttonData.value.text = data.name;
    buttonData.value.class = data.message;
    buttonData.value.state = data.state;
    if (data.message === "200") {
      buttonData.value.apiStyle = computeApiStyle();
    } else {
      buttonData.value.text = text;
    }
  } else {
    buttonData.value.text = text;
  }
};
// Fetch API data asynchronously
// 异步获取 API 数据
const fetchApiData = async () => {
  try {
    if (!api) {
      buttonData.value.text = text;
      return;
    }
    const response = await fetch(api);
    const data = await response.json();
    handleApiData(data);
  } catch (error) {
    console.error('Error fetching API data:', error);
  }
};

// Call fetchApiData when component is mounted
// 在组件加载时调用 fetchApiData
onMounted(() => {
  fetchApiData();
});

// Watch for changes in apiData, apply button name if message is 200
// 监听 apiData 的变化，如果 message 为 200，则应用按钮的 name
watch(apiData, (newData) => {
  if (newData.message === '200') {
    // Apply button name
    // You can perform further operations with newData.name here
    // For example, assign newData.name to props of the text component
    // 应用按钮的 name
    // 你可以在这里使用 newData.name 做进一步的操作
    // 例如将 newData.name 赋值给文本组件的 props
    text.value = newData.name;
  }
});
</script>