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
    background: Prop<string>
    color: Prop<string>
    theme: Prop<string>
}
// Exporting the props with their respective validations and defaults.
// 导出具有相应验证和默认值的props。


// @ts-ignore
export const Props = {
    text: {
        type: String as Prop<string>,
        default: 'test'
    },
    layout: {
        type: String as Prop<showLayout>,
        default: 'test'
    },
    type: {
        type: String as Prop<typeLayout>,
        default: 'test'
    },
    color: {
        type: String as Prop<string>,
        default: 'rgb(156, 156, 156)'
    },
    background: {
        type: String as Prop<string | object>,
        default: 'white'
    },
    theme: {
        type: String as Prop<string | object>,
        default: 'default'
    }
} as PropsType
