// Importing the 'Prop' type from Vue for typing props.ts.ts.
// 从Vue中导入'Prop'类型，用于为props定义类型。
import {Prop} from 'vue'

// Defining the type for props.ts.
// 为props定义类型。
export type PropsType = {
    current: Prop<number>
    total: Prop<number>
    layout: Prop<string>
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
    }
} as PropsType
