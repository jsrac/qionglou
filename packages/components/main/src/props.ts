// Importing the 'Prop' type from Vue for typing props.ts.ts.
// 从Vue中导入'Prop'类型，用于为props定义类型。
import { Prop } from 'vue'

// Defining the type for props.ts.
// 为props定义类型。
export type PropsType = {
    layout: Prop<string>, // Layout type prop.
                         // 布局类型的prop。
    color: Prop<string>, // Color prop.
                        // 颜色的prop。
    site: Prop<string>, // Site type prop.
                        // 位置类型的prop。
    wide: Prop<string>, // Wide type prop.
                        // 宽度类型的prop。
    high: Prop<string> // High type prop.
                      // 高度类型的prop。
}

// Exporting the props.ts with their respective validations and defaults.
// 导出具有相应验证和默认值的props。
export const Props = {
    layout: {
        type: String as Prop<string>,
        default: 'default',
        required: false,
        validator: (value: string) =>
            ['default', 'center', 'right', 'left', 'top', 'bottom'].includes(value)
    },
    color: {
        type: String as Prop<string>,
        default: '',
    },
    site: {
        type: String as Prop<string>,
        default: 'none',
        required: false,
        validator: (value: string) => ['center', 'left', 'right'].includes(value)
    },
    wide: {
        type: String as Prop<string>,
        default: 'auto'
    },
    high: {
        type: String as Prop<string>,
        default: 'auto'
    }
} as PropsType
