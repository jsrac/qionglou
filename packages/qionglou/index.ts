import { install } from './install'
import Components from './components'
const installer = install([...Components])

export * from '@qionglou/components'
export default installer
