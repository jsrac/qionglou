// Importing the 'Prop' type from Vue for typing props.ts.ts.
// 从Vue中导入'Prop'类型，用于为props定义类型。
import { Prop } from 'vue'

// Defining the type for props.ts.
// 为props定义类型。
export type PropsType = {
    wide: Prop<string>,
    unit: Prop<string>,
    on: Prop<boolean>,
    top: Prop<string | number>,
    bottom: Prop<string | number>,
    right: Prop<string | number>,
    left: Prop<string | number>,
}

// Exporting the props.ts with their respective validations and defaults.
// 导出具有相应验证和默认值的props。
export const Props = {
    wide: {
        type: String as Prop<string>,
        default: '10',
    },
    unit: {
        type: String as Prop<string>,
        default: '%',
    },
    on: {
        type: Boolean as Prop<boolean>,
        default: false,
    },
    top: {
        type: [String, Number] as Prop<string | number>,
        default: 'none',
        validator: (value: string | number) =>
            ['none', 'small', 'medium', 'large'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },
    bottom: {
        type: [String, Number] as Prop<string | number>,
        default: 'none',
        validator: (value: string | number) =>
            ['none' ,'small', 'medium', 'large'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },
    right: {
        type: [String, Number] as Prop<string | number>,
        default: 'none',
        validator: (value: string | number) =>
            ['none', 'small', 'medium', 'large'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },
    left: {
        type: [String, Number] as Prop<string | number>,
        default: 'none',
        validator: (value: string | number) =>
            ['none', 'small', 'medium', 'large'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },
} as PropsType
