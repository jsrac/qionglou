// Define the types for Button component props.ts
// 定义按钮组件的属性类型
import { Prop } from 'vue'

export type showLayout = 'left' | 'center' | 'right'
export type typeLayout = 'icon' | 'text'

// Define the type of props.ts for Button component
// 定义按钮组件的属性类型
export type PropsType = {
    text: Prop<string>
    size: Prop<showLayout>
    color: Prop<string | object>
    theme: Prop<string>
    width: Prop<showLayout | object>
    weight: Prop<string | number>
}
// Exporting the props with their respective validations and defaults.
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
    text: {
        type: String as Prop<string>,
        default: 'divide'
    },
    type: {
        type: String as Prop<typeLayout | string>,
        default: 'text'
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
