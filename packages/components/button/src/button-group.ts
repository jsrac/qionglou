import { buttonProps } from './button'

import type { ExtractPublicPropTypes } from 'vue'

export const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
} as const
export type ButtonGroupProps = ExtractPublicPropTypes<typeof buttonGroupProps>
