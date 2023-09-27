// Define the types for Button component props.ts
// 定义按钮组件的属性类型
import { Prop } from 'vue'

// Defining the type for props.
// 为props定义类型
export type ButtonType =
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'text'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

// Define the type of props.ts for Button component
// 定义按钮组件的属性类型
export type PropsType = {
  type: Prop<ButtonType | object>
  size: Prop<ButtonSize>
  text: Prop<string>
  url: Prop<string>
  font: Prop<string>
  color: Prop<string>
  weight: Prop<string>
  react: Prop<string>
  api: Prop<string>
}
// Exporting the props with their respective validations and defaults.
// 导出具有相应验证和默认值的props。
// @ts-ignore
export const Props = {
  size: {
    type: String as Prop<ButtonSize>,
    default: 'normal'
  },
  api: {
    type: String as Prop<string>,
    default: 'https://e8d5a602-113e-478a-bf2b-0f6ca83dd51c.mock.pstmn.io'
  },
  text: {
    type: String as Prop<string>,
    default: ''
  },
  font: {
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
  // Type of button (e.g., primary, success, danger)
  // 按钮类型（如：primary、success、danger）
  type: {
    type: String as Prop<ButtonType | object>,
    values: [
      'default',
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text',
      'api'
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
        boxShadow: '5px 5px 14px #bababb54',
        transition: 'color 0.25s, opacity 0.25s',
        opacity: '0.6'
      },
      mouseUp: {
        transition: 'color 0.54s, opacity 0.25s',
        boxShadow: ''
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
