// Define the types for Button component props.ts.ts
// 定义按钮组件的属性类型
import { Prop } from 'vue'

// Defining the type for props.ts.
// 为props定义类型
export type ButtonState =
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'text'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'
export type ButtonType = 'api' | 'default' | 'icon' | 'font'

// Define the type of props.ts.ts for Button component
// 定义按钮组件的属性类型
export type PropsType = {
  state: Prop<ButtonState | object>
  size: Prop<ButtonSize>
  text: Prop<string>
  url: Prop<string>
  font: Prop<string>
  color: Prop<string>
  weight: Prop<string>
  react: Prop<string>
  wide: Prop<string | number>,
  api: Prop<string>
  src: Prop<string>
  layout: Prop<string | object>
  music: Prop<object>
}
// Exporting the props.ts with their respective validations and defaults.
// 导出具有相应验证和默认值的props。
// @ts-ignore
export const Props = {
  size: {
    type: String as Prop<ButtonSize>,
    default: 'normal'
  },
  music: {
    type: String as Prop<object>
  },
  api: {
    type: String as Prop<string>,
    default: ''
  },
  url: {
    type: String as Prop<string>,
    default: ''
  },
  text: {
    type: String as Prop<string>,
    default: ''
  },
  font: {
    type: String as Prop<string>,
    default: ''
  },
  src: {
    type: String as Prop<string>,
    default: ''
  },
  weight: {
    type: String as Prop<string>,
    default: '500'
  },
  color: {
    type: String as Prop<string>,
    default: '',
  },
  layout: {
    type: String as Prop<string | object>,
    default: '',
  },
  // Type of button (e.g., primary, success, danger)
  // 按钮类型（如：primary、success、danger）
  state: {
    type: String as Prop<ButtonState | object>,
    values: [
      'default',
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text',
      'api'
    ] as ButtonState[],
    default: 'default',
  },
  wide: {
    type: [String, Number] as Prop<string | number>, // Type of the width is string or number
    // 宽度的类型为字符串或数字
    default: 'medium', // Default value is 'medium'
    // 默认值为 'medium'
    validator: (value: string | number) => {
      if (typeof value === 'string') {
        return ['small', 'medium', 'large'].includes(value)
      } else if (typeof value === 'number') {
        return value >= 0;
      }
      return false;
    } // Custom validator
    // 自定义验证器
  },
  type: {
    type: String as Prop<ButtonType | object>,
    values: [
      'api',
      'default',
      'icon',
      'font',
      'text'
    ] as ButtonType[],
    default: 'default',
  },
  react: {
    type: Object as Prop<object>,
    default: {
      hover: {
        opacity: '0.8',
        transition: 'color 0.54s, opacity 0.25s'
      },
      reset: {
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
    }
  }
} as PropsType
// Define emitted events for Button component
// 定义按钮组件的发射事件
export const Emits = {
  // Click event
  // 点击事件
  click: (e: MouseEvent) => e instanceof MouseEvent
}
