// Importing the 'Prop' type from Vue for typing props.ts.
// 从Vue中导入'Prop'类型，用于为props定义类型。
import { Prop } from 'vue'

// Defining the types for component props.ts.
// 定义组件props的类型。
export type PropsType = {    // 用于指定位置的prop。
    position: Prop<string>,  // A prop for specifying the position.

    zIndex: Prop<number>     // A prop for specifying the z-index.
                             // 用于指定z-index的prop。
}

// Exporting the props.ts with their respective types and default values.
// 使用它们各自的类型和默认值导出props。
export const Props = {
    position: {
        type: String as Prop<string>,
        default: 'top',  // Default value is set to 'top'.
                        // 默认值设置为'top'。
        // Validator function to ensure the value is one of the specified positions.
        // 验证函数以确保值是指定位置之一。
        validator: (value: string) => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    zIndex: {
        type: Number as Prop<number>,
        default: 100     // Default z-index is set to 100.
                         // 默认z-index设置为100。
    }
} as PropsType
