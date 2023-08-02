import { withInstall } from '@qionglou/utils'
import Button from './src/button.vue'

export const QlButton = withInstall(Button)

export default QlButton
export type { ButtonType, ButtonSize } from './src/props'
