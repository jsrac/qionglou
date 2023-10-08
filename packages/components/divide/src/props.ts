// Define the types for Button component props.ts.ts
// 定义按钮组件的属性类型
import { Prop } from 'vue'

export type showLayout = 'left' | 'center' | 'right'
export type typeLayout = 'icon' | 'text' | 'line'

// Define the type of props.ts.ts for Button component
// 定义按钮组件的属性类型
export type PropsType = {
    text: Prop<string>
    size: Prop<showLayout>
    wide: Prop<string | number>
    src: Prop<string>
    color: Prop<string | object>
    theme: Prop<string | object>
    width: Prop<showLayout | object>
    weight: Prop<string | number>
    alt: Prop<string>
    layout: Prop<string | object>
    url: Prop<string>
    font: Prop<string>
}
// Exporting the props.ts with their respective validations and defaults.
// 导出具有相应验证和默认值的props。

// @ts-ignore
export const Props = {
    weight: {
        type: String as Prop<string | number>,
        default: 'medium',
        validator: (value: string | number) =>
            ['demiLight', 'regular', 'medium', 'bold'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },
    width: {
        type: String as Prop<showLayout | object>,
        default: 'center'
    },
    layout: {
      type: String as Prop<string | object>,
      default: 'right'
    },
    url: {
        type: String as Prop<string>,
        default: ''
    },
    font: {
        type: String as Prop<string>,
        default: ''
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
    text: {
        type: String as Prop<string>,
        default: 'divide'
    },
    src: {
        type: String as Prop<string>,
        default: ''
    },
    alt: {
        type: String as Prop<string>,
        default: ''
    },
    type: {
        type: String as Prop<typeLayout | string>,
        default: 'icon'
    },
    color: {
        type: String as Prop<string | object>,
        default: 'default'
    },
    theme: {
        type: String as Prop<string | object>,
        default: 'default'
    }
} as PropsType
