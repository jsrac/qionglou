import { type PropType, ExtractPublicPropTypes } from 'vue'

export type Type =
  | 'default'
  | 'text'
  | 'outlined'

export type Size = 'large' | 'normal' | 'small' | 'mini'

export const buttonProps = {
  color: String,
  disabled: Boolean,
  bordered: Boolean,
  textColor: String,
  loading: Boolean,
  keyboard: Boolean,
  icon: String,
  type: {
    type: String as PropType<Type>,
    default: 'default'
  },
  attrType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  size: {
    type: String as PropType<Size>,
    default: 'normal'
  },
} as const

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent
}

export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
