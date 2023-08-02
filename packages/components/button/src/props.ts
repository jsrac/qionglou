import { Prop } from 'vue'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

export type PropsType = {
  type: Prop<ButtonType>
  size: Prop<ButtonSize>
  plain: Prop<boolean>
  icon: Prop<string | boolean>
  round: Prop<boolean>
  circle: Prop<boolean>
  loading: Prop<boolean>
  disabled: Prop<boolean>
  link: Prop<boolean>
  onlyIcon: Prop<boolean>
  color: Prop<string>
}

export const Props = {
  type: {
    type: String as Prop<ButtonType>,
    values: [
      'default',
      'primary',
      'success',
      'warning',
      'danger',
      'info',
      'text'
    ] as ButtonType[],
    default: 'default'
  },
  size: {
    type: String as Prop<ButtonSize>,
    default: 'normal'
  },
  plain: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  icon: {
    type: String as Prop<string | boolean>,
    default: false
  },
  round: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  circle: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  loading: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  link: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  onlyIcon: {
    type: Boolean as Prop<boolean>,
    default: false
  },
  color: {
    type: String as Prop<string>,
    default: ''
  }
} as PropsType

export const Emits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
}
