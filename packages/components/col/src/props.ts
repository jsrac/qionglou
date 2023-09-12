// Define the types for QlCol component props
// 定义 QlCol 组件的属性类型
import { Prop } from 'vue'

export type PropsType = {
    // Gap between grid items
    // 栅格项之间的间隔
    gap: Prop<string>
    // Column configuration for different resolutions
    // 不同分辨率下的列配置
    col: Prop<Record<string, number>>
}

export const Props = {
    // Gap between grid items (default: 'auto')
    // 栅格项之间的间隔（默认值：'auto'）
    gap: {
        type: String as Prop<string>,
        default: 'auto'
    },
    // Column configuration for different resolutions
    // 不同分辨率下的列配置
    col: {
        type: Object as Prop<Record<string, number>>
    }
} as PropsType
