import { Prop } from 'vue'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

export type PropsType = {
  type: Prop<ButtonType>
  size: Prop<string>
  plain: Prop<boolean>
}

export const Props = {
  type: {
    type: String as Prop<ButtonType>,
    default: 'default'
  },
  size: {
    type: String as Prop<string>
  },
  plain: {
    type: Boolean as Prop<boolean>,
    default: false
  }
} as PropsType
