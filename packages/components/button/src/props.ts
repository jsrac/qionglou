// Define the types for Button component props
// 定义按钮组件的属性类型
import { Prop } from 'vue'

export type ButtonType =
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'text'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

// Define the type of props for Button component
// 定义按钮组件的属性类型
export type PropsType = {
  type: Prop<ButtonType>
  size: Prop<ButtonSize>
  plain: Prop<boolean>
  icon: Prop<string | boolean>
  round: Prop<boolean>
  circle: Prop<boolean>
  loading: Prop<boolean>
  disabled: Prop<boolean>
  link: Prop<boolean>
  onlyIcon: Prop<boolean>
  color: Prop<string>
}

export const Props = {
  // Type of button (e.g., primary, success, danger)
  // 按钮类型（如：primary、success、danger）
  type: {
    type: String as Prop<ButtonType>,
    values: [
      'default',
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text'
    ] as ButtonType[],
    default: 'default'
  },
  // Size of the button (e.g., large, normal, small)
  // 按钮大小（如：large、normal、small）
  size: {
    type: String as Prop<ButtonSize>,
    default: 'normal'
  },
  // Plain style (no background)
  // 是否为朴素样式（无背景）
  plain: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Icon for the button
  // 按钮图标
  icon: {
    type: String as Prop<string | boolean>,
    default: false
  },
  // Round style
  // 是否为圆角样式
  round: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Circle style
  // 是否为圆形样式
  circle: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Loading state
  // 是否显示加载中状态
  loading: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Disabled state
  // 是否禁用按钮
  disabled: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Display as link
  // 是否显示为链接样式
  link: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Display only the icon
  // 是否仅显示图标
  onlyIcon: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  // Custom color
  // 自定义颜色
  color: {
    type: String as Prop<string>,
    default: ''
  }
} as PropsType

// Define emitted events for Button component
// 定义按钮组件的发射事件
export const Emits = {
  // Click event
  // 点击事件
  click: (e: MouseEvent) => e instanceof MouseEvent
}
