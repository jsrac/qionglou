import { Prop } from 'vue'

// Prop types definition
// props.ts 的类型定义
export type PropsType = {

    theme: Prop<string | object>,

    weight: Prop<string | number>

    size: Prop<string | number>,

    color: Prop<string>,

    font: Prop<string>,

    high: Prop<string | number>,

    layout: Prop<string>,

    url: Prop<string>,

}

// Export props.ts with validation and default values
// 导出带有验证和默认值的 props.ts
export const Props = {

    // Theme
    // 主题
    theme: {
        type: String as Prop<string | object>,
        default: 'default'
    },

    // Font weight (e.g. regular, bold)
    // 字体粗细(例如 regular、bold)
    weight: {
        type: String as Prop<string | number>,
        default: 'regular',
        validator: (value: string | number) =>
            ['demiLight', 'regular', 'medium', 'bold'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },

    // Font size (small, medium, large)
    // 字体大小(small、medium、large)
    size: {
        type: String as Prop<string | number>,
        default: 'medium',
        validator: (value: string | number) =>
            ['small', 'medium', 'large'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },

    // Text color
    // 文本颜色
    color: {
        type: String as Prop<string>,
        default: 'black',
    },

    // Custom font name
    // 自定义字体名称
    font: {
        type: String as Prop<string>,
        default: '',
    },

    // Line height
    // 行高
    high: {
        type: [String, Number] as Prop<string | number>,
        default: 'bigger',
        validator: (value: string | number) =>
            ['small', 'medium', 'large', 'bigger'].includes(value.toString()) ||
            (typeof value === 'number' && value >= 0),
    },

    // URL for custom font import
    // 自定义字体导入的URL
    url: {
        type: String as Prop<string>,
        default: '',
    },

    // Text layout
    // 文字布局
    layout: {
        type: String as Prop<string>,
        default: 'left',
        validator: (value: string) =>
            ['center', 'left', 'right', 'justify'].includes(value)
    }

} as PropsType