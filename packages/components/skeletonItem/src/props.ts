import { Prop, PropType } from 'vue'
export type PropsType = {
    variant: Prop<string>
    width?: Prop<string | number>
    height?: Prop<string | number>
}
// @ts-ignore
export const Props = {
    variant: {
        type: String as PropType<'image' | 'h3' | 'text'>,
        required: true
    },
    width: {
        type: [String, Number],
        default: '100%'
    },
    height: {
        type: [String, Number],
        default: '16px'
    }
} as PropsType
