import { Prop } from 'vue'

// Define the types for props
// 定义 props 的类型
export type PropsType = {
    src: Prop<string>, // The source of the icon
                      // 图标的源文件路径
    type: Prop<string>, // The type of the icon (font or image)
                       // 图标的类型（字体或图片）
    alt: Prop<string>, // The alternative text for the icon
                      // 图标的替代文本
    weight: Prop<string>, // The weight of the icon
                         // 字体图标的粗细程度
    size: Prop<string | number>, // The size of the icon
                                // 图标的尺寸
    ani: Prop<string>, // The animation type for the icon
                      // 图标的动画类型
    wide: Prop<string | number>, // The width of the icon
                                // 图标的宽度
    high: Prop<string | number>, // The height of the icon
                                // 图标的高度
    font: Prop<string>, // The font family for the icon
                       // 字体图标的字体族
    url: Prop<string>, // The URL link for the icon
                      // 图标的链接地址
    color: Prop<string> // The color of the icon
                       // 图标的颜色
}

// Define the props with their types and default values
// 使用其类型和默认值定义 props
export const Props = {
    src: {
        type: String as Prop<string>, // Type of the source is string
                                     // 源文件类型为字符串
        required: true // It is required
                      // 必填项
    },
    type: {
        type: String as Prop<string>, // Type of the icon is string
                                     // 图标的类型为字符串
        default: 'img' // Default value is 'img'
                      // 默认值为 'img'
    },
    alt: {
        type: String as Prop<string>, // Type of the alternative text is string
                                     // 替代文本的类型为字符串
        default: '' // Default value is an empty string
                   // 默认值为空字符串
    },
    weight: {
        type: String as Prop<string>, // Type of the weight is string
                                     // 粗细程度的类型为字符串
        default: 'regular', // Default value is 'regular'
                            // 默认值为 'regular'
        validator: (value: string) => ['demiLight', 'regular', 'medium', 'bold'].includes(value) // Custom validator
                                                                                                // 自定义验证器
    },
    size: {
        type: [String, Number] as Prop<string | number>, // Type of the size is string or number
                                                        // 尺寸的类型为字符串或数字
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
    ani: {
        type: String as Prop<string>, // Type of the animation is string
                                     // 动画类型的类型为字符串
        default: 'none', // Default value is 'none'
                        // 默认值为 'none'
        validator: (value: string) => ['none', 'rotate', 'linear'].includes(value) // Custom validator 自定义验证器
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
    high: {
        type: [String, Number] as Prop<string | number>, // Type of the height is string or number
                                                        // 高度的类型为字符串或数字
        default: 'none', // Default value is 'none'
                        // 默认值为 'none'
        validator: (value: string | number) => {
            if (typeof value === 'string') {
                return ['none', 'small', 'medium', 'large'].includes(value)
            } else if (typeof value === 'number') {
                return value >= 0;
            }
            return false;
        } // Custom validator 自定义验证器
    },
    font: {
        type: String as Prop<string>, // Type of the font is string
                                     // 字体的类型为字符串
        default: '' // Default value is an empty string
                    // 默认值为空字符串
    },
    url: {
        type: String as Prop<string>, // Type of the URL is string
                                     // 链接地址的类型为字符串
        default: '' // Default value is an empty string
                    // 默认值为空字符串
    },
    color: {
        type: String as Prop<string>, // Type of the color is string
                                      // 颜色的类型为字符串
        default: 'black' // Default value is 'black'
                        // 默认值为 'black'
    },
} as PropsType // Define the type of Props as PropsType
              // 将 Props 的类型定义为 PropsType