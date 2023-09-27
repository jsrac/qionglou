<template>
  <!-- Conditional div with dynamic class and style bindings
  条件性的div，带有动态的类和样式绑定 -->
  <div class="ql-button"
       ref="buttonRef"
       @mouseenter="applyReactStyles('hover')"
       @mouseleave="applyReactStyles('reset')"
       @mousedown="applyReactStyles('active')"
       @mouseup="applyReactStyles('mouseUp')"
       :style="[buttomSize, typeStyle, customStyles]"
       :class="buttonData.classes"
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
import { computed, ref, onMounted, watch } from "vue";
import { Props, Emits } from './props';
import { MouseEvent } from "happy-dom";


defineOptions({ name: 'QlButton' })

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

const { type, react, size, text, url, weight, font, color, plain, round, circle, disabled, link , api} = props
const reactStyles = ref(react);

const buttonData = ref({
  text: "",
  classes: {},
  class: "",
  type: ""
});


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

const typeStyle = computed(() => {
  const typeStyles = {
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
    return typeStyles[type] || {};
});


const customStyles = computed(() => {
  if (typeof type === 'object') {
    return type;
  } else {
    return {};
  }
});
const applyReactStyles = (effect) => {
  const target = buttonRef.value;
  const styles = reactStyles.value;
  if (styles && styles[effect]) {
    Object.assign(target.style, styles[effect]);
  }
};

// 新增一个 reactive 变量来存储 API 返回的数据
const apiData = ref({});

// 定义一个函数来获取 API 数据
const handleApiData = (data) => {
  if (type === "api") {
    buttonData.value.text = data.name;
    buttonData.value.class = data.message;
    buttonData.value.type = data.type;
    if (data.message === "200" && data.type === "success") {
      buttonData.value.classes['ql-button--' + buttonData.value.type] = true;
    }
  } else {
    buttonData.value.text = text;
  }
};

const fetchApiData = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    handleApiData(data);
  } catch (error) {
    console.error('Error fetching API data:', error);
  }
};



// 在组件加载时调用 fetchApiData
onMounted(() => {
  fetchApiData();
});

// 监听 apiData 的变化，如果 message 为 200，则应用按钮的 name
watch(apiData, (newData) => {
  if (newData.message === '200') {
    // 应用按钮的 name
    // 你可以在这里使用 newData.name 做进一步的操作
    // 例如将 newData.name 赋值给文本组件的 props
    text.value = newData.name;
  }
});
</script>