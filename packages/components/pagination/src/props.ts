// Importing the 'Prop' type from Vue for typing props.ts.ts.
// 从Vue中导入'Prop'类型，用于为props定义类型。
import {Prop} from 'vue'

export type PagLayout = 'center' | 'left' | 'right'

// Defining the type for props.ts.
// 为props定义类型。
export type PropsType = {
    current: Prop<number>
    total: Prop<number>
    layout: Prop<string>
    site: Prop<string | PagLayout | object>
    url: Prop<string>
    font: Prop<string>
    color: Prop<string>
    weight: Prop<string>
    btType: Prop<string>
    source: Prop<object>
    arrow: Prop<object>
}

// Exporting the props.ts with their respective validations and defaults.
// 导出具有相应验证和默认值的props。
// @ts-ignore
export const Props = {
    current: {
        type: Number as Prop<number>
    },
    total: {
        type: Number as Prop<number>
    },
    layout: {
        type: String as Prop<string>,
        default: 'abridge'
    },
    site: {
        type: String as Prop<string | PagLayout | object>,
        default: 'center'
    },
    weight: {
        type: String as Prop<string>,
        default: '500'
    },
    color: {
        type: String as Prop<string>
    },
    font: {
        type: String as Prop<string>,
        default: ''
    },
    url: {
        type: String as Prop<string>,
        default: ''
    },
    btType: {
        type: String as Prop<string>,
        default: ''
    },
    source: {
        type: Object as Prop<object>,
    },
    arrow: {
        type: Object as Prop<object>,
    }
} as PropsType
